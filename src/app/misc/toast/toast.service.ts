import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public showToast: boolean = false;
  public message: string = '';

  alert(msg: string): void {
    this.message = msg;
    this.showToast = true;
  }

  dismiss(): void {
    this.showToast = false;
    this.message = '';
  }
}
