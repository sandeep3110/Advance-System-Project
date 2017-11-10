import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes , CanActivate} from '@angular/router';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent}  from './app.component';
import {PageNotFoundComponent} from './PageNotFound/PageNotFound.component';
import {HeaderComponent} from './DefaultHome/Header.component';
import {FooterComponent} from './DefaultHome/Footer.component';
import {HomePageComponent }  from './Home/Home.component';
import { ContactusComponent } from './ContactUs/contactus.component';
import {LoginComponent }  from './Login/Login.component';
import {PopUpBoxComponent} from './Login/PopUp.component';
import {CustomerSignUpComponent }  from './Login/Customer.SignUp.component';
import {DoctorSignUpComponent} from './Login/Doctor.SignUp.component';

/* Customer-View*/

import { CustomerHeader } from './Customer/Customer_Header.component';
import {CustomerDefaultView} from './Customer/Customer_Default_View';
import {CustomerHomeView} from './Customer/Customer_Home_View';
import {Appointment} from './Customer/Customer_appointment';

/* Dependency Injection : Providers */

import {AuthenticationService} from './RESTFul_API_Service/Authentication.Service';
import { CustomerAuthGuard } from './Customer/Customer_AuthGuard';



"Use strict";

const appRoutes: Routes = [
  { path : '' , component : AppComponent,
                children : [
                             {path: '', component: HomePageComponent},
                             {path: 'login', component: LoginComponent},
                             {path: 'contactus', component: ContactusComponent}
                           ]
   },

   /* Customer-View*/

   { path : '' , canActivate: [CustomerAuthGuard], component : CustomerDefaultView,
                 children : [
                                // From Login.component.ts it will come to  router.navigate(['home'])--> CustomerHomeView --> CustomerAuthGuard = true
                                {path: 'home/:', component: CustomerHomeView},
                                {path: 'home/:id/appointment', component: Appointment },


                             ]
   },

   { path : '**' , component : PageNotFoundComponent},

  ];


@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes),
                  FormsModule,
                  ReactiveFormsModule,
                  HttpModule ],

  declarations: [ AppComponent,
                  PageNotFoundComponent,
                  HeaderComponent,
                  FooterComponent,
                  HomePageComponent,
                  LoginComponent,
                  ContactusComponent,
                  PopUpBoxComponent,
                  CustomerSignUpComponent,
                  DoctorSignUpComponent,
                  /*Customer-View*/
                  CustomerHeader,
                  CustomerDefaultView,
                  CustomerHomeView,
                  Appointment,],

  providers : [ CustomerAuthGuard,
                AuthenticationService],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
