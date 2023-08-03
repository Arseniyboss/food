import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../types';
import {screenOptions} from '../options/screenOptions';
import Login from '../../screens/Form/Login';
import Register from '../../screens/Form/Register';

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};

export default AuthStackNavigator;
