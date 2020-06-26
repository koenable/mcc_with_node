import { Component, OnInit } from '@angular/core';

// import gsap to create menu overlay animation
import { gsap } from "gsap";
import { slideDown,slideinLeft   } from "./../../shared/animations";


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  animations: [slideDown ,slideinLeft
  ]
})
export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu():void{
    gsap.timeline()
      .fromTo(".menu_overlay", {
        x: -1000,
        opacity:0
      },{
        x: 0,
        opacity:1,
      }
      )
  }

  closeMenu():void{
    gsap.timeline()
      .fromTo(".menu_overlay", {
        x: 0,
        opacity:1
      },{
        x: -1000,
        opacity:0     
      }
      )
  }


}
