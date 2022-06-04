import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
  constructor(private router : Router , private global:GlobalService){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let token = localStorage.getItem("token")
      if(token){
        this.router.navigateByUrl("")
        return false
      }
    return true;
  }
  
}
