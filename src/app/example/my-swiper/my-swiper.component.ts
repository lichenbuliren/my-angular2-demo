import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-swiper',
  templateUrl: './my-swiper.component.html',
  styleUrls: ['./my-swiper.component.css']
})
export class MySwiperComponent {
    @Input() slides: Array<string>;

    constructor() {}
}