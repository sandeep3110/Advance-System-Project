"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
"use strict";
var CustomerHeader = (function () {
    function CustomerHeader() {
    }
    return CustomerHeader;
}());
CustomerHeader = __decorate([
    core_1.Component({
        selector: 'Customer-Header',
        templateUrl: './Customer_Header.html',
        styleUrls: ['./../DefaultHome/Header.css'],
    })
], CustomerHeader);
exports.CustomerHeader = CustomerHeader;
    ||  ||  ||  | merged;
common;
ancestors
    <<  <<  <<  << merge;
branch;
1
    ||  ||  ||  ||  | merged;
common;
ancestors;
id: number = JSON.parse(sessionStorage.userData).memberId; // Fetching the memberId for URL
id: number = JSON.parse(sessionStorage.userData).memberId; // Fetching the memberId for URL
/* id:number = JSON.parse(localStorage.userData).memberId ; */
    ||  ||  ||  | merged;
common;
ancestors;
id: number = JSON.parse(sessionStorage.userData).memberId; // Fetching the memberId for URL
    ||  ||  ||  | merged;
common;
ancestors
    >>>  >>>  >>> Temporary;
merge;
branch;
2;
constructor(private, router, router_1.Router);
{ }
/* To make Log Out tab have a pointer cursor */
pointer();
any;
{
    var myStyles = {
        'cursor': 'pointer',
    };
    return myStyles;
}
/* Log out from the session and clearing the storage */
logOut();
{
    sessionStorage.removeItem("userData");
    this.router.navigate(['/login']);
}
//# sourceMappingURL=Customer_Header.component_BACKUP_11644.js.map