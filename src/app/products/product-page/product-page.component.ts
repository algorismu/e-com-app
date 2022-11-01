import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/cart/cart.service';
import { ProductService } from '../product.service';

import { Item } from 'src/app/cart/data-models/Item.model';
import { Product } from '../data-models/Product';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  quantity: number = 1;

  constructor(
    private service: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');

    if (name) {
      this.service.findByName(name).subscribe((product) => {
        this.product = product;
      });
    }
  }

  addToCart(): void {
    const item: Item = {
      product: this.product,
      quantity: this.quantity,
    };

    this.cartService.add(item);
  }
}
