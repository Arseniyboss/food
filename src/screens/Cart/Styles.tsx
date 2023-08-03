import styled from 'styled-components/native';

export const CartSummaryContainer = styled.View`
  border-top-width: 1px;
  border-top-color: lightgrey;
`;

export const TotalPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 18px 35px;
`;

export const TotalPrice = styled.Text`
  font-size: 23px;
  font-weight: bold;
`;
