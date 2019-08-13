import { Injectable, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { Promise } from 'es6-promise';

@Injectable()
export class ConfirmDialogService {

  constructor(private modalService: BsModalService) { }

  public confirm(
    message: string,
    title: string = "Confirm",
    btnOkText: string = 'Yes',
    btnCancelText: string = 'Cancel'): Promise<boolean> { 
      const modalRef = this.modalService.show(ConfirmDialogComponent);     
      modalRef.content.title = title;
      modalRef.content.message = message;
      modalRef.content.btnOkText = btnOkText;
      modalRef.content.btnCancelText = btnCancelText;
      return new Promise((resolve) => {
        // modalRef.content.confirm.emit = function(value: boolean) {
        //     resolve(value);
        // };
        modalRef.content.confirm.subscribe((result) => {
            resolve(result);
        });
      });
    }
}
