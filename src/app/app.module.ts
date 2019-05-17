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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommonComponent,
    AdminComponent,
    HrComponent,
    UserComponent,
    ReviewerComponent
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
