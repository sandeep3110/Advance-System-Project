import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

"use strict";
@Injectable()

export class CustomerService {

    constructor(private http : Http ){
        let headers = new Headers();
        headers.append('Content-Type','application/json');

    }

      /* to get the reason/speacilty/doctor_name */
    getReasonList():any{  
        
      return this.http.get("http://localhost:8082/ASP/HealthDB/customer/reason") /* Specifying Headers is optional */
      .map(
         (response:Response) => {
             
                  return response.json() ;                
          }                   
       );
        }




        
}