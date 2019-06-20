import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log("hallo");
      this.router.navigate(['/login']);
      return false;
    } else {
      this.auth.logout();
    }
    return true;
  }
}
