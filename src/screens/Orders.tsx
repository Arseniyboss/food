import React from 'react';
import {useUserContext} from '../contexts/UserContext';
import {FlatList} from 'react-native';
import {Sizes} from '../constants/styles/sizes';
import {Container, Heading, Message} from '../styles/Global';
import OrderItem from '../components/OrderItem/OrderItem';

const Orders = (): JSX.Element => {
  const {orders} = useUserContext();
  return orders.length === 0 ? (
    <Container>
      <Message>No Orders</Message>
    </Container>
  ) : (
    <Container>
      <Heading>My Orders</Heading>
      <FlatList
        data={orders}
        renderItem={({item}) => <OrderItem {...item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: Sizes.listPadding}}
      />
    </Container>
  );
};

export default Orders;
