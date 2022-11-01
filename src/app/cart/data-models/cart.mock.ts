import { productList } from 'src/app/products/data-models/Product-List.mock';
import { Item } from './Item.model';

export const SINGLE_ITEM_CART: Item = {
  product: productList[0],
  quantity: 5,
};

export const FULL_CART: Item[] = productList
  .map((product) => {
    const item: Item = {
      product: product,
      quantity: 1,
    };
    return item;
  })
  .slice(0, 3);
