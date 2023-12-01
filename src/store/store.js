import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      game: gameReducer,
    },
  });
};
