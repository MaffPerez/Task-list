import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service";

export const AuthGuard: CanActivateFn = ():Observable<boolean | UrlTree> | Promise<boolean | UrlTree>| boolean| UrlTree => {
  return inject(AuthService).getStatusUser() ? true : inject(Router).createUrlTree(['login']);
};