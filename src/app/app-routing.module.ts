import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HrComponent } from './hr/hr.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',   redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'hr', component: HrComponent },
  { path: 'reviewer', component: ReviewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
