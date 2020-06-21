import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


import Glide from '@glidejs/glide'




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.5,
  //       backgroundColor: 'green'
  //     })),
  //     transition('open <=> closed', [
  //       animate('1s')
  //     ])
  //     // ,
  //     // transition('closed => open', [
  //     //   animate('0.5s')
  //     // ]),
  //   ]),
  // ]
  animations: [
    trigger('slideDown', [
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
          style({opacity:0, transform: 'translateX(100%)'}),
          animate('0.6s 1000ms ease-in-out')
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
  }


}
