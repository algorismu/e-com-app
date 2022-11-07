import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PriceComponent } from './price/price.component';
import { InlinePriceComponent } from './inline-price/inline-price.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [PriceComponent, InlinePriceComponent, ToastComponent],
  imports: [CommonModule],
  exports: [PriceComponent, InlinePriceComponent, ToastComponent],
})
export class MiscModule {}
