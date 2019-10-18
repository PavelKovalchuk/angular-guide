import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService
      .isAuthenticated()
      .then((auth: boolean) => {
        if (auth) {
          return true;
        } else {
          this.router.navigate(["/"]);
        }
      })
      .catch(error => {
        console.log("canActivate error", error);
        return false;
      });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean  {
    return this.canActivate(route, state);
  }
}
