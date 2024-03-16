import React, {
  useState,
  useCallback,
  useContext,
  createContext,
  PropsWithChildren,
} from 'react';
import {Food} from '../types/food';
import {CartItem, Order} from '../types/order';

type UserContextState = {
  favoriteFood: Food[];
  cartItems: CartItem[];
  totalPrice: string;
  orders: Order[];
  increaseQuantity: (item: Food) => void;
  decreaseQuantity: (item: Food) => void;
  resetQuantity: (item: Food) => void;
  addToCart: (item: Food) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  toggleFavorites: (item: Food) => void;
  addOrder: (order: Order) => void;
};

const initialValues: UserContextState = {
  favoriteFood: [],
  cartItems: [],
  totalPrice: '',
  orders: [],
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  resetQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  toggleFavorites: () => {},
  addOrder: () => {},
};

const UserContext = createContext(initialValues);

export const UserContextProvider = ({children}: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favoriteFood, setFavoriteFood] = useState<Food[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const increaseQuantity = (item: Food) => {
    const newCartItems = cartItems.map((cartItem: CartItem) => {
      if (cartItem.id === item.id && cartItem.quantity < 10) {
        return {...cartItem, quantity: cartItem.quantity + 1};
      }
      return cartItem;
    });
    setCartItems(newCartItems);
  };

  const decreaseQuantity = (item: Food) => {
    const newCartItems = cartItems.map((cartItem: CartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return {...cartItem, quantity: cartItem.quantity - 1};
      }
      return cartItem;
    });
    setCartItems(newCartItems);
  };

  const resetQuantity = (item: Food) => {
    const newCartItems = cartItems.map((cartItem: CartItem) => {
      if (cartItem.id === item.id) {
        return {...cartItem, quantity: 0};
      }
      return cartItem;
    });
    setCartItems(newCartItems);
  };

  const addToCart = (item: Food) => {
    const itemInTheCart = cartItems.find(cartItem => cartItem.id === item.id);
    if (itemInTheCart) {
      increaseQuantity(item);
    } else {
      setCartItems([...cartItems, {...item, quantity: 1}]);
    }
  };

  const removeFromCart = useCallback(
    (id: number) => {
      setCartItems(cartItems.filter(item => item.id !== id));
    },
    [cartItems],
  );

  const clearCart = () => {
    setCartItems([]);
  };

  const addToFavorites = (item: Food) => {
    setFavoriteFood([...favoriteFood, item]);
  };

  const removeFromFavorites = (id: number) => {
    setFavoriteFood(favoriteFood.filter(item => item.id !== id));
  };

  const toggleFavorites = (item: Food) => {
    const isFavorite = favoriteFood.find(favorite => favorite.id === item.id);
    if (isFavorite) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  const addOrder = (order: Order) => {
    setOrders([...orders, order]);
  };

  const value = {
    favoriteFood,
    cartItems,
    totalPrice,
    orders,
    increaseQuantity,
    decreaseQuantity,
    resetQuantity,
    addToCart,
    removeFromCart,
    clearCart,
    toggleFavorites,
    addOrder,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
