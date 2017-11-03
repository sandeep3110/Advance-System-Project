import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent}  from './app.component';
import {PageNotFoundComponent} from './PageNotFound/PageNotFound.component';
import {HeaderComponent} from './DefaultHome/Header.component';
import {FooterComponent} from './DefaultHome/Footer.component';
import {HomePageComponent }  from './Home/Home.component';
import {LoginComponent }  from './Login/Login.component';
import {PopUpBoxComponent} from './Login/PopUp.component';
import {CustomerSignUpComponent }  from './Login/Customer.SignUp.component'; 
import {DoctorSignUpComponent} from './Login/Doctor.SignUp.component';
/* Customer-View*/
import { CustomerHeader } from './Customer/Customer_Header.component';
import {CustomerDefaultView} from './Customer/Customer_Default_View.component';




"Use srtict";

const appRoutes: Routes = [
  { path : '' , component : AppComponent, 
                children : [ 
                             {path: '', component: HomePageComponent},
                             {path: 'login', component: LoginComponent},
                             
                           ]
   },
   /* Customer-View*/
   { path : 'home' , component : CustomerDefaultView },
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
                  PopUpBoxComponent,
                  CustomerSignUpComponent,
                  DoctorSignUpComponent,
                  /* Customer-View*/
                  CustomerHeader,
                  CustomerDefaultView ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
