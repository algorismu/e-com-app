import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PriceComponent } from './price/price.component';
import { InlinePriceComponent } from './inline-price/inline-price.component';

@NgModule({
  declarations: [PriceComponent, InlinePriceComponent],
  imports: [CommonModule],
  exports: [PriceComponent, InlinePriceComponent],
})
export class MiscModule {}
