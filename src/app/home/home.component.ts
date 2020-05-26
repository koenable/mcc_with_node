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
      .to(".greeting_overlay", 1, {
        ease: "power1.inOut",
        opacity:1
      })
      .to(".greeting_overlay .greeting_overlay_logo", .8, {
        opacity: 1,
        y: -80
      })
      .to(".greeting_overlay",2,{
        x:-800
      })
      .to("greeting_overlay_logo",-4, {
        y:-90,
        opacity:0,
        ease:"power1.inOut"
      })
      // Create and Include a loading function Tween
      // .to(".overlay", 1, {
      //   delay: .2,
      //   top: "-100%",
      //   ease: "power1.out",
      //   opacity:0,
      //   y: -40

      // })
  }




}
