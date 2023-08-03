import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {Container, ListContainer} from '../../styles/Global';
import {CategoryHeading, ButtonContainer, SearchFailText} from './Styles';
import {useFoodContext} from '../../contexts/FoodContext';
import {Sizes} from '../../constants/styles/sizes';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';

const Home = (): JSX.Element => {
  const {filteredFood, categories} = useFoodContext();
  return (
    <Container>
      <Search />
      <CategoryHeading>Categories</CategoryHeading>
      <ButtonContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CategoryButton />
          {categories.map((category: string, index: number) => (
            <CategoryButton key={index} category={category} />
          ))}
        </ScrollView>
      </ButtonContainer>
      {filteredFood.length === 0 && (
        <SearchFailText>No food matched your search criteria</SearchFailText>
      )}
      <ListContainer>
        <FlatList
          data={filteredFood}
          renderItem={({item}) => <Card screen="home" item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: Sizes.listPadding}}
        />
      </ListContainer>
    </Container>
  );
};

export default Home;
