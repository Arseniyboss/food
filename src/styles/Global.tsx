import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../constants/styles/colors';
import {Sizes} from '../constants/styles/sizes';

export const Container = styled.View`
  flex: 1;
  padding-top: 55px;
`;

export const ListContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.View`
  width: 340px;
  margin: 10px auto;
  border-radius: 10px;
  background: white;
  box-shadow: ${Colors.boxShadow};
`;

export const Heading = styled.Text`
  color: ${Colors.orange};
  font-size: 27px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

export const Message = styled.Text`
  background: #d2ebf5;
  color: #10516c;
  font-size: 20px;
  padding: 15px;
`;

export const ButtonWrapper = styled.View`
  margin: 0 35px;
  margin-bottom: 30px;
  padding: 10px;
  background: ${Colors.orange};
  border-radius: ${Sizes.borderRadius};
`;

export const LeftArrow = styled(Icon)`
  font-size: 25px;
  margin-top: 55px;
  margin-left: 28px;
  color: ${Colors.orange};
`;
