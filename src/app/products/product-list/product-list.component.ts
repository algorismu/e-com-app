import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  items: Product[] = [];

  constructor(private products: ProductService) {}

  ngOnInit(): void {
    this.products.findAll().subscribe((foundProducts) => {
      this.items = foundProducts;
    });
  }
}
