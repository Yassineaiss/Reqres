import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';


import { UsersService } from '../users.service';


@Injectable({providedIn:'root'})

export class UserResolveService implements Resolve<any> {
  constructor(private usersService: UsersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(' second resolve entered');
    // return this.usersService.getUsers();


    };
  }

