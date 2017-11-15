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
var Customer_Home_service_1 = require("./../RESTFul_API_Service/Customer.Home.service");
"use strict";
var Appointment = (function () {
    function Appointment(fb, CustmService) {
        this.fb = fb;
        this.CustmService = CustmService;
        this.pinState = [{ pin: 19341, state: "PA" }, { pin: 78954, state: "PA" }, { pin: 78960, state: "PA" }, { pin: 19300, state: "PA" },
            { pin: 64052, state: "MO" }, { pin: 64785, state: "MO" }, { pin: 64097, state: "MO" }, { pin: 64093, state: "MO" },];
        /* Reason to hard code the values but not fetching from database is Career names will be know to everyone */
        this.listOfCareers = ["First Choice Health - PPO",
            "Cigna - HMO",
            "UnitedHealthcare - UnitedHealthcare Compass Plus",
            "Independence Blue Cross - National BlueCard PPO",
            "EmblemHealth - 9/11 Program",
            "Clover Health - Prestige",
            "Companion Life - Worker's Comp",
            "WEA Trust - Fox River Network: Tier 1 Providers",
            "Caterpillar - Caterpillar Network Plan",
            "Corvel - Group Health", "irst Health Insurance"];
        this.showForm();
        this.getListOfReasonsAndDoctors();
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
        this.pincode = this.searchForm.get('zipcode').value;
    };
    return Appointment;
}());
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