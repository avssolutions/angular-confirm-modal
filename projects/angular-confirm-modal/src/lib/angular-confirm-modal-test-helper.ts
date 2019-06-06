import { ComponentFixture } from '@angular/core/testing';

export function confirmDialog<T>(fixture: ComponentFixture<T>): void {
  invokeButtonOnDialog(fixture, 't-btn-confirm');
}

export function cancelDialog<T>(fixture: ComponentFixture<T>): void {
  invokeButtonOnDialog(fixture, 't-btn-cancel');
}

function invokeButtonOnDialog<T>(fixture: ComponentFixture<T>, classId: string): void {
  fixture.detectChanges();
  const confirmBtn: any = document.getElementsByClassName(classId)[0];
  confirmBtn.click();
  fixture.detectChanges();
}
