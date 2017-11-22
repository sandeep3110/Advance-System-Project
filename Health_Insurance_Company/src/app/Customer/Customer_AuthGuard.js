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
/* It is Mandatory to implement canActive method body in the AuthGuard Class because its an interface */
/* { Error: No provider for CustomerAuthGuard! } Dependency injection
To avoid the above error [Provider] should be specified in app.module.ts (or) Login.component.ts
*/
"use strict";
var CustomerAuthGuard = (function () {
    /* When TypeScript thinks that property "x" does not exist on "y", then you can always cast "y" into "any",
    which will allow you to call anything (like "x") on "y". */
    function CustomerAuthGuard(router) {
        this.router = router;
        this.storage = {};
        /* var userData:any = sessionStorage.userData;
        this.customerData = JSON.parse(userData); */
        this.storage = sessionStorage;
        this.customerData = this.storage.userData ? JSON.parse(this.storage.userData) : false;
        /* console.log(" customer data ", this.customerData);    */
        // this.customerData = storage.userData==null ? false: JSON.parse(storage.userData);
        // let sessionStorage = <any> {};
        // this.customerData = (sessionStorage).userData==null ? false: JSON.parse((sessionStorage).userData);
        /* this.customerData = JSON.parse(sessionStorage.userData);  */
    }
    /* Either Local storage or session storage application is throughing error while
    restarting the app --> "User Data doesn't exist on storage" */
    CustomerAuthGuard.prototype.canActivate = function () {
        if (this.customerData) {
            /*  console.log(" customer data ", this.customerData); */
            return true;
        }
        /* if(localStorage.userData){
          return true;
         } */
        /* If No data is retrived or session / window is closed open from here */
        this.router.navigate(['login']);
        return false;
    };
    return CustomerAuthGuard;
}());
CustomerAuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], CustomerAuthGuard);
exports.CustomerAuthGuard = CustomerAuthGuard;
//# sourceMappingURL=Customer_AuthGuard.js.map