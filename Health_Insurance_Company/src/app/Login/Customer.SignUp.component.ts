/* Angular Reactive forms api
"https://angular.io/guide/reactive-forms"

Form Group : FormGroup tracks the value and validity state of a group of AbstractControl instances. 
The group's properties include its child controls. The top-level form in your component is a FormGroup.

The FormBuilder class helps reduce repetition and clutter by handling details of control creation for you.

*/
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {DBConnection} from './../RESTFul_API_Service/DBConn.service';
import { Router } from '@angular/router';


"use strict";
@Component({
    selector : 'Cust-signUp-page',
    templateUrl: './Customer.SignUp.html',
    providers : [DBConnection],
    
  })
  export class CustomerSignUpComponent { 
  
    entryForm : FormGroup;
   
  
      constructor(private fb : FormBuilder , public dbConn : DBConnection , private router:Router){
                    this.createForm();
          }
  
          /* Validation for each and every form field */

          createForm(){
            this.entryForm = this.fb.group({
              firstname : ['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]+')])], // Validation for First Name
              lastname : ['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]+')])],  // Validation for Last Name             
              age : ['',Validators.compose([Validators.required,Validators.pattern('(\\d?[1-9]|[1-9]0)+')])], // validation for Age means first part - \d?(it should be [0-9]) and second digit[1-9] or second part - first digit [1-9] and second digit shoud be 0
              phone :['',Validators.compose([Validators.required,Validators.pattern('\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*')])], // Validation for phone number
              address : ['',Validators.compose([Validators.required,Validators.pattern('[\\w\\s]+')])],// Validation for Address
              city : ['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]+')])],  // Validation for City
              zipcode : ['',Validators.compose([Validators.required,Validators.pattern('([1-9]{1}?\\d{4})+')])], // does not accept 0 at the beginning of the zip code
              state : ['',Validators.compose([Validators.required,Validators.pattern('([A-Za-z]{2})+')])], // Validation for state
              email : ['',Validators.compose([Validators.required,Validators.pattern('([\\w-\.]+@([\\w-]+\.)+[\\w-])+')])], // Valdatio for email
              password : ['',Validators.compose([Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])(?!.*\\s).{6,16})+")])],  // Validation for password
              ConfirmPassword : ['',Validators.compose([Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])(?!.*\\s).{6,16})+")])],  // Validation for Confirm password
               });

              
             
               
             }

            
             
             

             /* register():any{
               var entries :any = {
                name : this.entryForm.get('firstname').value,
                password : this.entryForm.get('password').value,
                age : this.entryForm.get('age').value,
                phone : this.entryForm.get('phone').value,
                place : this.entryForm.get('country').value,
                }
                
                this.dbConn.insertRegistartionValues(entries)
                  .subscribe(
                    (result:any)=>{
                         if(result.status == 200){
                              window.alert("Registration successfull ,Please sign In to the portal!!");
                              this.entryForm.reset();
                            }else{
                                window.alert("Something went wrong !! Registration  not successfull ");
                                 }    
                          });    
              } */
  
  
  }