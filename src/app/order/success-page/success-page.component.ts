import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css'],
})
export class SuccessPageComponent implements OnInit {
  name!: string;
  amount!: number;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const { name, amount } = this.orderService.getOrderInfo();
    this.name = name;
    this.amount = amount;
  }
}
