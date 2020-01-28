import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { BookcarComponent } from './bookcar/bookcar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { MaulicabsComponent } from './maulicabs/maulicabs.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChnagepasswordComponent } from './chnagepassword/chnagepassword.component';
import { EnterotpComponent } from './enterotp/enterotp.component';
import { PasshistoryComponent } from './passhistory/passhistory.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FrontComponent } from './front/front.component';
import { AllUserComponent } from './all-user/all-user.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { DriverComponent } from './driver/driver.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MapDataComponent } from './map-data/map-data.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { DriverdetailsComponent } from './driverdetails/driverdetails.component';
import { CabbookComponent } from './cabbook/cabbook.component';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: 
  [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    HomeComponent,
    BookcarComponent,
    ContactusComponent,
    SignupComponent,
    MaulicabsComponent,
    AboutusComponent,
    ChnagepasswordComponent,
    EnterotpComponent,
    PasshistoryComponent,
    FrontComponent,
    AllUserComponent,
    ResetpasswordComponent,
    AdminComponent,
    CustomerComponent,
    DriverComponent,
    UserdetailsComponent,
    MapDataComponent,
    PaymentsComponent,
    ProfileComponent,
    DriverdetailsComponent,
    CabbookComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    RouterModule.forRoot(
      [{ path: 'forgetpassword', component: ForgetpasswordComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Book', component: BookcarComponent },
      { path: 'Home', component: HomeComponent },
      { path: 'Sign', component: SignupComponent },
      { path: 'MauliCabs', component: MaulicabsComponent},
      { path: 'About', component: AboutusComponent},
      { path: 'Contact', component: ContactusComponent},
      { path: 'EnterOTP', component: EnterotpComponent},
      { path: 'PassHistory', component: PasshistoryComponent},
      { path: 'AllUser', component: AllUserComponent},
      { path: 'ChangePassword', component: ChnagepasswordComponent},
      { path: 'ResetPassword', component: ResetpasswordComponent},
      { path: 'Admin', component: AdminComponent},
      { path: 'Driver', component: DriverComponent},
      { path: 'Customer', component: CustomerComponent},
      { path: 'UserDetails', component: UserdetailsComponent},
      { path: 'MapData/:QueryString', component: MapDataComponent},
      { path: 'Payments', component: PaymentsComponent},
      { path: 'Profile', component: ProfileComponent},
      { path: 'DriverDetails', component: DriverdetailsComponent},
      { path: 'CabBook', component: CabbookComponent}
     
    ],
      
      { enableTracing: true })
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
