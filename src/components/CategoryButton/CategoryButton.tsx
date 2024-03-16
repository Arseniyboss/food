import React from 'react';
import {useFoodContext} from '../../contexts/FoodContext';
import {Button} from 'react-native';
import {Colors} from '../../constants/styles/colors';
import {ButtonWrapper} from './Styles';

type Props = {
  category?: string;
};

const CategoryButton = ({category = ''}: Props): JSX.Element => {
  const {activeCategory, setActiveCategory} = useFoodContext();
  const isActive = category === activeCategory;
  return (
    <ButtonWrapper isActive={isActive}>
      <Button
        color={isActive ? 'white' : Colors.grey}
        title={category || 'All'}
        onPress={() => setActiveCategory(category)}
      />
    </ButtonWrapper>
  );
};

export default CategoryButton;
