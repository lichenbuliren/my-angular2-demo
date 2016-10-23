import { Component } from '@angular/core';

import { MySwiperComponent } from './my-swiper/my-swiper.component';

const DEMOS = [{
  name: 'highlight',
  link: 'highlight'
}, {
  name: 'swiper',
  link: 'swiper'
}];

const images = [
  'http://cimg2.res.meizu.com/m/201610/1476947576236.jpg',
  'http://cimg2.res.meizu.com/m/201610/1476755503333.jpg',
  'http://cimg2.res.meizu.com/m/201610/1475983120658.jpg'
];

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  
})

export class ExampleComponent {
    title ="Example List";
    demos = DEMOS;
    slideImages = images;
}