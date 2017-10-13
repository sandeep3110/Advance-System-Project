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
var SignUpComponent = (function () {
    function SignUpComponent(fb) {
        this.fb = fb;
        this.createForm();
    }
    SignUpComponent.prototype.createForm = function () {
        this.entryForm = this.fb.group({
            firstname: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z\\s]')])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])(?!.*\\s).{6,16})+")])],
            age: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('(\\d?[1-9]|[1-9]0)+')])],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*')])],
            country: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z\\s]+')])],
        });
    };
    SignUpComponent.prototype.register = function () {
        var entries = {
            firstname: this.entryForm.get('firstname').value,
            password: this.entryForm.get('password').value,
            age: this.entryForm.get('age').value,
            phone: this.entryForm.get('phone').value,
            country: this.entryForm.get('country').value,
        };
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'signUp-page',
        templateUrl: './../HTML/SignUp.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=SignUp.component.js.map