import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/cart/models/Item.model';
import { Product } from '../models/Product';

@Component({
  selector: 'product-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent implements OnInit {
  @Input() item!: Product;
  orderQuantity: number = 1;

  constructor(private cart: CartService) {}

  ngOnInit(): void {}

  addToCart(): void {
    const item: Item = {
      product: this.item,
      quantity: this.orderQuantity,
    };

    this.cart.add(item);
  }
}
