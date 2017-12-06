import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IPatientAppointments } from '../Doctor/Patient-Appointments';
import { IDoctorProfile } from '../Doctor/Doctor-Profile';
import { IDoctorQualifications } from '../Doctor/Doctor-Qualifications';

"use strict";

@Injectable()
export class DoctorHomeService {
  private _pastAppointmentsUrl = 'http://localhost:8080/ASP/HealthDB/doctor/pastAppointments';
  private _todayAppointmentsUrl = 'http://localhost:8080/ASP/HealthDB/doctor/todayAppointments';
  private _patientReviewsUrl = 'http://localhost:8080/ASP/HealthDB/doctor/reviews';
  private _patientLabReportsUrl = 'http://localhost:8080/ASP/HealthDB/doctor/labReports';
  private _getDoctorProfileUrl = 'http://localhost:8080/ASP/HealthDB/doctor/doctorProfile';
  private _updateDocProfileUrl = 'http://localhost:8080/ASP/HealthDB/doctor/updateProfile';

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

  getPatientReviews(entries: any): Observable<IPatientAppointments> {

    return this.http.post(this._patientReviewsUrl, entries) /* Specifying Headers is optional */
      .map(
      (response: Response) => {
        console.log("response is ", response.json());
        return response.json().patientReviewsList;
      })
      .catch(this.handleError);
  }

  getPatientLabReports(entries: any): Observable<IPatientAppointments> {
    return this.http.post(this._patientLabReportsUrl, entries) /* Specifying Headers is optional */
      .map(
      (response: Response) => {
        console.log("patientlab reports", response.json());
        return response.json().patientLabReports;
      })
      .catch(this.labReportsError);
  }

  getDoctorProfile(entries: any): Observable<IDoctorProfile> {
    return this.http.post(this._getDoctorProfileUrl, entries)
      .map(
      (response: Response) => {
        console.log("response is ", response.json());
        return response.json();
      })
      .catch(this.handleError);
  }

  updateDoctorProfile(doctorProfile: any, doctorMemberId: any): Observable<IDoctorQualifications> {
    if (!doctorProfile.doctorMemberId) {
      doctorProfile.doctorMemberId = doctorMemberId;
      doctorProfile.profileExists = false;
    } else {
      doctorProfile.profileExists = true;
    }

    var entries = {
      affiliatedInsurance: doctorProfile.affiliatedInsurance,
      boardCertification: doctorProfile.boardCertification,
      doctorFirstName: doctorProfile.doctorFirstName,
      doctorLastName: doctorProfile.doctorLastName,
      doctorMemberId: doctorProfile.doctorMemberId,
      education: doctorProfile.education,
      hospitalAffliation: doctorProfile.hospitalAffliation,
      languagesSpoken: doctorProfile.languagesSpoken,
      professionalMemberships: doctorProfile.professionalMemberships,
      profileExists: doctorProfile.profileExists,
      specialities: doctorProfile.specialities
    };

    return this.http.put(this._updateDocProfileUrl, entries)
      .map(
      (response: Response) => {
        console.log("updated response is ", response.json());
        return response.json();
      })
      .catch(this.updateDoctorProfileError);
  }

  private handleError(err: any) {
    console.log('this is error', err);
    return Observable.throw(JSON.parse(err._body).appointmentsList[0].errMessage);
  }

  private labReportsError(err: any) {
    console.log('this is labreports error', JSON.parse(err._body).patientLabReports[0].errMessage);
    return Observable.throw(JSON.parse(err._body).patientLabReports[0].errMessage);
  }

  private updateDoctorProfileError(err: any) {
    console.log('this is update error', JSON.parse(err._body));
    return Observable.throw(JSON.parse(err._body));
  }
}
