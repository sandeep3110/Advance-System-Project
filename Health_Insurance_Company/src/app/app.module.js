"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var PageNotFound_component_1 = require("./PageNotFound/PageNotFound.component");
var Header_component_1 = require("./DefaultHome/Header.component");
var Footer_component_1 = require("./DefaultHome/Footer.component");
var Home_component_1 = require("./Home/Home.component");
var Login_component_1 = require("./Login/Login.component");
var PopUp_component_1 = require("./Login/PopUp.component");
var Customer_SignUp_component_1 = require("./Login/Customer.SignUp.component");
var Doctor_SignUp_Component_1 = require("./Login/Doctor.SignUp.Component");
"Use srtict";
var appRoutes = [
    { path: '', component: app_component_1.AppComponent,
        children: [
            { path: '', component: Home_component_1.HomePageComponent },
            { path: 'Login', component: Login_component_1.LoginComponent },
        ]
    },
    { path: '**', component: PageNotFound_component_1.PageNotFoundComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule],
        declarations: [app_component_1.AppComponent,
            PageNotFound_component_1.PageNotFoundComponent,
            Header_component_1.HeaderComponent,
            Footer_component_1.FooterComponent,
            Home_component_1.HomePageComponent,
            Login_component_1.LoginComponent,
            PopUp_component_1.PopUpBoxComponent,
            Customer_SignUp_component_1.CustomerSignUpComponent,
            Doctor_SignUp_Component_1.DoctorSignUpComponent,],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map