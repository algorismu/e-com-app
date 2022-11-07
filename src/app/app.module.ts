import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { StoreHeaderComponent } from './header/store-header/store-header.component';
import { OrderModule } from './order/order.module';
import { MiscModule } from './misc/misc.module';

@NgModule({
  declarations: [AppComponent, StoreHeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    OrderModule,
    MiscModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
