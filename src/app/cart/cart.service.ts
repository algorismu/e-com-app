import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { fullCart } from './models/full-cart.mock';
import { CartItem } from './models/CartItem.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  add(item: CartItem): void {
    const foundIndex = this.cart.findIndex(
      (target) => target.product.name === item.product.name
    );

    if (foundIndex < 0) this.cart.push(item);
    else this.cart[foundIndex] = item;
  }

  findAll(): Observable<CartItem[]> {
    return of(this.cart);
  }

  calcSubTotalPrice(): Observable<number> {
    const subTotal = this.cart
      .map((item) => [item.product.price, item.quantity])
      .map(([price, quantity]) => price * quantity)
      .reduce((a, b) => a + b, 0);
    return of(subTotal);
  }
}
