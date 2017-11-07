import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {DBConnection} from './../RESTFul_API_Service/DBConn.service';
import { Router } from '@angular/router';


"use strict";

@Component({
    selector : 'Customer-Header',
    templateUrl: './Customer_Header.html',
    styleUrls : ['./../DefaultHome/Header.css'],
    
    
  })
export class CustomerHeader{

  constructor(private router: Router) { }

       /* To make Log Out tab have pointer cursor */
        pointer() : any {
          let myStyles = {

            'cursor' : 'pointer',
          }
          return myStyles;
        }

        /* Log out from the session and clearing the storage */
        
        logOut(){
             sessionStorage.removeItem("userData");
             this.router.navigate(['/login']);
        }
    
}