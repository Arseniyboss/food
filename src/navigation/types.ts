import {
  RouteProp,
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type CheckoutStackParamList = {
  CartScreen: undefined;
  ShippingAddress: undefined;
  Payment: undefined;
  PaymentSuccess: undefined;
};

export type TabParamList = {
  Home: undefined;
  Cart: NavigatorScreenParams<CheckoutStackParamList>;
  Favorites: undefined;
  Orders: undefined;
  Account: NavigatorScreenParams<AuthStackParamList>;
};

export type Navigation = NavigationProp<TabParamList>;

export type Route = RouteProp<TabParamList>;

export type NavigationProps = {
  navigation: Navigation;
};

export type RouteProps = {
  route: Route;
};
