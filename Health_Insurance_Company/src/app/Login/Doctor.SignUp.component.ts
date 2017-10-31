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
    selector : 'Doc-signUp-page',
    templateUrl: './Doctor.SignUp.html',
    providers : [DBConnection],
    
  })
  export class DoctorSignUpComponent { 
  
     entryForm : FormGroup;
     value:any;
     listOfSpecialties : any[];
     
   
  
     /* Intialising constructor with parameters is called as Dependency Injection  */

      constructor(private fb : FormBuilder , public dbConn : DBConnection , private router:Router){
                    this.createForm();
                    this.value  = Math.floor(60000 + Math.random() * 10000) ; // to generate five digit member id greater than 60000
                    this.specialtyList();
          } 
  
          /* Validation for each and every form field */

          createForm(){

            this.entryForm = this.fb.group({

              firstname : ['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]+')])], // Validation for First Name
              lastname : ['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]+')])],  // Validation for Last Name   
              specialty : ['' , Validators.required],        
              phone :['',Validators.compose([Validators.required,Validators.pattern('\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*')])], // Validation for phone number
              zipcode : ['',Validators.compose([Validators.required,Validators.pattern('([1-9]{1}?\\d{4})+')])], // does not accept 0 at the beginning of the zip code
              email : ['',Validators.compose([Validators.required,Validators.pattern('([\\w-\.]+@([\\w-]+\.)+[\\w-])+')])], // Valdatio for email
              password : ['',Validators.compose([Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])(?!.*\\s).{6,16})+")])],  // Validation for password
              ConfirmPassword : ['',Validators.compose([Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])(?!.*\\s).{6,16})+")])],  // Validation for Confirm password

               });           
               
             } 

            
             
             
             /* Inserting Doctor form field valuse in to the database */

             register():any{

               var entries :any = {

                user : "Doctor",
                memberId : this.value,
                firstName : this.entryForm.get('firstname').value,
                lastName : this.entryForm.get('lastname').value ,
                specialty : this.entryForm.get('specialty').value ,
                phone : this.entryForm.get('phone').value,
                zipCode : this.entryForm.get('zipcode').value,
                email : this.entryForm.get('email').value,
                password : this.entryForm.get('password').value,

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
              }

                /* Getting Specialty List from Database */

                specialtyList() : any {
                  
                                  this.dbConn.getSpecialtyList()
                                  .subscribe(
                                    (result:any) =>{                                     
                                         this.listOfSpecialties = result.specialtyList;                                    
                                    }
                                  );                 
                                } 

            }

            

             
  
  
