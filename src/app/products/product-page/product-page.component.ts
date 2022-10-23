import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { productList } from '../models/Product-List.mock';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;

  ngOnInit(): void {
    this.product = productList[0];
  }

  addToCart(): void {}
}
