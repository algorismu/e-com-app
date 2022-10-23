import { Injectable } from '@angular/core';
import { Product } from '../products/models/Product';
import { CartItem } from './models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  add(item: CartItem): void {
    const found = this.cart.find(
      (currentItem) => currentItem.product.name === item.product.name
    );

    if (found) {
      const updated: CartItem = {
        ...found,
        quantity: found.quantity + item.quantity,
      };
      this.cart = this.cart.filter(
        (curr) => curr.product.name !== item.product.name
      );
      this.cart.push(updated);
    }
  }
}
