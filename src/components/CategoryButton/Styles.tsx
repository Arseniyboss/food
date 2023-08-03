import styled from 'styled-components/native';
import {Colors} from '../../constants/styles/colors';

type Props = {
  isActive: boolean;
};

export const ButtonWrapper = styled.View<Props>`
  margin: 0 10px;
  padding: 0 10px;
  border-radius: 20px;
  background: ${({isActive}) => (isActive ? Colors.orange : Colors.lightgrey)};
`;
