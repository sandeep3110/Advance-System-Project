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
var forms_1 = require("@angular/forms");
var Email_Notifications_Service_1 = require("./../RESTFul_API_Service/Email.Notifications.Service");
"use strict";
var FooterComponent = (function () {
    function FooterComponent(fb, emailNotify) {
        this.fb = fb;
        this.emailNotify = emailNotify;
        this.newsForm();
    }
    FooterComponent.prototype.newsForm = function () {
        this.newsLetter = this.fb.group({
            userEmail: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('([\\w-\.]+@([\\w-]+\.)+[\\w-])+')])],
        });
    };
    FooterComponent.prototype.newsLetterEmail = function () {
        /* Should be Json format email : "email_address" */
        var _this = this;
        var entry = {
            email: this.newsLetter.get('userEmail').value,
        };
        this.emailNotify.newsLetterSubscription(entry)
            .subscribe(function (result) {
            console.log(result.errorMsg);
            window.alert(result.errorMsg);
            _this.newsLetter.get("userEmail").reset();
        }, 
        /* Error Handling from DBConn.service.ts */
        function (err) {
            window.alert(err);
            _this.newsLetter.get("userEmail").reset(); // Error rises for Phone entry only beacuse Phone number is Unique Key
        });
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'Footer-home',
        templateUrl: './Footer.html',
        styleUrls: ['./Footer.css'],
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, Email_Notifications_Service_1.EmailNotification])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=Footer.component.js.map