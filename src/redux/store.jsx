import { configureStore } from '@reduxjs/toolkit';
import animesReducer from './animes/AnimesSlice';

const store = configureStore({
  reducer: {
    animes: animesReducer,
  },
});

export default store;