import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class DBConnection {

    constructor(private http : Http ){

    }

    /* To Insert data of Customer or Doctor */

    insertRegistartionValues(entries : any) : any{

        /* let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*'); */
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post("http://localhost:8082/ASP/HealthDB/myresource/single_user" , entries , {headers : headers} ) /* Specifying Headers is optional */
                       .map(
                     (response:Response) => {
                         return response;
                     }
                 );
        }

        /* To Get the Specialty list for the Doctor Form Field */

    getSpecialtyList() : any{

        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.get("http://localhost:8082/ASP/HealthDB/myresource/specialty")
                        .map(
                               (response:Response) => {
                                        return response.json();                                 
                                 }
                 );
           }


}