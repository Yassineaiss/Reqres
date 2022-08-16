import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserResolveService } from './user/user-resolve.service';
import { UserComponent } from './user/user.component';
import { UsersResolveService } from './users-resolve.service';
import { UsersComponent } from './users/users.component';




const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    resolve: {
      user: UsersResolveService,
    },
  },
  {
    path: 'users/:id',
    component: UserComponent,
    resolve: {
      user: UserResolveService,
    },

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
