// dependencies for animations
import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';
  

  
 export let slideDown = trigger('slideDown', [
    transition('void => *', [
      style({ opacity: 0, transform: 'translateY(-10%)' }),
      animate('0.6s 3000ms ease-in-out')
    ]),
    transition('* => void', [
      animate('10ms ease-in-out', style({ transform: 'translateY(100%)' }))
    ])
  ])

export let slideinLeft =  trigger('slideinLeft', [
    transition('void => *', [
        style({opacity:0, transform: 'translateX(-100%)'}),
        animate('0.6s 4000ms ease-in-out')
    ]),
    transition('* => void', [
        animate('10ms ease-in-out', style({transform: 'translateY(100%)'}))    
    ])
])
