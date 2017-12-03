"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Doctor_Home_service_1 = require("../RESTFul_API_Service/Doctor.Home.service");
var Customer_AuthGuard_1 = require("../Customer/Customer_AuthGuard");
var router_1 = require("@angular/router");
"use strict";
var DoctorHomeView = (function (_super) {
    __extends(DoctorHomeView, _super);
    function DoctorHomeView(doctorHomeService, rout) {
        var _this = _super.call(this, rout) || this;
        _this.doctorHomeService = doctorHomeService;
        _this.rout = rout;
        _this.appointmentsCardTitle = "Upcoming Appointments";
        _this.labResultsCardTitle = "Patient Lab Results";
        _this.noAppointments = "No Appointments for Today";
        _this.noReviews = "No Reviews to Display";
        _this.patientAppointments = [];
        _this.patientReviews = [];
        _this.patientLabReports = [];
        _this.spaceDash = ' - ';
        _this.patientReviewsLoaded = false;
        _this.reviewsCardTitle = "Checkout what your patients wrote about you - Reviews";
        _this.getAppointmentsForToday();
        _this.getAllReviews();
        _this.getPatientLabReports();
        return _this;
    }
    DoctorHomeView.prototype.getAppointmentsForToday = function () {
        var _this = this;
        var entries = {
            doctorMemberId: this.customerData.memberId
        };
        this.doctorHomeService.getAppointmentsForToday(entries)
            .subscribe(function (appointments) {
            _this.patientAppointments = appointments;
            // this.patientAppointments = [];
        }, function (error) {
            _this.errorMessage = error;
            //    window.alert(this.errorMessage);
        });
    };
    ;
    DoctorHomeView.prototype.getAllReviews = function () {
        var _this = this;
        var entries = {
            doctorMemberId: this.customerData.memberId
        };
        this.doctorHomeService.getPatientReviews(entries)
            .subscribe(function (reviews) {
            _this.patientReviews = reviews;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    DoctorHomeView.prototype.getPatientLabReports = function () {
        var _this = this;
        var entries = {
            doctorMemberId: this.customerData.memberId
        };
        this.doctorHomeService.getPatientLabReports(entries)
            .subscribe(function (labReports) {
            console.log("This is resports", labReports);
            _this.patientLabReports = labReports;
        }, function (error) {
            _this.patientLabReports = [];
            _this.noLabReports = error;
            console.log("error message for lab ", _this.noLabReports);
        });
    };
    return DoctorHomeView;
}(Customer_AuthGuard_1.CustomerAuthGuard));
DoctorHomeView = __decorate([
    core_1.Component({
        selector: 'Doctor-HomeView',
        templateUrl: './Doctor_Home_View.html',
        styleUrls: ['./Doctor_Home_View.css']
    }),
    __metadata("design:paramtypes", [Doctor_Home_service_1.DoctorHomeService, router_1.Router])
], DoctorHomeView);
exports.DoctorHomeView = DoctorHomeView;
//# sourceMappingURL=Doctor_Home_View.component.js.map