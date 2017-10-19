// imp url : http://embed.plnkr.co/9luTng/?show=preview
// imp url : https://bootsnipp.com/snippets/featured/login-amp-signup-forms-in-panel
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'ASP-Home',
  templateUrl: './HTML/Home.html',
  
})
export class AppComponent  { 

  images : any = ['./app/Images/Health-1.jpg', './app/Images/Health-2.jpg']; // Image path with respect to Angular execution not with app.component.ts
  counter : number = 0;

       /*  constructor(){
          this.swapImages();
        } */

        swapImages(): any{
          console.log("hi I'm first counter " + this.counter);
          
          let myStyles = { 
           
             'background-image' : 'url(" '+this.images[this.counter]+' ")', 
          }
          console.log("image counter" +this.images[this.counter]);
          console.log("hi I'm Second counter " + this.counter);
          this.counter++;
          if (this.counter >= (this.images.length))   {this.counter = 0;}
          //setTimeout(this.swapImages,3000); 
          return myStyles;
        }

 }




