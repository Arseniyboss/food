import React, {useState} from 'react';
import {useTimeout} from '../../hooks/useTimeout';
import {useForm} from '../../hooks/useForm';
import {usePaymentForm} from '../../hooks/usePaymentForm';
import {useUserContext} from '../../contexts/UserContext';
import {Button, TouchableOpacity} from 'react-native';
import {NavigationProps} from '../../navigation/types';
import {paymentSchema} from '../../validation/schemas/paymentSchema';
import {LeftArrow} from '../../styles/Global';
import {
  FormContainer,
  FormHeading,
  FormRow,
  FormColumn,
  FormInput,
  FormError,
  ButtonWrapper,
} from '../../styles/Form';
import Loader from '../../components/Loader/Loader';
import {generateId} from '../../helpers/generateId';
import {getCurrentDate} from '../../helpers/getCurrentDate';

const ShippingAddress = ({navigation}: NavigationProps): JSX.Element => {
  const [success, setSuccess] = useState(false);

  const initialValues = {
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
  };

  const onSubmit = () => {
    setSuccess(true);
  };

  const {values, errors, handleChangeText, handlePress} = useForm({
    initialValues,
    onSubmit,
    validationSchema: paymentSchema,
  });

  const {handleKeyPress, formatCardNumber, formatExpiryDate} = usePaymentForm();

  const {cartItems, totalPrice, clearCart, addOrder} = useUserContext();

  const order = {
    id: generateId(),
    orderDate: getCurrentDate(),
    orderItems: cartItems,
    isDelivered: false,
    totalPrice,
  };

  useTimeout(
    () => {
      if (success) {
        addOrder(order);
        clearCart();
        navigation.navigate('Cart', {screen: 'PaymentSuccess'});
      }
    },
    5000,
    [success, navigation],
  );

  return success ? (
    <Loader />
  ) : (
    <>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <LeftArrow name="leftcircle" />
      </TouchableOpacity>
      <FormContainer>
        <FormHeading>Payment Details</FormHeading>
        <FormInput
          value={values.cardNumber}
          onChangeText={value =>
            handleChangeText('cardNumber', formatCardNumber(value))
          }
          onKeyPress={handleKeyPress}
          placeholder="Card Number"
          textContentType="creditCardNumber"
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.cardNumber}
          maxLength={19}
        />
        {errors.cardNumber && <FormError>{errors.cardNumber}</FormError>}
        <FormInput
          value={values.cardholderName}
          onChangeText={value => handleChangeText('cardholderName', value)}
          placeholder="Cardholder Name"
          textContentType="name"
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.cardholderName}
        />
        {errors.cardholderName && (
          <FormError>{errors.cardholderName}</FormError>
        )}
        <FormRow>
          <FormColumn>
            <FormInput
              value={values.expiryDate}
              onChangeText={value =>
                handleChangeText('expiryDate', formatExpiryDate(value))
              }
              onKeyPress={handleKeyPress}
              placeholder="Expiry Date"
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.expiryDate}
            />
            {errors.expiryDate && <FormError>{errors.expiryDate}</FormError>}
          </FormColumn>
          <FormColumn>
            <FormInput
              value={values.cvv}
              onChangeText={value => handleChangeText('cvv', value)}
              placeholder="CVV"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.cvv}
              maxLength={4}
            />
            {errors.cvv && <FormError>{errors.cvv}</FormError>}
          </FormColumn>
        </FormRow>
        <ButtonWrapper>
          <Button title="Pay" color="white" onPress={handlePress} />
        </ButtonWrapper>
      </FormContainer>
    </>
  );
};

export default ShippingAddress;
