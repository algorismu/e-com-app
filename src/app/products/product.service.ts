import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/Product';
import { productList } from './models/Product-List.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = productList;

  findAll(): Observable<Product[]> {
    return of(this.products);
  }
}
