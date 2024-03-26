import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getLandings = createAsyncThunk(
  'landings/getLandings',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:3000/api/v1/landings',
      );
      const endData = response.data;
      return endData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  landingItems: [],
  error: '',
};
const landingsSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLandings.fulfilled, (state, action) => {
      state.landingItems = action.payload;
    });
    builder.addCase(getLandings.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default landingsSlice.reducer;