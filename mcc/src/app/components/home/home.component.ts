import { Component, OnInit } from '@angular/core';
// dependencies for animations
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
// import slider 
import Glide from '@glidejs/glide'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideD', [
        transition('void => *', [
            style({opacity:0, transform: 'translateY(-10%)'}),
            animate('0.6s 2000ms ease-in-out')
        ]),
        transition('* => void', [
            animate('10ms ease-in-out', style({transform: 'translateY(100%)'}))    
        ])
    ]),
    trigger('slideUp', [
      transition('void => *', [
          style({opacity:0, transform: 'translateY(10%)'}),
          animate('0.6s 3000ms ease-in-out')
      ]),
      transition('* => void', [
          animate('10ms ease-in-out', style({transform: 'translateY(100%)'}))    
      ])
  ]),
    trigger('slideinLeft', [
      transition('void => *', [
          style({opacity:0, transform: 'translateX(-100%)'}),
          animate('0.6s 4000ms ease-in-out')
      ]),
      transition('* => void', [
          animate('10ms ease-in-out', style({transform: 'translateY(100%)'}))    
      ])
  ]),
]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Glide('.glide', {
      type: 'carousel',
      autoplay: 2000,
      gap:1,
      animationDuration: 1000,
      animationTimingFunc: 'linear',
      perView: 3,
      peek: 300,
      breakpoints: {
        879: {perView:2},
        630:{perView:1}
      }
    }).mount()
    
  }

 

}
