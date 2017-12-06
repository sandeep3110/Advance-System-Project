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
  profileModalTitle: string;
  patientAppointments = <any>[];
  patientReviews = <any>[];
  patientLabReports = <any>[];
  errorMessage: string;
  doctorProfile = <any>[];
  updateResponse = <any>[];
  editDocProfileMessage: string;
  hasMessage: boolean = false;

  /* Taking the sessionstorage into Customer values from Customer_AuthGuard_ts rather declaring another variable */
  constructor(private doctorHomeService: DoctorHomeService, private rout: Router) {
    super(rout);
    this.id = this.customerData.memberId;
  }

  showPastAppointmentsClicked(event: any) {
    var entries: any = {
      doctorMemberId: this.customerData.memberId
    };

    this.doctorHomeService.getPastAppointments(entries)
      .subscribe(appointments => {
        this.patientAppointments = appointments;
      },
      error => {
        this.modalTitle = "Past Appointments";
        this.errorMessage = <any>error;
      },
      () => {
        this.modalTitle = "Past Appointments";
      });
  };

  ShowReviewsClicked(event: any) {
    var entries: any = {
      doctorMemberId: this.customerData.memberId
    };

    this.doctorHomeService.getPatientReviews(entries)
      .subscribe(reviews => {
        this.patientReviews = reviews;
      },
      error => {
        this.modalTitle = "Patient Reviews";
        this.errorMessage = <any>error;
      },
      () => {
        this.modalTitle = "Patient Reviews";
      });
  };

  ShowLabReportsClicked(event: any) {
    var entries: any = {
      doctorMemberId: this.customerData.memberId
    };

    this.doctorHomeService.getPatientLabReports(entries)
      .subscribe(labReports => {
        this.patientLabReports = labReports;
      },
      error => {
        this.modalTitle = "Lab Reports For PickUp";
        this.errorMessage = <any>error;
      },
      () => {
        this.modalTitle = "Lab Reports For PickUp";
      });
  }

  ShowAppointmentsForTodayClicked(event: any) {
    var entries: any = {
      doctorMemberId: this.customerData.memberId
    };

    this.doctorHomeService.getAppointmentsForToday(entries)
      .subscribe(appointments => {
        this.patientAppointments = appointments;
      },
      error => {
        this.modalTitle = "More Appointments"
        this.errorMessage = <any>error;
      },
      () => {
        this.modalTitle = "More Appointments";
      });
  }

  DoctorProfileClicked(event: any) {
    var entries: any = {
      doctorMemberId: this.customerData.memberId
    };

    this.doctorHomeService.getDoctorProfile(entries)
      .subscribe(doctorProfile => {
        this.doctorProfile = doctorProfile;
      },
      error => {
        console.log("Get Doc Profile", this.doctorProfile);
        this.profileModalTitle = "Edit Profile"
        this.errorMessage = <any>error;
      },
      () => this.profileModalTitle = "Edit Profile");
  }

  editDoctorProfile(event: any) {

    this.doctorHomeService.updateDoctorProfile(this.doctorProfile, this.id)
      .subscribe(doctorQualifications => {
        this.updateResponse = doctorQualifications;
        this.hasMessage = true;
        this.editDocProfileMessage = this.updateResponse.successMessage;
      },
      error => {
        this.editDocProfileMessage = <any>error;
        this.hasMessage = true;
      });
  }

  clearError() {
    this.editDocProfileMessage = "";
    this.hasMessage = false;
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
