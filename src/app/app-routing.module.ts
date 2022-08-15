import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
