"use strict";
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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Rx_1 = require("rxjs/Rx");
"use strict";
var AppointmentService = (function () {
    function AppointmentService(http) {
        this.http = http;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
    }
    /* All Https in Angular 2 protocols are asynchronous operations, Requesting server and
   * getting thne response from server and handling the response
    /* to get the reason/speacilty/doctor_name */
    AppointmentService.prototype.getDoctorsList = function (userData) {
        return this.http.post("http://localhost:8082/ASP/HealthDB/customer/doctorsList", userData) /* Specifying Headers is optional */
            .map(function (response) {
            return response.json().doctorsAvailablityList;
        })
            .catch(function (error) {
            if (error.status > 400) {
                /*   return Observable.throw(new Error(error._body));   either of the ways works */
                /* console.log(JSON.parse(error._body).DoctorsAvailablityList);
                _body.doctorsAvailablityList :  Array(1)  errMsg  : "Sorry No matches found for your selection! First Health Insurance regrets for not having doctors in your locations" */
                var obj = JSON.parse(error._body);
                /* console.log(Object.keys(obj));
                console.log(JSON.parse(error._body));
                console.log(obj);
                console.log(obj.doctorsAvailablityList);
                Object.keys(obj).forEach((key) => {console.log(key)}); */
                return (error.status === 404) ? Rx_1.Observable.throw(obj.doctorsAvailablityList["0"].errMsg) : null;
            }
        });
    };
    return AppointmentService;
}());
AppointmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=Appointment.service.js.map