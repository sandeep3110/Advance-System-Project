import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class DBConnection {

    constructor(private http : Http ){

    }

    insertRegistartionValues(entries : any) : any{

        /* let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*'); */
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post("http://localhost:8080/ASP/HealthDB/myresource" , entries , {headers : headers} )
                       .map(
                     (response:Response) => {
                         return response;
                     }
                 );
    }


}