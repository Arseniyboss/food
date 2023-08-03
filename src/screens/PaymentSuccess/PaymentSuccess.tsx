import React from 'react';
import image from '../../images/success.png';
import {NavigationProps} from '../../navigation/types';
import {Button} from 'react-native';
import {CenterContainer, ButtonWrapper} from '../../styles/Global';
import {SuccessImage, SuccessHeading, SuccessText} from './Styles';

const PaymentSuccess = ({navigation}: NavigationProps) => {
  return (
    <>
      <CenterContainer>
        <SuccessImage source={image} resizeMode="contain" />
        <SuccessHeading>
          Your order has been successfully placed!
        </SuccessHeading>
        <SuccessText>
          Within minutes you will receive a notification with the receipt of
          your purchase and track every step of your order
        </SuccessText>
      </CenterContainer>
      <ButtonWrapper>
        <Button
          title="Done"
          color="white"
          onPress={() => navigation.reset({routes: [{name: 'Orders'}]})}
        />
      </ButtonWrapper>
    </>
  );
};

export default PaymentSuccess;
