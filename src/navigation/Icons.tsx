import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {Sizes} from '../constants/styles/sizes';

type Props = {
  color: string;
};

const {tabIconSize} = Sizes;

export const HomeIcon = ({color}: Props) => {
  return <FontAwesome5 name="home" size={tabIconSize} color={color} />;
};

export const CartIcon = ({color}: Props) => {
  return <FontAwesome5 name="shopping-cart" size={tabIconSize} color={color} />;
};

export const HeartIcon = ({color}: Props) => {
  return <FontAwesome name="heart" size={tabIconSize} color={color} />;
};

export const OrderIcon = ({color}: Props) => {
  return <Feather name="package" size={27} color={color} />;
};

export const UserIcon = ({color}: Props) => {
  return <FontAwesome name="user" size={27} color={color} />;
};
