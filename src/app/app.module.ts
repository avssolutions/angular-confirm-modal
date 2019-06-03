import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularConfirmModalModule } from '../../projects/angular-confirm-modal/src/lib/angular-confirm-modal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularConfirmModalModule.forRoot({
      confirmBtnText: 'Pepe'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
