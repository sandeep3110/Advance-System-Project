
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

<<<<<<< HEAD
    customerData: JSON; /* Mentioning Json type is optional */
  
    /* Either Local storage or session storage application is throughing error while 
    restarting the app --> "User Data doesn't exist on storage" */
||||||| merged common ancestors
    customerData: JSON;
  
=======
    customerData: JSON;

>>>>>>> 22b69a31a95a86afbe2772b6f0827064daca209e
    constructor() {
<<<<<<< HEAD
    this.customerData = JSON.parse(sessionStorage.userData); 
    /* this.customerData = JSON.parse(localStorage.userData); */
||||||| merged common ancestors
    this.customerData = JSON.parse(sessionStorage.userData); /* Mentioning Json type is optional */
=======
    // this.customerData = JSON.parse(sessionStorage.userData); /* Mentioning Json type is optional */
>>>>>>> 22b69a31a95a86afbe2772b6f0827064daca209e
   }






}
