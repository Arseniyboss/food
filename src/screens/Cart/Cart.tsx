import React from 'react';
import {useUserContext} from '../../contexts/UserContext';
import {FlatList, Button} from 'react-native';
import {Container, Heading, Message, ButtonWrapper} from '../../styles/Global';
import {CartSummaryContainer, TotalPriceContainer, TotalPrice} from './Styles';
import {Sizes} from '../../constants/styles/sizes';
import {NavigationProps} from '../../navigation/types';
import CartItem from '../../components/CartItem/CartItem';

const Cart = ({navigation}: NavigationProps): JSX.Element => {
  const {cartItems, totalPrice} = useUserContext();
  return cartItems.length === 0 ? (
    <Container>
      <Message>Your cart is empty</Message>
    </Container>
  ) : (
    <Container>
      <Heading>My Cart</Heading>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <CartItem item={item} quantity={item.quantity} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: Sizes.listPadding}}
      />
      <CartSummaryContainer>
        <TotalPriceContainer>
          <TotalPrice>Total:</TotalPrice>
          <TotalPrice>${totalPrice}</TotalPrice>
        </TotalPriceContainer>
        <ButtonWrapper>
          <Button
            title="Checkout"
            color="white"
            onPress={() => {
              navigation.navigate('Cart', {screen: 'ShippingAddress'});
            }}
          />
        </ButtonWrapper>
      </CartSummaryContainer>
    </Container>
  );
};

export default Cart;
