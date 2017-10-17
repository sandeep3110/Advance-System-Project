/*http://embed.plnkr.co/9luTng/?show=preview*/

import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {DBConnection} from './../RESTFul_API_Service/DBConn.service';
import { Router } from '@angular/router';


"use strict";
@Component({
    selector : 'signUp-page',
    templateUrl: './../HTML/SignUp.html',
    providers : [DBConnection],
    
  })
  export class SignUpComponent { 
  
    entryForm : FormGroup;
   
  
      constructor(private fb : FormBuilder , public dbConn : DBConnection , private router:Router){
                    this.createForm();
          }
  
          createForm(){
            this.entryForm = this.fb.group({
              firstname : ['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]+')])],
              password : ['',Validators.compose([Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])(?!.*\\s).{6,16})+")])],
              age : ['',Validators.compose([Validators.required,Validators.pattern('(\\d?[1-9]|[1-9]0)+')])], // means first part - \d?(it should be [0-9]) and second digit[1-9] or second part - first digit [1-9] and second digit shoud be 0
              phone :['',Validators.compose([Validators.required,Validators.pattern('\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*')])], 
              country : ['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]+')])],         
               });
             }

             register():any{
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
              }
  
  
  }