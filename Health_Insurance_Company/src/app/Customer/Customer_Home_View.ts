
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';



"use strict";

@Component({
    selector : 'Customer-HomeView',
    templateUrl: './Customer_Home_View.html',
    styleUrls : ['./Customer_Home_View.css'],
    
    
  })

export class CustomerHomeView{

    customerData: JSON; /* Mentioning Json type is optional */
  
    /* Either Local storage or session storage application is throughing error while 
    restarting the app --> "User Data doesn't exist on storage" */
    constructor() {
    this.customerData = JSON.parse(sessionStorage.userData); 
    /* this.customerData = JSON.parse(localStorage.userData); */
   }
   
    
   
  

    
}