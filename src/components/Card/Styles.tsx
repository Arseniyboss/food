import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/styles/colors';
import {Sizes} from '../../constants/styles/sizes';

export const CardContainer = styled.View`
  width: 150px;
  margin: 10px;
  border-radius: 10px;
  background: white;
  box-shadow: ${Colors.boxShadow};
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardText = styled.View`
  padding: 13px;
`;

export const CardName = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CardPrice = styled.Text`
  font-weight: bold;
`;

export const HeartIcon = styled(AntDesign)`
  position: absolute;
  right: 7px;
  top: 7px;
  font-size: 20px;
  color: ${Colors.orange};
`;

export const IconWrapper = styled.TouchableOpacity`
  flex-direction: row;
  position: absolute;
  right: 7px;
  bottom: 7px;
  padding: 3px;
  border-radius: ${Sizes.borderRadius};
  background: ${Colors.lightgrey};
`;
