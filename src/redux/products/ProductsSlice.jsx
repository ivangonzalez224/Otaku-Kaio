import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://otakuside.onrender.com/api/v1/products',
      );
      const endData = response.data;
      return endData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  productItems: [],
  error: '',
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productItems = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default productsSlice.reducer;