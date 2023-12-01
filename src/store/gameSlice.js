import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  count: 1337,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = gameSlice.actions;

// Export reducer
export default gameSlice.reducer;
