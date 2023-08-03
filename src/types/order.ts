import {Food} from './food';

export interface CartItem extends Food {
  quantity: number;
}

export type Order = {
  id: number;
  orderDate: string;
  orderItems: CartItem[];
  isDelivered: boolean;
  totalPrice: string;
};
