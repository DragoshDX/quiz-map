import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  gameState: {
    won: false,
    started: false,
    paused: false,
  },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameState.started = true;
    },
  },
});

export const { startGame } = gameSlice.actions;

export default gameSlice.reducer;
