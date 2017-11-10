"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
"use strict";
var CustomerHomeView = (function () {
    function CustomerHomeView() {
    }
    return CustomerHomeView;
}());
CustomerHomeView = __decorate([
    core_1.Component({
        selector: 'Customer-HomeView',
        templateUrl: './Customer_Home_View.html',
        styleUrls: ['./Customer_Home_View.css'],
    })
], CustomerHomeView);
exports.CustomerHomeView = CustomerHomeView;
    ||  ||  ||  | merged;
common;
ancestors
    <<  <<  <<  << merge;
branch;
1;
customerData: JSON;
    ||  ||  ||  ||  | merged;
common;
ancestors;
customerData: JSON;
customerData: JSON; /* Mentioning Json type is optional */
/* Either Local storage or session storage application is throughing error while
restarting the app --> "User Data doesn't exist on storage" */
    ||  ||  ||  | merged;
common;
ancestors;
customerData: JSON;
    ||  ||  ||  | merged;
common;
ancestors
    >>>  >>>  >>> Temporary;
merge;
branch;
2;
constructor();
{
        ||  ||  ||  | merged;
    common;
    ancestors
        <<  <<  <<  << merge;
    branch;
    1
        ||  ||  ||  ||  | merged;
    common;
    ancestors;
    this.customerData = JSON.parse(sessionStorage.userData); /* Mentioning Json type is optional */
    this.customerData = JSON.parse(sessionStorage.userData);
    /* this.customerData = JSON.parse(localStorage.userData); */
        ||  ||  ||  | merged;
    common;
    ancestors;
    this.customerData = JSON.parse(sessionStorage.userData); /* Mentioning Json type is optional */
        ||  ||  ||  | merged;
    common;
    ancestors
        >>>  >>>  >>> Temporary;
    merge;
    branch;
    2;
}
//# sourceMappingURL=Customer_Home_View_BACKUP_11644.js.map