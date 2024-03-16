import {ImageSourcePropType} from 'react-native/types';

export type Food = {
  id: number;
  name: string;
  category: string;
  image: ImageSourcePropType;
  price: number;
};
