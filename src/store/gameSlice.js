import { units } from '@/data';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  gameState: {
    won: false,
    started: false,
  },
  guesses: [
    'ROU122',
    'ROU123',
    'ROU124',
    'ROU126',
    'ROU127',
    'ROU128',
    'ROU129',
    'ROU130',
    'ROU131',
    'ROU132',
    'ROU133',
    'ROU276',
    'ROU277',
    'ROU278',
    'ROU280',
    'ROU287',
    'ROU294',
    'ROU295',
    'ROU296',
    'ROU297',
    'ROU298',
    'ROU299',
    'ROU300',
    'ROU301',
    'ROU302',
    'ROU303',
    'ROU304',
    'ROU305',
    'ROU306',
    'ROU307',
    'ROU308',
    'ROU309',
    'ROU310',
    'ROU311',
    'ROU312',
    'ROU313',
    'ROU314',
  ],
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

      newState.choices = Array(3)
        .fill('')
        .map(() => {
          const randomUnit = getRandomEntry(proxyUnits, newState);

          return randomUnit;
        });

      if (state.correctAnswer.id === guessedId) {
        newState.correctAnswer = getRandomEntry(proxyUnits, newState);
      }

      newState.choices.push(newState.correctAnswer);

      return newState;
    },
  },
});

export const { startGame, startRound, tryGuess } = gameSlice.actions;

export default gameSlice.reducer;
