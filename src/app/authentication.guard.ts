import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginLogoutService } from 'src/app/services/login-logout.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(private loginService: LoginLogoutService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginService.getLoginObserver().pipe(
      tap((data: boolean) => {
        return data;
      })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginService.getLoginObserver().pipe(
      tap((data: boolean) => {
        return data;
      })
    );
  }
}
