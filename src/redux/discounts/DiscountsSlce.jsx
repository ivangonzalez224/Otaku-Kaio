import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDiscounts = createAsyncThunk(
  'discounts/getDiscounts',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:3000/api/v1/discounts',
      );
      const endData = response.data;
      return endData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  discountItems: [],
  error: '',
};
const discountsSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDiscounts.fulfilled, (state, action) => {
      state.discountItems = action.payload;
    });
    builder.addCase(getDiscounts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default discountsSlice.reducer;