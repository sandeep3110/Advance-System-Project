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
var EmailNotification = (function () {
    function EmailNotification(http) {
        this.http = http;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
    }
    /* All Https in Angular 2 protocols are asynchronous operations, Requesting server and
     * getting thne response from server and handling the response
    /* API calling for Email subscription for User entered email in home page */
    EmailNotification.prototype.newsLetterSubscription = function (emailEntry) {
        return this.http.post("http://localhost:8080/ASP/HealthDB/email/newsLetter", emailEntry)
            .map(function (response) {
            /* console.log(response); --> Response {_body: "{"age":0,"email":"prashanth6353@gmail.com","errorM…check your Inbox !....","memberId":0,"zipCode":0}"
              Response itself is in String format*/
            /* console.log(response.json()); --> {age: 0, email: "prashanth6353@gmail.com", errorMsg: " Email with News letter has been Sent,Please check your Inbox !....", memberId: 0, zipCode: 0} */
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
    return EmailNotification;
}());
EmailNotification = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmailNotification);
exports.EmailNotification = EmailNotification;
//# sourceMappingURL=Email.Notifications.Service.js.map