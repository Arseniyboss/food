import React from 'react';
import {useUserContext} from '../contexts/UserContext';
import {FlatList} from 'react-native';
import {Heading, Message, Container, ListContainer} from '../styles/Global';
import {Sizes} from '../constants/styles/sizes';
import Card from '../components/Card/Card';

const Cart = (): JSX.Element => {
  const {favoriteFood} = useUserContext();
  return favoriteFood.length === 0 ? (
    <Container>
      <Message>No favorite food</Message>
    </Container>
  ) : (
    <Container>
      <Heading>My Favorites</Heading>
      <ListContainer>
        <FlatList
          data={favoriteFood}
          renderItem={({item}) => <Card screen="favorites" item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: Sizes.listPadding}}
        />
      </ListContainer>
    </Container>
  );
};

export default Cart;
