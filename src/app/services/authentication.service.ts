import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Preferences } from '@capacitor/preferences';
import { Plugins } from '@capacitor/core';

import { environment } from '../../environments/environment';
import { Subject, Observable, of, from } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedUser: Subject<any> = new Subject<any>();

  constructor(public http: HttpClient) {}

  async getUser() {
    const { value } = await Preferences.get({ key: 'user' });   
    return value;
  }
  
  async setUser(user: any) {
    await Preferences.set({
      key: 'user',
      value: JSON.stringify(user)
    });

    this.loggedUser.next(JSON.stringify(user));
  }

  // check if user is logged in and token is valid
  isLoggedIn(): Observable<boolean> {
    return from(this.getUser())
    .pipe(
      concatMap(user => {
        if (user) { // user is the value returned from the local Preferences
          return this.validateAuthToken(JSON.parse(user).token)
          .pipe(
            catchError(error => of(error)),
            map(result => {
              if (result.error) {
                // token is expired
                return false;
              }
              else
                // user is logged in and token is valid
                return true;
            })
          )
        } else {
          // there is no logged user
          console.info('there is no logged user');
          return of(false);
        }
      })
    );
  }

  loggedUserObservable(): Observable<boolean> {
    return this.loggedUser.asObservable();
  }

  async logOut() {
    await Preferences.remove({ key: 'user' });
    this.loggedUser.next(null);
  }

  doLogin(username: string, password: string) {
    return this.http.post(environment.wordpress.auth_url, {
      username: username,
      password: password
    });
  }

  doRegister(userData: any) {
    let header : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(environment.wordpress.api_url + 'users/register', userData, {headers: header});
  }

  updateUser(userData: any) {
    let header : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(environment.wordpress.api_url + 'users/update', userData, {headers: header});
  }

  validateAuthToken(token: string) {
    let header : HttpHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.post(environment.wordpress.auth_url + '/validate?token=' + token,
      {}, {headers: header})
  }
  
  lostPassword(user_email) {
    return this.http.post(environment.wordpress.api_url + 'users/lostpassword', { email: user_email });
  }
  
  resetPassword(data) {
    let header : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(environment.wordpress.api_url + 'users/resetpassword', { login: data.login, rp_key: data.rp_key, pass1: data.pass1 }, {headers: header});
  }
  
}