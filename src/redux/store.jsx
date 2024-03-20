import { configureStore } from '@reduxjs/toolkit';
import animesReducer from './animes/AnimesSlice';
import productsReducer from './products/ProductsSlice';

const store = configureStore({
  reducer: {
    animes: animesReducer,
    products: productsReducer,
  },
});

export default store;