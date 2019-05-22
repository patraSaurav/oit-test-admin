import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonComponent } from './common/common.component';
import { AdminComponent } from './admin/admin.component';
import { HrComponent } from './hr/hr.component';
import { UserComponent } from './user/user.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { AdminHrComponent } from './admin/admin-hr/admin-hr.component';
import { AdminReviewerComponent } from './admin/admin-reviewer/admin-reviewer.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { HrReviewerComponent } from './hr/hr-reviewer/hr-reviewer.component';
import { PagerService } from './common/pager-service.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommonComponent,
    AdminComponent,
    HrComponent,
    UserComponent,
    ReviewerComponent,
    AdminHrComponent,
    AdminReviewerComponent,
    UserRegistrationComponent,
    HrReviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ PagerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
