import React from 'react';
import {Food} from '../../types/food';
import {useUserContext} from '../../contexts/UserContext';
import {Colors} from '../../constants/styles/colors';
import {Sizes} from '../../constants/styles/sizes';
import {
  CartItemContainer,
  CartItemImage,
  CartItemText,
  CartItemName,
  CartItemPrice,
  TrashIconWrapper,
  QuantityWrapper,
  QuantityIconWrapper,
  Quantity,
} from './Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  item: Food;
  quantity: number;
};

const {iconSize} = Sizes;

const CartItem = ({item, quantity}: Props) => {
  const {id, image, name, price} = item;
  const {removeFromCart, increaseQuantity, decreaseQuantity} = useUserContext();
  return (
    <CartItemContainer>
      <CartItemImage source={image} alt={name} resizeMode="contain" />
      <CartItemText>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>${price}</CartItemPrice>
      </CartItemText>
      <TrashIconWrapper onPress={() => removeFromCart(id)}>
        <FontAwesome5
          name="trash-alt"
          size={iconSize}
          color={Colors.grey}
          suppressHighlighting={true}
        />
      </TrashIconWrapper>
      <QuantityWrapper>
        <QuantityIconWrapper
          onPress={() => decreaseQuantity(item)}
          disabled={quantity <= 1}>
          <AntDesign
            name="minus"
            size={iconSize}
            color={Colors.grey}
            suppressHighlighting={true}
          />
        </QuantityIconWrapper>
        <Quantity>{quantity}</Quantity>
        <QuantityIconWrapper
          onPress={() => increaseQuantity(item)}
          disabled={quantity >= 10}>
          <AntDesign
            name="plus"
            size={iconSize}
            color={Colors.grey}
            suppressHighlighting={true}
          />
        </QuantityIconWrapper>
      </QuantityWrapper>
    </CartItemContainer>
  );
};

export default CartItem;
