import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerHomeView } from './Customer_Home_View';
import { CustomerService } from './../RESTFul_API_Service/Customer.Home.service';



"use strict";

@Component({
    selector : 'Customer-Appointment',
    templateUrl: './Customer_appointment.html',
    styleUrls : ['./Customer_appointment.css'],    
  })

export class Appointment extends CustomerHomeView {

    searchForm: FormGroup;
    reasonList :String[];
     
    constructor(private fb: FormBuilder , private CustmService : CustomerService){
        super();
        this.showForm();   
        this.getListOfReasonsAndDoctors();   
    }
    
    
    

    showForm(){
        this.searchForm = this.fb.group({
            
                  reason: ['', Validators.required], // Validation for reason
                  zipcode: ['', Validators.required],  // Validation for zipcode   
                             
                });
    }
  
    getListOfReasonsAndDoctors() {
        this.CustmService.getReasonList()
        .subscribe(
            (result: any) => {
                /* console.log(result.reasonSet); */
                this.reasonList = result.reasonSet;
                /* console.log(this.reasonList); */
            }
        );
    }



    nearByDoctors(){
        
    }
    
}