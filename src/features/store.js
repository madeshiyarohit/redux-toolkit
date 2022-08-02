import { configureStore } from '@reduxjs/toolkit';

import moviesreducer from './movies/movieSlide';

export const store = configureStore({
  reducer: {
    movies: moviesreducer,
  },
});
