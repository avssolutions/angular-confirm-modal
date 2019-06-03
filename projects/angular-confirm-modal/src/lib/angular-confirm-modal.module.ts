import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularConfirmModalDirective } from './angular-confirm-modal.directive';
import { AngularConfirmModalContentComponent } from './angular-confirm-modal-content.component';
import { AngularConfirmModalConfig } from './angular-confirm-modal.config';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    AngularConfirmModalDirective,
    AngularConfirmModalContentComponent
  ],
  exports: [
    AngularConfirmModalDirective
  ],
  entryComponents: [AngularConfirmModalContentComponent],
  providers: []
})
export class AngularConfirmModalModule {
  static forRoot(config: any): ModuleWithProviders {
    return {
      ngModule: AngularConfirmModalModule,
      providers: [AngularConfirmModalConfig, { provide: 'AngularConfirmModalConfig', useValue: config }]
    };
  }
}

