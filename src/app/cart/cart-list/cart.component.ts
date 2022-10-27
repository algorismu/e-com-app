import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../models/CartItem.model';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  subTotal!: number;

  constructor(private cartService: CartService) {}

  get isEmpty(): boolean {
    return this.items.length === 0;
  }

  ngOnInit(): void {
    this.fillCart();
    this.updateSubTotal();
  }

  updateCart(item: CartItem): void {
    this.cartService.add(item);
    this.fillCart();
    this.updateSubTotal();
  }

  private fillCart(): void {
    this.cartService.findAll().subscribe((cartItems) => {
      this.items = cartItems;
    });
  }

  private updateSubTotal(): void {
    this.cartService
      .calcSubTotalPrice()
      .subscribe((value) => (this.subTotal = value));
  }
}
