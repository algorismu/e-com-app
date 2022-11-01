import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { MiscModule } from '../misc/misc.module';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartPageComponent,
    CartFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MiscModule, ProductsModule],
  exports: [
    CartComponent,
    CartItemComponent,
    CartPageComponent,
    CartFormComponent,
  ],
})
export class CartModule {}
