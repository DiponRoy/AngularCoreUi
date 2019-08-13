import { Component } from '@angular/core';

import { BusyButtonComponent } from '../../elements/busy-button/busy-button.component';
import { ConfirmDialogService } from '../../elements/confirm-dialog/confirm-dialog.service';

@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {
  public buttonBusy: boolean = false;

  constructor(private confirmService: ConfirmDialogService) { }

  add(item){
    if(this.buttonBusy){
        return;
    }
    this.buttonBusy = true;
    setTimeout(()=>{
      this.buttonBusy = false;
    }, 5000);
  }

  postButton(buyButton: BusyButtonComponent, item){
    if(buyButton.busy){
        return;
    }
    buyButton.busy = true;
    setTimeout(()=>{
      buyButton.busy = false;
    }, 5000);
  }

  showConfirm(){
    this.confirmService.confirm("want to delete?").then((confirm) => {
      alert(confirm);
    });
  }
  
}
