import { Component, OnInit } from '@angular/core';
// dependencies for animations
import { slideDownFirst, slideUp,slideInRight, slideDownAfter } from "./../../shared/animations";
// import slider 
import Glide from '@glidejs/glide'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ slideDownFirst, slideUp,slideInRight, slideDownAfter]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

//https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js

// var glideMulti = new Glide('.multi', {
//   type: 'slider',
//   autoplay: 4000,
//   focusAt: 'center',
//   perView: 2
// });

var glideMulti1 = new Glide('.multi1', {
  // type: 'carousel',
  type: 'slider',
  autoplay: 5000,
  perView: 3,
  animationDuration: 1000,
 
  // gap:
});

// var glideHeroPeek = new Glide('.heropeek', {
//   type: 'carousel',
//   animationDuration: 1000,
//   autoplay: 3000,
//   focusAt: '1',
//   startAt: 1,
//   perView: 1,
//    // set a value to show the previous and next slides peeking in
//   peek: {
//     before: 20,
//     after: 20
//   },
//   g  
// });

// var glideHero = new Glide('.hero', {
//   type: 'carousel',
//   animationDuration: 2000,
//   autoplay: 4500,
//   focusAt: '1',
//   startAt: 3,
//   perView: 1, 
// });

// glideMulti.mount();
glideMulti1.mount();
// glideHeroPeek.mount();
// glideHero.mount();




      
  }

 

}
