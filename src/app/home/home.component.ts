import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { SwUpdate } from '@angular/service-worker';
import { HttpService } from "../services/http.service";
import { gsap, TweenMax } from "gsap";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit() {
    this.overlayTween();
  }
 
   TMLine = gsap.timeline();
   constructor(private updates: SwUpdate) {
  };


  // Landing overlay
  overlayTween() {
    this.TMLine.to(".overlay", 1, {
      top: "100%",
      ease: "power3.out",
      y: -680,

    })
    this.TMLine.to(".overlay span", .5, {
      opacity: 0,
      y: -60,
      delay: .2
    })
    this.TMLine.to(".overlay .overlay_tittle", .5, {
      opacity: 0,
      y: -80,
      // ease: Expo.easeInOut
    })
    this.TMLine.to(".overlay", 1, {
      delay: .2,
      top: "-100%",
      ease: "power1.out",
      y: -40,
      onComplete:this.landingTween
    })
    

  } 

  landingTween(){
    TweenMax.to(".wrapper",.5, {
      opacity:1
    })
    
    TweenMax.from(".left", 1.6, {
      delay: 0.6,
      width: 0,
      ease: Expo.easeInOut
    })

    TweenMax.from(".logo", 1, {
      delay: 1,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".menu", 1, {
      delay: 4,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".categories", 1, {
      delay: 1.4,
      opacity: 0,
      x: -150,
      ease: Expo.easeInOut
    });

    TweenMax.from(".search", .8, {
      delay: 1.6,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".bag", 1, {
      delay: 1.6,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".media ul li", 1, {
      delay: 4,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    });


    TweenMax.from(".product-img", 3, {
      delay: 2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".product-title", 3, {
      delay: 2.2,
      opacity: 0,
      y: 50,
      ease: Expo.easeInOut
    });

    TweenMax.from(".product-subtitle", 3, {
      delay: 2.4,
      opacity: 0,
      y: 50,
      ease: Expo.easeInOut
    });

  }



}
