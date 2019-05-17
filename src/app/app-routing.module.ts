import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HrComponent } from './hr/hr.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',   redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'hr', component: HrComponent },
  // { path: 'reviewer-dashboard', component: ReviewerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
