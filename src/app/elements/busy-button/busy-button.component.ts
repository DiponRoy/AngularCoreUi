import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  //selector: 'busy-button',
  templateUrl: './busy-button.component.html',
})
export class BusyButtonComponent {
  @Input() disable: boolean = false;
  @Input() busy: boolean = false;
  @Input() label: string = '';
  @Input() buttonType: string = 'button';
  @Input() buttonClass: string = 'btn btn-block btn-secondary';
  @Input() spinnerClass: string = 'spinner-border spinner-border-sm'
}
