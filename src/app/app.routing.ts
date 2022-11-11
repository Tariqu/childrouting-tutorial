import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const route: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: MainBodyComponent },
      { path: 'users', component: UsersComponent },
      { path: 'posts', component: PostsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
