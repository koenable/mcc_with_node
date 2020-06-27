import { Component, OnInit } from '@angular/core';
// dependencies for animations
import { slideDownFirst, slideUp, slideInRight, slideDownAfter } from "./../../shared/animations";
// import slider 
import Glide from '@glidejs/glide'

import { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideDownFirst, slideUp, slideInRight, slideDownAfter]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var glideMulti1 = new Glide('.glide', {
      // type: 'carousel',
      type: 'slider',
      autoplay: 3000,
      perView: 4,
      gap: 0,
      animationDuration: 1000,
      peek: {
        before: 4,
        after: 1
      },
      breakpoints: {
        992: {
          perView: 1,
          autoplay: 2000
        }

      },

    })
      .mount({ Controls, Breakpoints });






  }




}
