import React from 'react';
import {useFoodContext} from '../../contexts/FoodContext';
import {
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  CloseIconContainer,
  CloseIcon,
} from './Styles';

const Search = (): JSX.Element => {
  const {name, setName} = useFoodContext();
  return (
    <SearchInputContainer>
      <SearchInput
        placeholder="Search food"
        value={name}
        onChangeText={setName}
      />
      <SearchIcon name="search-outline" suppressHighlighting={true} />
      <CloseIconContainer onPress={() => setName('')}>
        <CloseIcon name="close" suppressHighlighting={true} />
      </CloseIconContainer>
    </SearchInputContainer>
  );
};

export default Search;
