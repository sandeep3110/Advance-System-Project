
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {DBConnection} from './../RESTFul_API_Service/DBConn.service';
import { Router } from '@angular/router';


"use strict";

@Component({
    selector : 'Customer-DefaultView',
    templateUrl: './Customer_Default_View.html',
    styleUrls : ['./Customer_Default_View.css'],
    providers : [DBConnection],
    
  })
export class CustomerDefaultView{

    
}