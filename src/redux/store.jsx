import { configureStore } from '@reduxjs/toolkit';
import landingsReducer from './landings/LandingsSlice';
import productsReducer from './products/ProductsSlice';
import userReducer from './user/UserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    landings: landingsReducer,
    products: productsReducer,
  },
});

export default store;