import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

import { AppRoutingModule } from '../app-routing.module';
import { MiscModule } from '../misc/misc.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductPageComponent,
    ProductThumbnailComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, MiscModule],
  exports: [
    ProductListComponent,
    ProductListItemComponent,
    ProductPageComponent,
    ProductThumbnailComponent,
  ],
})
export class ProductsModule {}
