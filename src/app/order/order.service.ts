import { Injectable } from '@angular/core';
import { Order } from './models/Order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  static ID = 1;
  order?: Order;

  save(order: Order): void {
    this.order = order;
    OrderService.ID++;
  }

  getOrderInfo(): Order {
    return this.order!;
  }
}
