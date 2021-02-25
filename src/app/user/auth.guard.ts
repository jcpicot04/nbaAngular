import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthService,
    private router : Router
     ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):   boolean  {
    //return this.auth.isAuth();
  if (this.auth.isAuth())  return true;
  else this.router.navigate(['/login']);
  return false;
  }
  }


