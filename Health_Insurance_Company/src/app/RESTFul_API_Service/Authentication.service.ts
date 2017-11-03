import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

"use strict"
@Injectable()

export class AuthenticationService {

    constructor(private http : Http ){
        let headers = new Headers();
        headers.append('Content-Type','application/json');

    }

    /* to authenticate user and get his details */

    loginAuthentication(userData: any):any{
          
        return this.http.post("http://localhost:8082/ASP/HealthDB/myresource/authentication" , userData) /* Specifying Headers is optional */
        .map(
           (response:Response) => {
               
                 /* console.log(response);
                 if(response.status === 404) we are getting error for status code 404 not found on console that is the reason for catch block
                  return response.json(); */
                  return null;
                  
            }                   
         )
         .catch (
            (error: any) => {

              /*   console.log(error._body);
                console.log(obj.errorMsg);
                Use the JavaScript function JSON.parse() to convert text into a TypeScript object: */
                
               var obj =  JSON.parse(error._body);
               
                return (error.status === 404)? Observable.throw(obj.errorMsg) : null ;

                }            
            );

    }

}