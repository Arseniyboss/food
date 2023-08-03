import React from 'react';
import {
  OrderItemContainer,
  OrderItemHeader,
  OrderItemHeading,
  OrderItemTotalPrice,
  OrderItemDate,
  OrderItemFooter,
  Dot,
  OrderItemStatus,
} from './Styles';
import {Order} from '../../types/order';

const OrderItem = ({id, orderDate, isDelivered, totalPrice}: Order) => {
  return (
    <OrderItemContainer>
      <OrderItemHeader>
        <OrderItemHeading>Order {id}</OrderItemHeading>
        <OrderItemTotalPrice>${totalPrice}</OrderItemTotalPrice>
      </OrderItemHeader>
      <OrderItemDate>{orderDate}</OrderItemDate>
      <OrderItemFooter>
        <Dot isDelivered={isDelivered} />
        <OrderItemStatus isDelivered={isDelivered}>
          {isDelivered ? 'Order Delivered' : 'Food is on the way'}
        </OrderItemStatus>
      </OrderItemFooter>
    </OrderItemContainer>
  );
};

export default OrderItem;
