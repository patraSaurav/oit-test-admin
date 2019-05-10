import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrUserLoginComponent } from './hr/hr-user-login/hr-user-login.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: HrUserLoginComponent },
  { path: 'admin-login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
