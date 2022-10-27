import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart-list/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartPageComponent,
    OrderFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, CurrencyPipe],
  exports: [
    CartComponent,
    CartItemComponent,
    CartPageComponent,
    OrderFormComponent,
  ],
})
export class CartModule {}
