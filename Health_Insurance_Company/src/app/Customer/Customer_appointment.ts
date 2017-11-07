import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {DBConnection} from './../RESTFul_API_Service/DBConn.service';
import { Router } from '@angular/router';


"use strict";

@Component({
    selector : 'Customer-Appointment',
    templateUrl: './Customer_appointment.html',
    styleUrls : ['./Customer_appointment.css'],
    
    
  })

export class CustomerAppointment{

 
    customerData:JSON = JSON.parse(sessionStorage.userData); /* Mentioning Json type is optional */
   
  

    
}