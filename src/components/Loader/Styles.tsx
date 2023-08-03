import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const LoaderWrapper = styled(Animated.View)`
  height: 150px;
  width: 150px;
  border-radius: 80px;
  border-width: 10px;
  background: lime;
  border-top-color: limegreen;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
`;

export const LoaderComponent = styled.View`
  height: 130px;
  width: 130px;
  border-radius: 80px;
  background: white;
`;
