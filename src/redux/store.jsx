import { configureStore } from '@reduxjs/toolkit';
import landingsReducer from './landings/LandingsSlice';
import productsReducer from './products/ProductsSlice';

const store = configureStore({
  reducer: {
    landings: landingsReducer,
    products: productsReducer,
  },
});

export default store;