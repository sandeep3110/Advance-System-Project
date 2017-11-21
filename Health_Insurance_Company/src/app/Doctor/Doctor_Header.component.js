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
var Customer_AuthGuard_1 = require("../Customer/Customer_AuthGuard");
var router_1 = require("@angular/router");
var Doctor_Home_service_1 = require("../RESTFul_API_Service/Doctor.Home.service");
var DoctorHeader = (function (_super) {
    __extends(DoctorHeader, _super);
    /* Taking the sessionstorage into Customer values from Customer_AuthGuard_ts rather declaring another variable */
    function DoctorHeader(doctorHomeService, rout) {
        var _this = _super.call(this, rout) || this;
        _this.doctorHomeService = doctorHomeService;
        _this.rout = rout;
        _this.patientAppointments = [];
        _this.id = _this.customerData.memberId;
        return _this;
    }
    DoctorHeader.prototype.showPastAppointmentsClicked = function (event) {
        var _this = this;
        var entries = {
            doctorMemberId: this.customerData.memberId
        };
        this.patientAppointments = [];
        this.doctorHomeService.getPastAppointments(entries)
            .subscribe(function (appointments) {
            _this.patientAppointments = appointments;
        }, function (error) {
            _this.errorMessage = error;
        }, function () {
            _this.modalTitle = "Past Appointments";
        });
    };
    ;
    DoctorHeader.prototype.ShowAppointmentsForTodayClicked = function (event) {
        var _this = this;
        var entries = {
            doctorMemberId: this.customerData.memberId
        };
        this.patientAppointments = [];
        this.doctorHomeService.getAppointmentsForToday(entries)
            .subscribe(function (appointments) {
            _this.patientAppointments = appointments;
        }, function (error) {
            _this.errorMessage = error;
        }, function () {
            _this.modalTitle = "All Appointments For Today";
        });
    };
    /* To make Log Out tab have a pointer cursor */
    DoctorHeader.prototype.pointer = function () {
        var myStyles = {
            'cursor': 'pointer',
        };
        return myStyles;
    };
    DoctorHeader.prototype.logOut = function () {
        sessionStorage.removeItem("customerData");
        this.rout.navigate(['/login']);
    };
    return DoctorHeader;
}(Customer_AuthGuard_1.CustomerAuthGuard));
DoctorHeader = __decorate([
    core_1.Component({
        selector: 'Doctor-Header',
        templateUrl: './Doctor_Header.html',
        styleUrls: ['./Doctor_Header.css']
    }),
    __metadata("design:paramtypes", [Doctor_Home_service_1.DoctorHomeService, router_1.Router])
], DoctorHeader);
exports.DoctorHeader = DoctorHeader;
//# sourceMappingURL=Doctor_Header.component.js.map