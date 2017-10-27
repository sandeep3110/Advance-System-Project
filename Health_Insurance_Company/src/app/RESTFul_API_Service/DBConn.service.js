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
var DBConnection = (function () {
    function DBConnection(http) {
        this.http = http;
    }
    /* To Insert data of Customer or Doctor */
    DBConnection.prototype.insertRegistartionValues = function (entries) {
        /* let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*'); */
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:8082/ASP/HealthDB/myresource/single_user", entries, { headers: headers }) /* Specifying Headers is optional */
            .map(function (response) {
            return response;
        });
    };
    /* To Get the Specialty list for the Doctor Form Field */
    DBConnection.prototype.getSpecialtyList = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:8082/ASP/HealthDB/myresource/specialty")
            .map(function (response) {
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