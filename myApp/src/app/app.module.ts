import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { from } from 'rxjs';
import { SigninComponent } from './signin/signin.component';
import { LogHistoryComponent } from './log-history/log-history.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ChangePasswordComponent,
    SigninComponent,
    LogHistoryComponent,
    HeaderComponent,
    HomeComponent,
    PaymentsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot (
      [
      // { path: '', component:SignupComponent },
      { path: 'signup', component:SignupComponent },
      { path: 'change_password', component:ChangePasswordComponent },
      { path: 'signin', component:SigninComponent },
      { path: 'loghistory', component:LogHistoryComponent },
      { path: 'home', component:HomeComponent },
      { path: 'Payments', component:PaymentsComponent }
      ])

  ],
  providers: [],
  bootstrap: [AppComponent],
   
    


})
export class AppModule { }
