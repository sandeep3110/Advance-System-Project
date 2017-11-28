import { Component } from "@angular/core";
import { DoctorHomeService } from "../RESTFul_API_Service/Doctor.Home.service";
import { CustomerAuthGuard } from "../Customer/Customer_AuthGuard";
import { Router } from "@angular/router";
import { IPatientAppointments } from "./Patient-Appointments";
import { Observable } from "rxjs/Observable";

"use strict";

@Component({
  selector: 'Doctor-HomeView',
  templateUrl: './Doctor_Home_View.html',
  styleUrls: ['./Doctor_Home_View.css']
})

export class DoctorHomeView extends CustomerAuthGuard {

  constructor(private doctorHomeService: DoctorHomeService, private rout: Router) {
    super(rout);
    this.getAppointmentsForToday();
  }

  getAppointmentsForToday() {
    var entries: any = {
      doctorMemberId: this.customerData.memberId
    };

    this.doctorHomeService.getAppointmentsForToday(entries)
      .subscribe(appointments => {
        
        this.patientAppointments = appointments;
        console.log(this.patientAppointments);
       // this.patientAppointments = [];
      },
      error => {
        this.errorMessage = <any>error;
        window.alert(this.errorMessage);
      });
  };

  // getAppointmentsForCards(appointmentsArray: Array<any>) {
  //   console.log('Appointments array is ', appointmentsArray);
  //   this.appointmentsForCards = appointmentsArray ? appointmentsArray.sort((a: any, b: any) => {
  //     if (new Date(a.date) < new Date(b.date))
  //       return -1;
  //     if (new Date(a.date) > new Date(b.date))
  //       return 1;
  //     return 0;
  //   }) : null;
  // };


  appointmentsCardTitle: string = "Todays's Appointments";
  errorMessage: string;
  labResultsCardTitle: string = "Patient Lab Results";
  noAppointments: string = "No Appointments for Today";
  patientAppointments = <any>[];
  reviewsCardTitle: string = "Checkout what your patients wrote about you - Reviews";

}
