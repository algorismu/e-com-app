import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;

  constructor(private service: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');

    if (name) {
      this.service.findByName(name).subscribe((product) => {
        this.product = product;
      });
    }
  }

  addToCart(): void {}
}
