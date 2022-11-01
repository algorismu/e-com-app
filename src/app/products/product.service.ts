import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './data-models/Product';
import { productList } from './data-models/Product-List.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = productList;

  findAll(): Observable<Product[]> {
    return of(this.products);
  }

  findByName(name: string): Observable<Product> {
    const result = this.products.find((product) => product.name === name);
    return of(result!);
  }
}
