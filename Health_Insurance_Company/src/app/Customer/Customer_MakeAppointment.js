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
var router_1 = require("@angular/router");
var Customer_AuthGuard_1 = require("./Customer_AuthGuard");
"use strict";
var AppointmentModal = (function (_super) {
    __extends(AppointmentModal, _super);
    /* Taking the sessionstorage into Customer values from Customer_AuthGuard.ts rather declaring another variable */
    function AppointmentModal(rout) {
        var _this = _super.call(this, rout) || this;
        _this.rout = rout;
        _this.datepickerOpts = {
            /* startDate: new Date(2016, 5, 10), */
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'D, d MM yyyy',
            icon: 'fa fa-calendar'
        };
        _this.timepickerOpts = {
            icon: 'fa fa-clock-o',
            showMeridian: false,
            minuteStep: 1
        };
        _this.profileName = [];
        console.log("modal" + _this.profileName);
        _this.profileName = '';
        return _this;
    }
    AppointmentModal.prototype.clearName = function () {
        console.log("cleared");
        this.profileName = '';
    };
    AppointmentModal.prototype.getDate = function (dt) {
        return dt && dt.getTime();
    };
    return AppointmentModal;
}(Customer_AuthGuard_1.CustomerAuthGuard));
__decorate([
    core_1.Input('docProfileList'),
    __metadata("design:type", Object)
], AppointmentModal.prototype, "profileName", void 0);
AppointmentModal = __decorate([
    core_1.Component({
        selector: 'Appointment-Modal',
        templateUrl: './Customer_MakeAppointment_Modal.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppointmentModal);
exports.AppointmentModal = AppointmentModal;
//# sourceMappingURL=Customer_MakeAppointment.js.map