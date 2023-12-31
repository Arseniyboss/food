import React from 'react';
import {NavigationProps} from '../../navigation/types';
import {useForm} from '../../hooks/useForm';
import {Values, validationSchema} from '../../validation/schemas/loginSchema';
import {Text, Button, TouchableOpacity} from 'react-native';
import {
  FormContainer,
  FormHeading,
  FormInput,
  FormError,
  ButtonWrapper,
  FormFooter,
  FormLink,
} from '../../styles/Form';

const Login = ({navigation}: NavigationProps): JSX.Element => {
  const initialValues: Values = {
    email: '',
    password: '',
  };

  const onSubmit = () => {
    setValues(initialValues);
    navigation.navigate('Home');
  };

  const {values, errors, setValues, handleChangeText, handlePress} = useForm({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <FormContainer>
      <FormHeading>Sign In</FormHeading>
      <FormInput
        value={values.email}
        onChangeText={value => handleChangeText('email', value)}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCorrect={false}
        error={errors.email}
      />
      {errors.email && <FormError>{errors.email}</FormError>}
      <FormInput
        value={values.password}
        onChangeText={value => handleChangeText('password', value)}
        placeholder="Password"
        textContentType="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        error={errors.password}
      />
      {errors.password && <FormError>{errors.password}</FormError>}
      <ButtonWrapper>
        <Button title="Sign In" color="white" onPress={handlePress} />
      </ButtonWrapper>
      <FormFooter>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Account', {screen: 'Register'});
          }}>
          <FormLink>Sign Up</FormLink>
        </TouchableOpacity>
      </FormFooter>
    </FormContainer>
  );
};

export default Login;
