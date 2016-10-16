import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './example.component';
import { HighlightDirective, HighlightComponent } from './directive/';


export const exampleRouting: ModuleWithProviders = RouterModule.forChild([{
  path: 'examples',
  component: ExampleComponent
}, {
  path: 'examples/highlight',
  component: HighlightComponent
},{
  path: '',
  component: ExampleComponent
}]);