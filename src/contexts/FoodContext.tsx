import React, {useCallback} from 'react';
import {
  useState,
  useMemo,
  useContext,
  createContext,
  PropsWithChildren,
} from 'react';
import {Food} from '../types/food';
import food from '../data/food';

type FoodContextState = {
  filteredFood: Food[];
  categories: string[];
  activeCategory: string;
  name: string;
  setName: (name: string) => void;
  setActiveCategory: (name: string) => void;
};

const initialValues: FoodContextState = {
  filteredFood: [],
  categories: [],
  activeCategory: '',
  name: '',
  setName: () => {},
  setActiveCategory: () => {},
};

const FoodContext = createContext(initialValues);

export const FoodContextProvider = ({children}: PropsWithChildren) => {
  const [name, setName] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('');

  const filterByName = useCallback(
    (item: Food) => {
      return item.name.toLowerCase().includes(name.toLowerCase().trim());
    },
    [name],
  );

  const filterByCategory = useCallback(
    (item: Food) => {
      return item.category.startsWith(activeCategory);
    },
    [activeCategory],
  );

  const filteredFood = useMemo((): Food[] => {
    return food.filter(item => filterByName(item) && filterByCategory(item));
  }, [filterByName, filterByCategory]);

  const categories = [...new Set(food.map((item: Food) => item.category))];

  const value = {
    filteredFood,
    categories,
    activeCategory,
    name,
    setName,
    setActiveCategory,
  };
  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

export const useFoodContext = () => {
  return useContext(FoodContext);
};
