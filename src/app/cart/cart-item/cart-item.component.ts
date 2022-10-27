import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../models/CartItem.model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item!: CartItem;
  @Output() quantityChange: EventEmitter<CartItem> = new EventEmitter();

  ngOnInit(): void {}

  changeQty(quantity: number): void {
    this.item.quantity = quantity;
    this.quantityChange.emit(this.item);
  }
}
