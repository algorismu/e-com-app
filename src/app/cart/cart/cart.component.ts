import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../models/Item.model';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Item[] = [];
  subTotal: number = 0;

  constructor(private cartService: CartService) {}

  get isEmpty(): boolean {
    return this.cartService.isEmpty;
  }

  ngOnInit(): void {
    this.updateCartItems();
  }

  updateQuantity(item: Item): void {
    this.cartService.add(item);
    this.updateCartItems();
  }

  removeFromCart(item: Item): void {
    this.cartService.remove(item);
    this.updateCartItems();
  }

  private updateCartItems(): void {
    this.cartService.findAll().subscribe((items) => {
      this.items = items;
    });
    this.subTotal = this.cartService.subTotal;
  }
}
