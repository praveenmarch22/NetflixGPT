import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    tvSeries: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTvSeries: (state, action) => {
      state.tvSeries = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopratedMovies,
  addUpcomingMovies,
  addTvSeries,
} = moviesSlice.actions;

export default moviesSlice.reducer;
