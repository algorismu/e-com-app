import { productList } from 'src/app/products/models/Product-List.mock';
import { Item } from './Item.model';

export const cartItem: Item = {
  product: productList[0],
  quantity: 5,
};

export const fullCart: Item[] = productList
  .map((product) => {
    const item: Item = {
      product: product,
      quantity: 1,
    };
    return item;
  })
  .slice(0, 3);
