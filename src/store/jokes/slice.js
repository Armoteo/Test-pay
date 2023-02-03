import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  joke: undefined,
  error: undefined,
  isLoading: false
};

export const fetchJokeAsync = createAsyncThunk(
  'jokes/fetchJoke',
  async (test, { rejectWithValue }) => {
    const jokeResponse = await fetch('https://api.chucknorris.io/jokes/random');
    const { value, error } = await jokeResponse.json();
    return jokeResponse.ok ? value : rejectWithValue(error);
  }
);

export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokeAsync.pending, (state) => {
        state.isLoading = true;
        state.joke = undefined;
        state.error = undefined;
      })
      .addCase(fetchJokeAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.joke = action.payload;
      })
      .addCase(fetchJokeAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default jokesSlice.reducer;
