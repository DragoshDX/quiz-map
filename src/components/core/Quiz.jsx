import { useMediaQuery } from 'usehooks-ts';
import React from 'react';
import { Timer } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { shuffle } from 'lodash';
import { tryGuess } from '@/store';

export const Quiz = () => {
  const dispatch = useDispatch();
  const choices = useSelector(({ game }) => {
    return game.choices;
  });
  const matches = useMediaQuery('(min-width: 1024px)');
  const positionValueClass = matches ? '' : 'absolute';

  return (
    <div className="px-6 lg:px-0 lg:w-1/2 mx-auto">
      <div className="flex gap-8 mb-5">
        <div className={`${positionValueClass} -top-2 lg:static`}>
          <Timer></Timer>
        </div>

        <p className="bg-gray-50 shadow-lg text-center flex-grow p-2 rounded-lg">
          Selecteaza judetul corespunzator:
        </p>
      </div>

      <ul className="grid lg:grid-cols-2 gap-y-3 lg:gap-x-8 lg:gap-y-5 px-6 lg:px-0">
        {shuffle(choices).map((quizChoice) => {
          const { name, id } = quizChoice;

          return (
            <li key={id}>
              <button
                title={name}
                type="button"
                className="button button-choice"
                onClick={() => {
                  dispatch(tryGuess({ id }));
                }}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
