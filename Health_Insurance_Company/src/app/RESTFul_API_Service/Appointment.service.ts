import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

"use strict";
@Injectable()

export class AppointmentService {

    constructor(private http : Http ){
        let headers = new Headers();
        headers.append('Content-Type','application/json');

    }

      /* All Https in Angular 2 protocols are asynchronous operations, Requesting server and 
     * getting thne response from server and handling the response
      /* to get the reason/speacilty/doctor_name */
    getDoctorsList(userData : any):any{  
        
      return this.http.post("http://localhost:8082/ASP/HealthDB/customer/doctorsList" , userData) /* Specifying Headers is optional */
      .map(
         (response:Response) => {
             
                  return response.json().doctorsAvailablityList;                
          }                   
       )
       .catch(
        (error: any) => {
        if (error.status > 400) {
          /*   return Observable.throw(new Error(error._body));   either of the ways works */
          /* console.log(JSON.parse(error._body).DoctorsAvailablityList);          
          _body.doctorsAvailablityList :  Array(1)  errMsg  : "Sorry No matches found for your selection! First Health Insurance regrets for not having doctors in your locations" */
          
          var obj = JSON.parse(error._body);  
          /* console.log(Object.keys(obj));
          console.log(JSON.parse(error._body));
          console.log(obj);
          console.log(obj.doctorsAvailablityList);
          Object.keys(obj).forEach((key) => {console.log(key)}); */
          return (error.status === 404)? Observable.throw(obj.doctorsAvailablityList["0"].errMsg) : null ;

        }
    }
   );
    
    
    }




        
}