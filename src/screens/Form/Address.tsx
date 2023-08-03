import React from 'react';
import {Keyboard} from 'react-native';
import {NavigationProps} from '../../navigation/types';
import {useForm} from '../../hooks/useForm';
import {validationSchema} from '../../validation/schemas/addressSchema';
import {Button, TouchableOpacity} from 'react-native';
import {
  FormContainer,
  FormHeading,
  FormInput,
  FormError,
  ButtonWrapper,
} from '../../styles/Form';
import {LeftArrow} from '../../styles/Global';

const Address = ({navigation}: NavigationProps): JSX.Element => {
  const initialValues = {
    street: '',
    country: '',
    city: '',
    postalCode: '',
  };

  const onSubmit = () => {
    navigation.navigate('Cart', {screen: 'Payment'});
  };

  const {values, errors, handleChangeText, handlePress} = useForm({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <TouchableOpacity
        // prevents CartSummaryContainer from being pushed to the bottom after typing into an input and navigating back to the Cart Screen
        onPressIn={Keyboard.dismiss}
        onPress={() => {
          navigation.goBack();
        }}>
        <LeftArrow name="leftcircle" />
      </TouchableOpacity>
      <FormContainer>
        <FormHeading>Address</FormHeading>
        <FormInput
          value={values.street}
          onChangeText={value => handleChangeText('street', value)}
          placeholder="Street"
          textContentType="fullStreetAddress"
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.street}
        />
        {errors.street && <FormError>{errors.street}</FormError>}
        <FormInput
          value={values.country}
          onChangeText={value => handleChangeText('country', value)}
          placeholder="Country"
          textContentType="countryName"
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.country}
        />
        {errors.country && <FormError>{errors.country}</FormError>}
        <FormInput
          value={values.city}
          onChangeText={value => handleChangeText('city', value)}
          placeholder="City"
          textContentType="addressCity"
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.city}
        />
        {errors.city && <FormError>{errors.city}</FormError>}
        <FormInput
          value={values.postalCode}
          onChangeText={value => handleChangeText('postalCode', value)}
          placeholder="Postal Code"
          textContentType="postalCode"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.postalCode}
        />
        {errors.postalCode && <FormError>{errors.postalCode}</FormError>}
        <ButtonWrapper>
          <Button title="Continue" color="white" onPress={handlePress} />
        </ButtonWrapper>
      </FormContainer>
    </>
  );
};

export default Address;
