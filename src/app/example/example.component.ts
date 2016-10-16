import { Component } from '@angular/core';

const DEMOS = [{
  name: 'highlight',
  link: 'highlight'
}]

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

export class ExampleComponent {
    title ="Example List";
    demos = DEMOS;
}