import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StoreReadstaff {

  constructor() { }
  key = "initValue";

  // Checks if Home Component ran atlest once. Controls Greeting overlay 
   setHomeInitValue() {
     if(!localStorage.getItem('initValue')){
          localStorage.setItem(this.key, "false");
          // return false;
          return true;
     }
     if(localStorage.getItem('initValue')){
      console.log("Exists");
      // return true;
      return false;
  };

}
}