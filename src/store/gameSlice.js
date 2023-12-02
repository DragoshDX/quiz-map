import { units } from '@/data';
import { createSlice } from '@reduxjs/toolkit';

const unitsLength = units.length;

export const initialState = {
  gameState: {
    started: false,
  },
  guesses: [],
  choices: [],
  correctAnswer: null,
};

const getRandomEntry = (units, state) => {
  const randomIndex = Math.floor(Math.random() * units.length);
  let randomUnit = units[randomIndex];

  if (
    state.guesses.includes(randomUnit.id) ||
    (state.correctAnswer !== null && state.correctAnswer.id === randomUnit.id)
  ) {
    return getRandomEntry(units, state);
  }

  units.splice(randomIndex, 1);

  return randomUnit;
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameState.started = true;
      state.correctAnswer = null;
      state.guesses.length = 0;
    },
    startRound: (state) => {
      const proxyUnits = units.slice();
      const randomUnit = getRandomEntry(proxyUnits, state);

      const newState = {
        ...state,
        correctAnswer: randomUnit,
        choices: [
          randomUnit,
          ...Array(3)
            .fill('')
            .map(() => {
              const randomUnit = getRandomEntry(proxyUnits, state);

              return randomUnit;
            }),
        ],
      };

      return newState;
    },
    tryGuess: (state, action) => {
      const guessedId = action.payload.id;
      const proxyUnits = units.slice();
      const newState = {
        ...state,
        guesses:
          state.correctAnswer.id === guessedId
            ? [...state.guesses, guessedId]
            : state.guesses,
      };

      const arrayLengthDiff = unitsLength - newState.guesses.length;

      newState.choices = Array(arrayLengthDiff <= 4 ? arrayLengthDiff : 3)
        .fill('')
        .map(() => {
          const randomUnit = getRandomEntry(proxyUnits, newState);

          return randomUnit;
        });

      if (state.correctAnswer.id === guessedId && arrayLengthDiff > 4) {
        newState.correctAnswer = getRandomEntry(proxyUnits, newState);
      }

      if (arrayLengthDiff > 4) {
        newState.choices.push(newState.correctAnswer);
      } else {
        newState.correctAnswer =
          newState.choices[Math.floor(Math.random() * newState.choices.length)];
      }

      if (arrayLengthDiff === 0) {
        newState.gameState = {
          started: false,
        };
        newState.correctAnswer = null;
        newState.guesses = [];
      }

      return newState;
    },
  },
});

export const { startGame, startRound, tryGuess } = gameSlice.actions;

export default gameSlice.reducer;
