import { AuthService } from './../../shared/services/auth.service';
import { UserService } from './../../shared/services/user.service';
import { switchMap, map } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(map((appUser :any) => appUser.isAdmin))
  }


}
