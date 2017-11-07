
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';


"use strict";

@Component({
    selector : 'Customer-HomeView',
    templateUrl: './Customer_Home_View.html',
    styleUrls : ['./Customer_Home_View.css'],
    
    
  })

export class CustomerHomeView{

 
    customerData:JSON = JSON.parse(sessionStorage.userData); /* Mentioning Json type is optional */
   
  

    
}