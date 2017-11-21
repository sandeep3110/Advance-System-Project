import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IPatientAppointments } from '../Doctor/Patient-Appointments';

"use strict";

@Injectable()
export class DoctorHomeService {
  private _todayAppointmentsUrl = 'http://localhost:8082/ASP/HealthDB/doctor/todayAppointments';
  private _pastAppointmentsUrl = 'http://localhost:8082/ASP/HealthDB/doctor/pastAppointments';

  constructor(private http: Http) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  }

  /* All Https in Angular 2 protocols are asynchronous operations, Requesting server and
 * getting thne response from server and handling the response
  /* to get the reason/speacilty/doctor_name */
  getAppointmentsForToday(entries: any): Observable<IPatientAppointments> {

    return this.http.post(this._todayAppointmentsUrl, entries) /* Specifying Headers is optional */
      .map(
      (response: Response) => {
        return response.json().appointmentsList;
      })
      .catch(this.handleError);
  }


  getPastAppointments(entries: any): Observable<IPatientAppointments> {

    return this.http.post(this._pastAppointmentsUrl, entries) /* Specifying Headers is optional */
      .map(
      (response: Response) => {
        return response.json().appointmentsList;
      })
      .catch(this.handleError);
  }

  private handleError(err: any) {
    console.log('this is error', err);
    return Observable.throw(JSON.parse(err._body).appointmentsList[0].errMessage);
  }
}
