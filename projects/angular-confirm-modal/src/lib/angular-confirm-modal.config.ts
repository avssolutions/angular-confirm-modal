import { Injectable, Inject } from '@angular/core';

@Injectable()
export class AngularConfirmModalConfig {
public modalSize = 'lg';
public modalClass: '';
public confirmBtnText: 'Confirm';
public confirmBtnClass: 'btn btn-success';
public cancelBtnText: 'Cancel';
public cancelBtnClass: 'btn btn-danger';

constructor(@Inject('AngularConfirmModalConfig') public options: any[]) {
// tslint:disable-next-line:forin
		for (const option in options) {
			this[option] = options[option];
		}
	}
}
