import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CustomerHomeView } from './Customer_Home_View';



"use strict";

@Component({
    selector : 'Customer-Appointment',
    templateUrl: './Customer_appointment.html',
    styleUrls : ['./Customer_appointment.css'],
    
    
  })

export class CustomerAppointment extends CustomerHomeView {

 
    constructor(){
        super();
    }
   
  

    
}