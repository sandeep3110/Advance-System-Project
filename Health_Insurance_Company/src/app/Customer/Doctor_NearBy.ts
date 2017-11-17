import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CustomerAuthGuard} from './Customer_AuthGuard';



"use strict";

@Component({
    selector : 'doctor-nearBy',
    templateUrl: './doctor_nearBy.html',
    styleUrls : ['./doctor_nearBy.css'],
    
    
  })

  export class DoctorNearBy {
 
      @Input('errMsg')  message :  string = null;
      @Input('elementList') docList = <any>[] ;

      constructor(){
        
      }
  }