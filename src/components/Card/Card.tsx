// import {useNavigation} from '@react-navigation/native';
// import {Navigation} from '../../navigation/types';
import React from 'react';
import {useUserContext} from '../../contexts/UserContext';
import {Colors} from '../../constants/styles/colors';
import {Sizes} from '../../constants/styles/sizes';
import {
  CardContainer,
  CardImage,
  CardText,
  CardName,
  CardPrice,
  HeartIcon,
  IconWrapper,
} from './Styles';
import {Food} from '../../types/food';
import Icon from 'react-native-vector-icons/AntDesign';

type Screen = 'home' | 'favorites';
type Props = {
  item: Food;
  screen: Screen;
};

const Card = ({item, screen}: Props): JSX.Element => {
  // const navigation = useNavigation<Navigation>();

  // const handlePress = () => {
  //   navigation.navigate('Account', {screen: 'Login'});
  // };

  const {id, image, name, price} = item;

  const {favoriteFood, toggleFavorites, addToCart} = useUserContext();

  const isFavorite = favoriteFood.find(favorite => favorite.id === id);
  return (
    <CardContainer>
      <CardImage source={image} alt={name} resizeMode="contain" />
      <CardText>
        <CardName>{name}</CardName>
        <CardPrice>${price}</CardPrice>
      </CardText>
      {screen === 'home' && (
        <>
          <HeartIcon
            name={isFavorite ? 'heart' : 'hearto'}
            color={Colors.orange}
            suppressHighlighting={true}
            onPress={() => toggleFavorites(item)}
          />
          <IconWrapper onPress={() => addToCart(item)}>
            <Icon name="plus" size={Sizes.iconSize} color={Colors.grey} />
          </IconWrapper>
        </>
      )}
      {screen === 'favorites' && (
        <HeartIcon
          name="heart"
          color={Colors.orange}
          suppressHighlighting={true}
          onPress={() => toggleFavorites(item)}
        />
      )}
    </CardContainer>
  );
};

export default Card;
