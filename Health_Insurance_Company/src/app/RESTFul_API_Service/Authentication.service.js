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
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
    }
    /* to authenticate user and get his details */
    AuthenticationService.prototype.loginAuthentication = function (userData) {
        return this.http.post("http://localhost:8082/ASP/HealthDB/myresource/authentication", userData) /* Specifying Headers is optional */
            .map(function (response) {
            /* console.log(response);
            if(response.status === 404) we are getting error for status code 404 not found on console that is the reason for catch block
             return response.json(); */
            return null;
        })
            .catch(function (error) {
            /*   console.log(error._body);
              console.log(obj.errorMsg);
              Use the JavaScript function JSON.parse() to convert text into a TypeScript object: */
            var obj = JSON.parse(error._body);
            return (error.status === 404) ? Rx_1.Observable.throw(obj.errorMsg) : null;
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=Authentication.Service.js.map