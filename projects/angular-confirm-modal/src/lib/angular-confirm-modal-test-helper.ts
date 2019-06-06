import { ComponentFixture } from '@angular/core/testing';

export class AngularConfirmModalTestHelper {
  invokeButtonOnDialog<T>(fixture: ComponentFixture<T>, classId: string): void {
    fixture.detectChanges();
    const confirmBtn: any = document.getElementsByClassName(classId)[0];
    confirmBtn.click();
    fixture.detectChanges();
  }
  confirmDialog<T>(fixture: ComponentFixture<T>): void {
    this.invokeButtonOnDialog(fixture, 't-btn-confirm');
  }

  cancelDialog<T>(fixture: ComponentFixture<T>): void {
    this.invokeButtonOnDialog(fixture, 't-btn-cancel');
  }
}
