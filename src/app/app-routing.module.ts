import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersResolveService } from './users-resolve.service';




const routes: Routes = [
  {
    path: 'test',
    component: AppComponent,
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
