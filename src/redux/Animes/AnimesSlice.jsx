import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAnimes = createAsyncThunk(
  'Animes/getAnimes',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        ' ',
      );
      const endData = response.data.data;
      return endData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  animeItems: [],
  error: '',
};
const animesSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnimes.fulfilled, (state, action) => {
      state.animeItems = action.payload;
    });
    builder.addCase(getAnimes.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default animesSlice.reducer;