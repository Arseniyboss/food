import styled from 'styled-components/native';
import {Colors} from '../../constants/styles/colors';
import {CardContainer} from '../../styles/Global';

type Props = {
  isDelivered: boolean;
};

export const OrderItemContainer = styled(CardContainer)`
  padding: 15px;
`;

export const OrderItemFooter = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const OrderItemHeader = styled(OrderItemFooter)`
  justify-content: space-between;
`;

export const OrderItemHeading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.orange};
`;

export const OrderItemTotalPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: ${Colors.orange};
`;

export const OrderItemDate = styled.Text`
  color: grey;
  margin: 5px 0;
  font-size: 16px;
`;

export const Dot = styled.View<Props>`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${({isDelivered}) => (isDelivered ? '#24b060' : 'orange')};
`;

export const OrderItemStatus = styled.Text<Props>`
  font-size: 16px;
  color: ${({isDelivered}) => (isDelivered ? '#24b060' : 'orange')};
`;
