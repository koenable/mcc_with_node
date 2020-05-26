import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { SwUpdate } from '@angular/service-worker';
import { StoreReadstaff } from '../shared/storeReadstaff.service';
import { gsap } from "gsap";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private updates: SwUpdate,
              public initV: StoreReadstaff) { };

  ngOnInit() {
    // run greeting only once when app fiirst loads
    if (this.initV.setHomeInitValue() == false) {
      this.appGreeting();  
    }
  };


  appGreeting() {
      gsap.timeline()
      // .to(".overlay", 1, {
      //   top: "100%",
      //   ease: "power3.out",
      //   y: -680,
      // })
      .to(".overlay span", .5, {
        opacity: 0,
        y: -60,
        delay: .2
      })
      .to(".overlay .overlay_tittle", .5, {
        opacity: 0,
        y: -80

      })
      // .to(".overlay", 1, {
      //   delay: .2,
      //   top: "-100%",
      //   ease: "power1.out",
      //   opacity:0,
      //   y: -40

      // })
  }




}
