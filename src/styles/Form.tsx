import styled from 'styled-components/native';
import {Heading} from './Global';
import {Colors} from '../constants/styles/colors';
import {Sizes} from '../constants/styles/sizes';

type InputProps = {
  error?: string;
};

export const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0 auto;
  width: ${Sizes.width};
`;

export const FormHeading = styled(Heading)`
  font-size: 33px;
`;

export const FormRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FormColumn = styled.View`
  width: 48%;
`;

export const FormInput = styled.TextInput<InputProps>`
  margin: 10px 0;
  padding: 13px;
  border-radius: ${Sizes.borderRadius};
  border: ${({error}) => (error ? '2px solid red' : '1px solid lightgrey')};
`;

export const FormError = styled.Text`
  color: red;
  font-weight: bold;
`;

export const ButtonWrapper = styled.View`
  margin: ${Sizes.marginVertical} 0;
  padding: 5px 10px;
  border-radius: ${Sizes.borderRadius};
  background: ${Colors.orange};
`;

export const FormFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 7px;
`;

export const FormLink = styled.Text`
  color: ${Colors.orange};
`;
