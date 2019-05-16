import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { HrDashboardComponent } from './dashboard/hr-dashboard/hr-dashboard.component';
import { ReviewerDashboardComponent } from './dashboard/reviewer-dashboard/reviewer-dashboard.component';
import { HrUserComponent } from './hr-user/hr-user.component';
import { UserUserComponent } from './user-user/user-user.component';
import { ReviewerUserComponent } from './reviewer-user/reviewer-user.component';
import { CommonComponent } from './common/common.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserDashboardComponent,
    HrDashboardComponent,
    ReviewerDashboardComponent,
    HrUserComponent,
    UserUserComponent,
    ReviewerUserComponent,
    CommonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
