
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CustomerAuthGuard} from './Customer_AuthGuard';



"use strict";

@Component({
    selector : 'Appointment-Modal',
    templateUrl: './Customer_MakeAppointment_Modal.html',    
    
  })

export class AppointmentModal extends CustomerAuthGuard{

    date : Date;
    datepickerOpts: any = {
      /* startDate: new Date(2016, 5, 10), */
      autoclose: true,
      todayBtn: 'linked',
      todayHighlight: true,
      assumeNearbyYear: true,
      format: 'D, d MM yyyy',
      icon: 'fa fa-calendar'
  };
  timepickerOpts : any = {
    icon: 'fa fa-clock-o',
    showMeridian: false,
    minuteStep: 1
  }
  @Input('docProfileList') profileName = <any>[] ;
   
   
   /* Taking the sessionstorage into Customer values from Customer_AuthGuard.ts rather declaring another variable */
   constructor(private rout: Router) {
    super(rout);  
    console.log("modal" +this.profileName);
    this.profileName = '';
   }  
  
   clearName(){
     console.log("cleared");
    this.profileName = '';
   }
   getDate(dt: Date): number {
    return dt && dt.getTime();
    }
    
}