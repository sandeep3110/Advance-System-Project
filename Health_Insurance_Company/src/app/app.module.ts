import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent}  from './app.component';
import {SignUpComponent }  from './Login/SignUp.component'; 
import {LoginComponent }  from './Login/Login.component';


const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent }, ]


@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes),
                  FormsModule,
                  ReactiveFormsModule,
                  HttpModule ],

  declarations: [ AppComponent,
                  LoginComponent,
                  SignUpComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
