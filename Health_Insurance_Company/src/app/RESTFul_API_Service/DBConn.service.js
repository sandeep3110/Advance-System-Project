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
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
"use strict";
var DBConnection = (function () {
    function DBConnection(http) {
        this.http = http;
    }
    /* All Https in Angular 2 protocols are asynchronous operations, Requesting server and
     * getting thne response from server and handling the response
    /* To Insert data of Customer or Doctor */
    DBConnection.prototype.insertRegistartionValues = function (entries) {
        /* let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*'); */
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log("hello", entries);
        return this.http.post("http://localhost:8082/ASP/HealthDB/myresource/single_user", entries, { headers: headers }) /* Specifying Headers is optional */
            .map(
        /* console.log(response);
           if(response.status === 404) we are getting error for status code 404 not found on console that is the reason for catch block
           return response.json(); */
        function (response) {
            console.log(response);
            return response;
        })
            .catch(function (error) {
            if (error.status > 400) {
                /*   return Observable.throw(new Error(error._body));   either of the ways works */
                return Rx_1.Observable.throw(error._body);
            }
        });
    };
    /* To Get the Specialty list for the Doctor Form Field */
    DBConnection.prototype.getSpecialtyList = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:8082/ASP/HealthDB/myresource/specialty")
            .map(function (response) {
            /* The json() method, when invoked, must return the result of running consume body with JSON. */
            return response.json();
        });
    };
    return DBConnection;
}());
DBConnection = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DBConnection);
exports.DBConnection = DBConnection;
//# sourceMappingURL=DBConn.service.js.map