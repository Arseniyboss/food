/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {FoodContextProvider} from './src/contexts/FoodContext';
import {UserContextProvider} from './src/contexts/UserContext';

AppRegistry.registerComponent(appName, () => props => (
  <FoodContextProvider>
    <UserContextProvider>
      <App {...props} />
    </UserContextProvider>
  </FoodContextProvider>
));
