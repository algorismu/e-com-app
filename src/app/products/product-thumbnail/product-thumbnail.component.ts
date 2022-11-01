import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../data-models/Product';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css'],
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product!: Product;
  @Input() width!: number;
  @Input() height!: number;

  ngOnInit(): void {}
}
