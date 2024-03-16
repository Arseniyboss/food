import React from 'react';
import {NavigationProps} from '../../navigation/types';
import {useForm} from '../../hooks/useForm';
import {registerSchema} from '../../validation/schemas/registerSchema';
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

const Register = ({navigation}: NavigationProps): JSX.Element => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const onSubmit = () => {
    setValues(initialValues);
    // reset AuthStack to its initial state (Login Screen) and navigate to Home Screen
    navigation.reset({routes: [{name: 'Home'}]});
  };

  const {values, errors, setValues, handleChangeText, handlePress} = useForm({
    initialValues,
    onSubmit,
    validationSchema: registerSchema,
  });
  return (
    <FormContainer>
      <FormHeading>Sign Up</FormHeading>
      <FormInput
        value={values.username}
        onChangeText={value => handleChangeText('username', value)}
        placeholder="Username"
        textContentType="username"
        autoCapitalize="none"
        autoCorrect={false}
        error={errors.username}
      />
      {errors.username && <FormError>{errors.username}</FormError>}
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
        <Button title="Sign Up" color="white" onPress={handlePress} />
      </ButtonWrapper>
      <FormFooter>
        <Text>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FormLink>Sign In</FormLink>
        </TouchableOpacity>
      </FormFooter>
    </FormContainer>
  );
};

export default Register;
