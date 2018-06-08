import { Injectable } from '@angular/core';
import { AppSessionService }  from "../shared/session/app-session.service";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}  from "@angular/router";

@Injectable()
export class AccountRouteGuard implements CanActivate, CanActivateChild {

  constructor(
    private _router: Router,
    private _sessioonService: AppSessionService
  ){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(this._sessioonService.user){
      this._router.navigate(['/app/home']);
    }

    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
