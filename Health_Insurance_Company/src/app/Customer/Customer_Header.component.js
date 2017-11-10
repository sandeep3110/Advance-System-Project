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
var router_1 = require("@angular/router");
"use strict";
var CustomerHeader = (function () {
    // id:number = JSON.parse(sessionStorage.userData).memberId ; // Fetching the memberId for URL
    function CustomerHeader(router) {
        this.router = router;
    }
    /* To make Log Out tab have a pointer cursor */
    CustomerHeader.prototype.pointer = function () {
        var myStyles = {
            'cursor': 'pointer',
        };
        return myStyles;
    };
    /* Log out from the session and clearing the storage */
    CustomerHeader.prototype.logOut = function () {
        sessionStorage.removeItem("userData");
        this.router.navigate(['/login']);
    };
    return CustomerHeader;
}());
CustomerHeader = __decorate([
    core_1.Component({
        selector: 'Customer-Header',
        templateUrl: './Customer_Header.html',
        styleUrls: ['./../DefaultHome/Header.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CustomerHeader);
exports.CustomerHeader = CustomerHeader;
//# sourceMappingURL=Customer_Header.component.js.map