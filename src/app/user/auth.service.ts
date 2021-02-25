import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url = '/assets/users.json';

  authUser(user: User, recordar: boolean): Observable<User>{
    return this.http.get<User>(this.url)
    .pipe(map(u => {
      u['passwd']= user.passwd;
    localStorage.setItem('token',u.token);
    if (u.login != null) {
      localStorage.setItem('login',u.login);
    }
    return u;}));
  }

  isAuth(): boolean{
    if (localStorage.getItem('token')) {
      return true;
    }
     else return false;
    }

    logout(): void{

        localStorage.removeItem('token');
    }
  }

