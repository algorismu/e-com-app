import { Product } from 'src/app/products/models/Product';

export interface CartItem {
  product: Pick<Product, 'name' | 'price' | 'url'>;
  quantity: number;
}
