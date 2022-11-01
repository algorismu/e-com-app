import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../data-models/Item.model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() quantityChange: EventEmitter<Item> = new EventEmitter();
  @Output() removeItem: EventEmitter<Item> = new EventEmitter();

  ngOnInit(): void {}

  changeQty(quantity: number): void {
    this.item.quantity = quantity;
    this.quantityChange.emit(this.item);
  }

  delete(): void {
    this.removeItem.emit(this.item);
  }
}
