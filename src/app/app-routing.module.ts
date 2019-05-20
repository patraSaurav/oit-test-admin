import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HrComponent } from './hr/hr.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { AdminHrComponent } from './admin/admin-hr/admin-hr.component';
import { AdminReviewerComponent } from './admin/admin-reviewer/admin-reviewer.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-hr', component: AdminHrComponent },
  { path: 'admin-reviewer', component: AdminReviewerComponent },
  { path: 'hr', component: HrComponent },
  { path: 'reviewer', component: ReviewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
