import { Component } from '@angular/core';

@Component({
  selector: 'my-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent {
  title = 'Directive Demo as highlight';
  //这个 color 可有可无
  color: string;
}
