import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { SuccessPageComponent } from './order/success-page/success-page.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductPageComponent } from './products/product-page/product-page.component';

const routes: Routes = [
  { path: 'products/:name', component: ProductPageComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'order-success', component: SuccessPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
