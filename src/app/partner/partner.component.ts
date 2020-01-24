
import { Component, OnInit } from '@angular/core';

import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit{
  public carouselTile: NgxCarousel;

  state: any = {
    partner: {
      title: 'See We Are',
      description: 'Our Partners',
      buttonTitle: 'See our partners',
    },
    partners: [
      {
        image: '/assets/img/partner/1.jpg',
      },
      {
        image: '/assets/img/partner/2.jpg',
      },
      {
        image: '/assets/img/partner/3.jpg',
      },
      {
        image: '/assets/img/partner/1.jpg',
      },
      {
        image: '/assets/img/partner/2.jpg',
      },
      {
        image: '/assets/img/partner/3.jpg',
      }
    ],
    config: {
      width: '800px',
      height: '300px',
      autoPlay: true,
      delay: 3000
    }
  }

  ngOnInit(){
    this.carouselTile = {
      grid: {xs: 2, sm: 2, md: 3, lg: 3, all: 0},
      slide: 2,
      speed: 300,
      load: 2,
      loop: true,
      touch: true,
      animation: 'lazy',
      easing: 'ease',
      point: {
        visible: true
      }
    };
  }
}
