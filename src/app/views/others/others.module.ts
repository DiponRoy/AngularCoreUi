import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ElementModule } from '../../elements/element.module';

import { ButtonsComponent } from './buttons.component';

// Routing
import { OthersRoutingModule } from './others-routing.module';


// Angular

@NgModule({
  imports: [
    CommonModule,
    OthersRoutingModule,
    FormsModule,
    ElementModule
  ],
  declarations: [
    ButtonsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OthersModule { }
