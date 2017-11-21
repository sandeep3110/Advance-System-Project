import { Component } from "@angular/core";
import { CustomerAuthGuard } from "../Customer/Customer_AuthGuard";
import { Router } from "@angular/router";
import { DoctorHomeService } from "../RESTFul_API_Service/Doctor.Home.service";

@Component({
  selector: 'Doctor-Header',
  templateUrl: './Doctor_Header.html',
  styleUrls: ['./Doctor_Header.css']
})

export class DoctorHeader extends CustomerAuthGuard {

  /* Either Local storage or session storage application is throughing error while
     restarting the app --> "User Data doesn't exist on storage" */
  /* id:number = JSON.parse(sessionStorage.userData).memberId ; */ // Fetching the memberId for URL
  /* id:number = JSON.parse(localStorage.userData).memberId ; */

  id: number;
  modalTitle: string;
  patientAppointments = <any>[];
  errorMessage: string;

  /* Taking the sessionstorage into Customer values from Customer_AuthGuard_ts rather declaring another variable */
  constructor(private doctorHomeService: DoctorHomeService, private rout: Router) {
    super(rout);
    this.id = this.customerData.memberId;
  }

  showPastAppointmentsClicked(event: any) {
    var entries: any = {
      doctorMemberId: this.customerData.memberId
    };

    this.patientAppointments = [];    

    this.doctorHomeService.getPastAppointments(entries)
      .subscribe(appointments => {
        this.patientAppointments = appointments;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        this.modalTitle = "Past Appointments";
      });
  };

  ShowAppointmentsForTodayClicked(event: any) {
    var entries: any = {
      doctorMemberId: this.customerData.memberId
    };
    
    this.patientAppointments = [];

    this.doctorHomeService.getAppointmentsForToday(entries)
      .subscribe(appointments => {
        this.patientAppointments = appointments;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        this.modalTitle = "All Appointments For Today";
      });
  }

  /* To make Log Out tab have a pointer cursor */
  pointer(): any {
    let myStyles = {

      'cursor': 'pointer',
    }
    return myStyles;
  }

  logOut() {
    sessionStorage.removeItem("customerData");
    this.rout.navigate(['/login']);
  }

}
