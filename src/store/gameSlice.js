import { units } from '@/data';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  gameState: {
    won: false,
    started: false,
  },
  guesses: [],
  choices: [],
  correctAnswer: null,
};

const getRandomEntry = (units, state) => {
  let randomUnit = units[Math.floor(Math.random() * units.length)];

  if (
    state.guesses.includes(randomUnit.id) ||
    (state.correctAnswer !== null && state.correctAnswer.id === randomUnit.id)
  ) {
    return getRandomEntry(units, state);
  }

  return randomUnit;
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameState.started = true;
    },
    startRound: (state) => {
      const randomUnit = getRandomEntry(units, state);

      state.correctAnswer = randomUnit;
      state.choices.push(randomUnit);

      Array(3)
        .fill('_')
        .forEach(() => {
          const randomUnit = getRandomEntry(units, state);

          state.choices.push(randomUnit);
        });
    },
    tryGuess: (state, action) => {
      const guessedId = action.payload.id;

      if (state.correctAnswer.id === guessedId) {
        state.guesses.push(guessedId);

        const randomUnit = getRandomEntry(units, state);
        state.choices.length = 0;
        state.correctAnswer = randomUnit;
        state.choices.push(randomUnit);

        Array(3)
          .fill('_')
          .forEach(() => {
            const randomUnit = getRandomEntry(units, state);

            state.choices.push(randomUnit);
          });
      }

      state.choices.length = 0;
      state.choices.push(state.correctAnswer);
      Array(3)
        .fill('_')
        .forEach(() => {
          const randomUnit = getRandomEntry(units, state);

          state.choices.push(randomUnit);
        });
    },
  },
});

export const { startGame, startRound, tryGuess } = gameSlice.actions;

export default gameSlice.reducer;
