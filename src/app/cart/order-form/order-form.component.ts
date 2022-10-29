import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/order/models/Order.model';
import { OrderService } from 'src/app/order/order.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  orderForm!: FormGroup<{
    fullName: FormControl<string | null>;
    address: FormControl<string | null>;
    creditCardNumber: FormControl<string | null>;
  }>;

  constructor(
    form: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.orderForm = form.group({
      fullName: form.control('', Validators.required),
      address: form.control('', Validators.required),
      creditCardNumber: form.control('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
    });
  }

  ngOnInit(): void {}

  placeOrder(): void {
    const customerName = this.orderForm.getRawValue().fullName!;
    let amount: number;
    this.cartService.calcSubTotalPrice().subscribe((total) => (amount = total));
    const order: Order = {
      name: customerName,
      amount: amount!,
    };
    this.orderService.save(order);
    this.cartService.clear();
    this.router.navigate(['order-success']);
  }
}
