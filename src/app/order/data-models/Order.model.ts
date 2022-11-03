import { Item } from 'src/app/cart/data-models/Item.model';

export interface Order {
  name: string;
  address: string;
  creditCard: string;
  items: Item[];
  amount: number;
}
