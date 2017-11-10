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
var forms_1 = require("@angular/forms");
var Customer_Home_View_1 = require("./Customer_Home_View");
var Customer_Home_service_1 = require("./../RESTFul_API_Service/Customer.Home.service");
"use strict";
var Appointment = (function (_super) {
    __extends(Appointment, _super);
    function Appointment(fb, CustmService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.CustmService = CustmService;
        _this.showForm();
        _this.getListOfReasonsAndDoctors();
        return _this;
    }
    Appointment.prototype.showForm = function () {
        this.searchForm = this.fb.group({
            reason: ['', forms_1.Validators.required],
            zipcode: ['', forms_1.Validators.required],
        });
    };
    Appointment.prototype.getListOfReasonsAndDoctors = function () {
        var _this = this;
        this.CustmService.getReasonList()
            .subscribe(function (result) {
            /* console.log(result.reasonSet); */
            _this.reasonList = result.reasonSet;
            /* console.log(this.reasonList); */
        });
    };
    Appointment.prototype.nearByDoctors = function () {
    };
    return Appointment;
}(Customer_Home_View_1.CustomerHomeView));
Appointment = __decorate([
    core_1.Component({
        selector: 'Customer-Appointment',
        templateUrl: './Customer_appointment.html',
        styleUrls: ['./Customer_appointment.css'],
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, Customer_Home_service_1.CustomerService])
], Appointment);
exports.Appointment = Appointment;
//# sourceMappingURL=Customer_appointment.js.map