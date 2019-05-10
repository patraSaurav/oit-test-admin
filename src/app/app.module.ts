import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { HrDashboardComponent } from './dashboard/hr-dashboard/hr-dashboard.component';
import { ReviewerDashboardComponent } from './dashboard/reviewer-dashboard/reviewer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserDashboardComponent,
    HrDashboardComponent,
    ReviewerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
