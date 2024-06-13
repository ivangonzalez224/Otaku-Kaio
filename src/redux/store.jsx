import { configureStore } from '@reduxjs/toolkit';
import landingsReducer from './landings/LandingsSlice';
import productsReducer from './products/ProductsSlice';
import discountsReducer from './products/ProductsSlice';
import userReducer from './user/UserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    landings: landingsReducer,
    products: productsReducer,
    discounts: discountsReducer,
  },
});

export default store;