import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/misc/toast/toast.service';
import { CartService } from '../cart.service';
import { Item } from '../data-models/Item.model';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Item[] = [];
  subTotal: number = 0;

  constructor(private cartService: CartService, private toast: ToastService) {}

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
    this.toast.alert(`Item ${item.product.name} removed from cart.`);
  }

  private updateCartItems(): void {
    this.cartService.findAll().subscribe((items) => {
      this.items = items;
    });
    this.subTotal = this.cartService.subTotal;
  }
}
