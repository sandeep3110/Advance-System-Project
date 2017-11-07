import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


/* It is Mandatory to implement canActive method body in the AuthGuard Class because its an interface */
/* { Error: No provider for CustomerAuthGuard! } Dependency injection
To avoid the above error [Provider] should be specified in app.module.ts (or) Login.component.ts
*/
"use strict";

@Injectable()
export class CustomerAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

        
       if(sessionStorage.userData){
           return true;
          }
          /* If No data is retrived or session / window is closed open from here */
              this.router.navigate(['login']);
              return false;
          
    }

}