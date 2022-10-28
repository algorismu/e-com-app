import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { MiscModule } from '../misc/misc.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductPageComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, MiscModule],
  exports: [
    ProductListComponent,
    ProductListItemComponent,
    ProductPageComponent,
  ],
})
export class ProductsModule {}
