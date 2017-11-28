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
    /* All Https in Angular 2 protocols are asynchronous operations, Requesting server and
     * getting thne response from server and handling the response
    /* to authenticate user and get his details */
    AuthenticationService.prototype.loginAuthentication = function (userData) {
        return this.http.post("http://localhost:8080/ASP/HealthDB/myresource/authentication", userData) /* Specifying Headers is optional */
            .map(function (response) {
            /* console.log(response);
            if(response.status === 404) we are getting error for status code 404 not found on console that is the reason we are using catch block
             return response.json(); */
            sessionStorage.setItem("userData", JSON.stringify(response.json()));
            /*  localStorage.setItem("userData" , JSON.stringify(response.json()) );    */
            return response.json();
        })
            .catch(function (error) {
            /*   console.log(error._body); displays only string holding JSON object.
                Use the JavaScript function JSON.parse() to convert text/string into a TypeScript object:
              In the error we have the error message in
                     _body{' "errorMsg" :"Profile doesn't not exist" '} --> string holding JSON object
              after JSON.parse it becomes
                    [errorMsg : "Profile doesn't not exist"]  JSON object
                    console.log(obj.errorMsg);   */
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