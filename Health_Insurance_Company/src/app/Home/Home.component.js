"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
"use strict";
var HomePageComponent = (function () {
    function HomePageComponent() {
        this.images = ['./app/Images/Health-1.jpg', './app/Images/Health-2.jpg']; // Image path with respect to Angular execution i.e (from app folder) not with app.component.ts
        this.counter = 0;
    }
    HomePageComponent.prototype.swapImages = function () {
        var myStyles = {
            'background-image': 'url(" ' + this.images[this.counter] + ' ")',
            'background-size': 'cover',
        };
        this.counter++;
        if (this.counter >= (this.images.length)) {
            this.counter = 0;
        }
        //setTimeout(this.swapImages,3000); 
        return myStyles;
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    core_1.Component({
        selector: 'Home-Page',
        templateUrl: './Home.html',
        styleUrls: ['./Home.css'],
    })
], HomePageComponent);
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=Home.component.js.map