import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthTokenService } from '../Service/auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenGuard implements CanActivate {
  constructor(private authTokenService:AuthTokenService,private router:Router, private tostr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("authTokenGuard call...");
    if(this.authTokenService.authToken == undefined || this.authTokenService.authToken ==""){
      this.router.navigateByUrl("/login")
      this.tostr.success("Please Login First")
      return false;
    }
      return true;
  }
  
}
