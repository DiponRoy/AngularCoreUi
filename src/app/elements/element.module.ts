import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { ModalModule } from 'ngx-bootstrap';

import { BusyButtonComponent } from './busy-button/busy-button.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './/confirm-dialog/confirm-dialog.service';



@NgModule({
  declarations: [
    BusyButtonComponent,
    ConfirmDialogComponent
  ],
  imports: [
    ModalModule.forRoot()
  ],
  providers: [
    ConfirmDialogService
  ],
  bootstrap: [],
  entryComponents:[
    BusyButtonComponent,
    ConfirmDialogComponent
  ]
})
export class ElementModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(BusyButtonComponent, { injector: injector });
    customElements.define('busy-button', el);
  }
 }