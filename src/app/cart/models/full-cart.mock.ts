import { productList } from 'src/app/products/models/Product-List.mock';
import { CartItem } from './CartItem.model';

export const cartItem: CartItem = {
  product: productList[0],
  quantity: 5,
};

export const fullCart: CartItem[] = productList
  .map((product) => {
    const item: CartItem = {
      product: product,
      quantity: 1,
    };
    return item;
  })
  .slice(0, 3);
