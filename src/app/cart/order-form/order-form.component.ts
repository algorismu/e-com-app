import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(form: FormBuilder) {
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
    console.log(this.orderForm.value);
  }
}
