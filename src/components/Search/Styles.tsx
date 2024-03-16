import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants/styles/colors';
import {Sizes} from '../../constants/styles/sizes';

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  margin-bottom: ${Sizes.marginVertical};
`;

export const SearchInput = styled.TextInput`
  width: ${Sizes.width};
  padding: 13px 40px;
  border-radius: ${Sizes.borderRadius};
  background: ${Colors.lightgrey};
`;

const Icon = styled(Ionicons)`
  font-size: 20px;
  position: absolute;
  color: grey;
`;

export const SearchIcon = styled(Icon)`
  left: 10px;
`;

export const CloseIconContainer = styled.TouchableOpacity`
  justify-content: center;
`;

export const CloseIcon = styled(Icon)`
  right: 10px;
`;
