import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { UsersService } from '../users.service';

@Injectable({ providedIn: 'root' })
export class UserResolveService implements Resolve<any> {
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(' second resolve entered');
    console.log(route.params['id']);
    return this.usersService.getUser(route.params['id']);
  }
}
