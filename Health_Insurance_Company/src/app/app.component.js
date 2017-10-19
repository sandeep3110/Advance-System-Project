"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// imp url : http://embed.plnkr.co/9luTng/?show=preview
// imp url : https://bootsnipp.com/snippets/featured/login-amp-signup-forms-in-panel
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.images = ['./app/Images/Health-1.jpg', './app/Images/Health-2.jpg']; // Image path with respect to Angular execution not with app.component.ts
        this.counter = 0;
    }
    /*  constructor(){
       this.swapImages();
     } */
    AppComponent.prototype.swapImages = function () {
        console.log("hi I'm first counter " + this.counter);
        var myStyles = {
            'background-image': 'url(" ' + this.images[this.counter] + ' ")',
        };
        console.log("image counter" + this.images[this.counter]);
        console.log("hi I'm Second counter " + this.counter);
        this.counter++;
        if (this.counter >= (this.images.length)) {
            this.counter = 0;
        }
        //setTimeout(this.swapImages,3000); 
        return myStyles;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'ASP-Home',
        templateUrl: './HTML/Home.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map