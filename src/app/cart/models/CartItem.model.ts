import { Product } from 'src/app/products/models/Product';

export interface CartItem {
  product: Product;
  quantity: number;
}
