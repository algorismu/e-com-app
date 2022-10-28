import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SuccessPageComponent } from './success-page/success-page.component';
import { MiscModule } from '../misc/misc.module';

@NgModule({
  declarations: [SuccessPageComponent],
  imports: [CommonModule, MiscModule],
  exports: [SuccessPageComponent],
})
export class OrderModule {}
