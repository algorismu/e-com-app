import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './models/Item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Item[] = [];
  private subTotalPrice: number = 0;

  get subTotal(): number {
    return this.subTotalPrice;
  }

  get isEmpty(): boolean {
    return this.cart.length === 0;
  }

  updateSubTotalPrice(): void {
    this.subTotalPrice = this.calcSubTotalPrice();
  }

  add(item: Item): void {
    const foundIndex = this.cart.findIndex(
      (target) => target.product.name === item.product.name
    );

    if (foundIndex < 0) this.cart.push(item);
    else this.cart[foundIndex] = item;

    this.updateSubTotalPrice();
  }

  remove(item: Item): void {
    const updatedCart = this.cart.filter(
      (target) => item.product.name !== target.product.name
    );
    this.cart = updatedCart;
    this.updateSubTotalPrice();
  }

  findAll(): Observable<Item[]> {
    return of(this.cart);
  }

  clear(): void {
    this.cart = [];
  }

  private calcSubTotalPrice(): number {
    return this.cart
      .map((item) => [item.product.price, item.quantity])
      .map(([price, quantity]) => price * quantity)
      .reduce((a, b) => a + b, 0);
  }
}
