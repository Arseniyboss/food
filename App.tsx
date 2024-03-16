import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from './src/navigation/types';
import {theme} from './src/navigation/theme';
import {screenOptions} from './src/navigation/options/screenOptions';
import {options} from './src/navigation/options/options';
import Home from './src/screens/Home/Home';
import Favorites from './src/screens/Favorites';
import Orders from './src/screens/Orders';
import AuthStackNavigator from './src/navigation/stackNavigators/AuthStackNavigator';
import CheckoutStackNavigator from './src/navigation/stackNavigators/CheckoutStackNavigator';

const {Navigator, Screen} = createBottomTabNavigator<TabParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer theme={theme}>
      <Navigator screenOptions={screenOptions}>
        <Screen name="Home" component={Home} options={options.home} />
        <Screen
          name="Cart"
          component={CheckoutStackNavigator}
          options={options.cart}
        />
        <Screen
          name="Favorites"
          component={Favorites}
          options={options.favorites}
        />
        <Screen name="Orders" component={Orders} options={options.orders} />
        <Screen
          name="Account"
          component={AuthStackNavigator}
          options={options.account}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
