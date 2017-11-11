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

export class Appointment {

    searchForm: FormGroup;
    reasonList :String[];
    /* Reason to hard code the values but not fetching from database is Career names will be know to everyone */
    listOfCareers : string[] = [ "First Choice Health - PPO",
                                 "Cigna - HMO",
                                 "UnitedHealthcare - UnitedHealthcare Compass Plus" ,
                                 "Independence Blue Cross - National BlueCard PPO",
                                 "EmblemHealth - 9/11 Program",
                                 "Clover Health - Prestige",
                                 "Companion Life - Worker's Comp",
                                 "WEA Trust - Fox River Network: Tier 1 Providers",
                                 "Caterpillar - Caterpillar Network Plan",
                                 "Corvel - Group Health","irst Health Insurance"]

    constructor(private fb: FormBuilder , private CustmService : CustomerService){
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
