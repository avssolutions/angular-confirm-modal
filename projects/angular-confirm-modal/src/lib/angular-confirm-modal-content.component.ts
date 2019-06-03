import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'angular-confirm-modal-content',
  styles: [`
    button {
      cursor: pointer;
    }
	`],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="cancel()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{message}}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" [class]="options.cancelBtnClass" (click)="cancel()">
        {{options.cancelBtnText}}
      </button>
      <button type="button" class="btn btn-success" [class]="options.confirmBtnClass" (click)="confirm()">
        {{options.confirmBtnText}}
      </button>
    </div>
  `
})
export class AngularConfirmModalContentComponent {
  @Input() message: string;
  @Input() title: string;
  @Input() options: any;

  constructor(public activeModal: NgbActiveModal) {
  }

  cancel() {
    this.activeModal.dismiss();
  }

  confirm() {
    this.activeModal.close();
  }
}
