import styled from 'styled-components/native';
import {Colors} from '../../constants/styles/colors';
import {Sizes} from '../../constants/styles/sizes';
import {CardContainer} from '../../styles/Global';

export const CartItemContainer = styled(CardContainer)`
  flex-direction: row;
  align-items: center;
`;

export const CartItemImage = styled.Image`
  width: 30%;
  height: 110px;
`;

export const CartItemText = styled.View`
  margin-left: 5px;
  width: 50%;
`;

export const CartItemName = styled.Text`
  font-size: 18px;
  margin-bottom: 3px;
`;

export const CartItemPrice = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const TrashIconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const QuantityWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 3px;
`;

export const QuantityIconWrapper = styled.TouchableOpacity`
  padding: 3px;
  background: ${Colors.lightgrey};
  border-radius: ${Sizes.borderRadius};
  opacity: ${({disabled}) => (disabled ? 0.3 : 1)};
`;

export const Quantity = styled.Text`
  margin: 0 7px;
`;
