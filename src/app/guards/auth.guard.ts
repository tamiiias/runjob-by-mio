import { Injectable } from "@angular/core";
import { CanLoad, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of, from } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(
    private authenticationService: AuthenticationService,
    public router: Router
  ) {}

  canLoad() {
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
                  return this.router.parseUrl('/login');
                }
                else {
                  // user is logged in and token is valid
                  return of(true);
                }
              })
            )
        } else {
          // there is no logged user
          return this.router.parseUrl('/login');
        }
      })
    );
  }
}