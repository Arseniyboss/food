import React, {useLayoutEffect} from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CheckoutStackParamList, NavigationProps, RouteProps} from '../types';
import Cart from '../../screens/Cart/Cart';
import Address from '../../screens/Form/Address';
import Payment from '../../screens/Form/Payment';
import PaymentSuccess from '../../screens/PaymentSuccess/PaymentSuccess';

const {Navigator, Screen} =
  createNativeStackNavigator<CheckoutStackParamList>();

type Props = NavigationProps & RouteProps;

const CheckoutStackNavigator = ({navigation, route}: Props) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName && routeName !== 'CartScreen') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="CartScreen" component={Cart} />
      <Screen name="ShippingAddress" component={Address} />
      <Screen name="Payment" component={Payment} />
      <Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Navigator>
  );
};

export default CheckoutStackNavigator;
