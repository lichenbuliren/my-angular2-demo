import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { ExampleComponent }   from './example.component';
import { HighlightDirective, HighlightComponent } from './directive/';
import { exampleRouting } from './example.routing';


@NgModule({
  imports:      [ CommonModule, FormsModule, exampleRouting ],
  declarations: [ ExampleComponent, HighlightDirective, HighlightComponent ],
  providers:    [ ]
})
export class ExampleModule { }
