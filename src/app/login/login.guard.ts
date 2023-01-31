import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of, from } from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    public router: Router
  ) {}

  canActivate() {
    return from(this.authenticationService.getUser())
    .pipe(
      concatMap(user => {
        if (user) { // user is the value returned from the local storage
          return this.authenticationService.validateAuthToken(JSON.parse(user).token)
            .pipe(
              catchError(error => of(error)),
              map(result => {
                if (result.error) {
                  // token is expired
                  return true;
                }
                else {
                  // user is logged in and token is valid
                  var user_obj = JSON.parse(user);
                  console.info('guard user');
                  console.info(user_obj);
                  console.info(user_obj.emploi_formation);
                  if(user_obj.emploi_formation=="formation"){
                    return this.router.parseUrl('/tabs/formations');
                  }
                  else{
                    return this.router.parseUrl('/tabs');
                  }
                }
              })
            )
        } else {
          // there is no logged user
          console.info('no user logged in');
          return of(true);
        }
      })
    );
  }
}