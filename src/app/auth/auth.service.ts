import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.setUserInLocalStorage({
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    });
    this.authSuccessfully();
  }

  login(authData: AuthData) {
    this.setUserInLocalStorage({
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    });
    this.authSuccessfully();
  }

  logout() {
    localStorage.clear();
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user')) as User;
    return { ...user };
  }

  isAuth() {
    const user = this.getUser();
    return Object.keys(user).length !== 0 && user !== null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

  private setUserInLocalStorage(user: User) {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }
}
