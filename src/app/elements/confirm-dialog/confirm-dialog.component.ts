// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-confirm-dialog',
//   templateUrl: './confirm-dialog.component.html',
//   styleUrls: ['./confirm-dialog.component.scss']
// })
// export class ConfirmDialogComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() title: string = "Confirm";
  @Input() message: string = "";
  @Input() btnOkText: string = "Yes";
  @Input() btnCancelText: string = "Cancel";
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  public decline() {
    this.dismiss();   
    this.confirm.emit(false);
  }

  public accept() {
    this.dismiss();   
    this.confirm.emit(true);
  }

  public dismiss() {
    this.bsModalRef.hide();
  }

}

