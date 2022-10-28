import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inline-price',
  templateUrl: './inline-price.component.html',
  styleUrls: ['./inline-price.component.css'],
})
export class InlinePriceComponent implements OnInit {
  @Input() amount!: number;
  ngOnInit(): void {}
}
