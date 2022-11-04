import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './data-models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private PRODUCTS_URL = 'http://127.0.0.1:3000/products';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCTS_URL);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.PRODUCTS_URL}/${id}`);
  }
}
