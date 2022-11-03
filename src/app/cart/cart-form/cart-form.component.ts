import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from 'src/app/order/data-models/Order.model';
import { OrderService } from 'src/app/order/order.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent implements OnInit {
  order!: Order;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.order = {
      name: '',
      address: '',
      creditCard: '',
      items: [],
      amount: 0,
    };
  }

  get emptyCart(): boolean {
    return this.cartService.isEmpty;
  }

  placeOrder(): void {
    this.cartService.findAll().subscribe((items) => {
      this.order.items = items;
    });
    this.order.amount = this.cartService.subTotal;
    this.orderService.save(this.order);
    this.cartService.clear();
    this.router.navigate(['order-success']);
  }
}
