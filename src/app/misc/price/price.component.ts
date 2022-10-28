import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit {
  @Input() amount!: number;

  constructor() {}

  ngOnInit(): void {}
}
