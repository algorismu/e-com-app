import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductPageComponent } from './product-page/product-page.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
