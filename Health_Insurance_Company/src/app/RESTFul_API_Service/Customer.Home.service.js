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
"use strict";
var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
    }
    /* All Https in Angular 2 protocols are asynchronous operations, Requesting server and
   * getting thne response from server and handling the response
    /* to get the reason/speacilty/doctor_name */
    CustomerService.prototype.getReasonList = function () {
        return this.http.get("http://localhost:8082/ASP/HealthDB/customer/reason") /* Specifying Headers is optional */
            .map(function (response) {
            return response.json();
        });
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=Customer.Home.service.js.map