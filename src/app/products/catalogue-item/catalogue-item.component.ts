import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/cart/data-models/Item.model';
import { Product } from '../data-models/Product';

@Component({
  selector: 'catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.css'],
})
export class CatalogueItemComponent implements OnInit {
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
