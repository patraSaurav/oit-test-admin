import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { HrDashboardComponent } from './dashboard/hr-dashboard/hr-dashboard.component';
import { ReviewerDashboardComponent } from './dashboard/reviewer-dashboard/reviewer-dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'user-dashboard', component: UserDashboardComponent },
  {path: 'hr-dashboard', component: HrDashboardComponent },
  {path: 'reviewer-dashboard', component: ReviewerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
