import { Product } from 'src/app/products/models/Product';

export interface Item {
  product: Product;
  quantity: number;
}
