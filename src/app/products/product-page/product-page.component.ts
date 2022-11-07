import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/cart/cart.service';
import { ProductService } from '../product.service';

import { Item } from 'src/app/cart/data-models/Item.model';
import { Product } from '../data-models/Product';
import { ToastService } from 'src/app/misc/toast/toast.service';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  quantity: number = 1;

  constructor(
    private products: ProductService,
    private cart: CartService,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.products.findById(Number(id)).subscribe((product) => {
        this.product = product;
      });
    }
  }

  addToCart(): void {
    const item: Item = {
      product: this.product,
      quantity: this.quantity,
    };
    this.cart.add(item);
    this.toast.alert(`Item ${item.product.name} added to cart.`);
  }
}
