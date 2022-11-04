import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueItemComponent } from './catalogue-item/catalogue-item.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

import { AppRoutingModule } from '../app-routing.module';
import { MiscModule } from '../misc/misc.module';

@NgModule({
  declarations: [
    CatalogueComponent,
    CatalogueItemComponent,
    ProductPageComponent,
    ProductThumbnailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MiscModule,
  ],
  exports: [
    CatalogueComponent,
    CatalogueItemComponent,
    ProductPageComponent,
    ProductThumbnailComponent,
  ],
})
export class ProductsModule {}
