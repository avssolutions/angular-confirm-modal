import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AngularConfirmModalContentComponent } from './angular-confirm-modal-content.component';
import { AngularConfirmModalConfig } from './angular-confirm-modal.config';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[angularConfirmModal]'
})

export class AngularConfirmModalDirective {
  constructor(private modalService: NgbModal, private config: AngularConfirmModalConfig) {

  }
  @Input() title: 'AngularConfirmModal';
  @Input() message: string;
  @Input() options: any;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onConfirm = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCancel = new EventEmitter<any>();

  small = 'sm';

  @HostListener('click', ['$event']) onClick($event) {
    this.openModal();
  }

  openModal() {
    const defaults = {
      confirmBtnText: this.config.confirmBtnText,
      confirmBtnClass: this.config.confirmBtnClass,
      cancelBtnText: this.config.cancelBtnText,
      cancelBtnClass: this.config.cancelBtnClass,
      modalSize: this.config.modalSize,
      modalClass: this.config.modalClass
    };

    if (this.options) {
      // tslint:disable-next-line:forin
      for (const key in defaults) {
        defaults[key] = this.options[key] || defaults[key];
      }
    }

    const modalOptions = new AngularConfirmModalOptions();
    modalOptions.windowClass = defaults.modalClass;

    switch (defaults.modalSize) {
      case 'sm':
        modalOptions.size = 'sm';
        break;
      case 'lg':
        modalOptions.size = 'lg';
        break;
      default:
        modalOptions.size = 'md';
        break;
    }

    const modalRef = this.modalService.open(AngularConfirmModalContentComponent, modalOptions as NgbModalOptions);
    modalRef.componentInstance.message = this.message;
    modalRef.componentInstance.title = this.title;
    modalRef.componentInstance.options = defaults;

    modalRef.result.then(() => {
      this.onConfirm.next();
    }, (r) => {
      if (this.onCancel) {
        this.onCancel.next();
      }
    });
  }
}

class AngularConfirmModalOptions {
  size: string;
  windowClass: string;
}
