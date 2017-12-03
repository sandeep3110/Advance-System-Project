import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

"use strict";
@Injectable()

export class AppointmentService {

    /* Intializing these values with type casting as we don't know the types in first shot  */

   doctorId :any = null;
   doctorName:any = null;
   carrier:any = null;
   patientData = <any>{};
   appointTable = <any>[]; // [doctorId , patientData]


    constructor(private http : Http ){
        let headers = new Headers();
        headers.append('Content-Type','application/json');

    }

      /* All Https in Angular 2 protocols are asynchronous operations, Requesting server and 
     * getting thne response from server and handling the response
      /* to get the reason/speacilty/doctor_name */
    getDoctorsList(userData : any):any{  
        
      return this.http.post("http://localhost:8080/ASP/HealthDB/customer/doctorsList" , userData) /* Specifying Headers is optional */
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

      setDoctorAndPaitentDetails(docId:any ,docName:any, patientCarrier:any ,data1 : any ){
                this.doctorId= docId;
                this.appointTable.push(this.doctorId);
                this.doctorName= docName;
                this.appointTable.push(this.doctorName);
                this.carrier= patientCarrier;
                this.appointTable.push(this.carrier);
                this.patientData = data1;
                this.appointTable.push(this.patientData);
      }

       /* We should return as an "observable" rather "any[]"
          If we are not emptying the this.appointTable = []; in the method
          Array size gets increases and every time we get the first two values only.
          reference "https://stackoverflow.com/questions/45698036/angular-4-subscribe-is-not-a-function-error"
          for using observable
       */


      getDoctorAndPaitentMemberId(): Observable<any[]>{
        const data = this.appointTable;
          this.appointTable = [];
        return Observable.of(data);
      }

      bookAppointmentForDoctor(userData2 : any):Observable<any[]>{

        //console.log("hi" + userData2 )
        return this.http.post("http://localhost:8080/ASP/HealthDB/customer/bookAppoint",userData2) 
        .map(
           (response:any) => {
                 //console.log("Inserted Successfully" ,response )
                    return response._body;              
            }                   
         )
         .catch (
          (error: any ) => {
             //console.log(error);
             //console.log(error._body)            
             return (error.status === 404)? Observable.throw(error._body) : null ;

              }            
          );
       


      }
        
}