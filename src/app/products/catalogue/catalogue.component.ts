import { Component, OnInit } from '@angular/core';
import { Product } from '../data-models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'products-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  items: Product[] = [];

  constructor(private products: ProductService) {}

  ngOnInit(): void {
    this.products.findAll().subscribe((foundProducts) => {
      this.items = foundProducts;
    });
  }
}
