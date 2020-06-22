import { Component, OnInit } from '@angular/core';
// dependencies for animations
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

// import gsap to create menu overlay animation
import { gsap } from "gsap";



@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  animations: [
    trigger('slideDown', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-10%)' }),
        animate('0.6s 3000ms ease-in-out')
      ]),
      transition('* => void', [
        animate('10ms ease-in-out', style({ transform: 'translateY(100%)' }))
      ])
    ])
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
        opacity:0,
      }
      )
  }


}
