import { shuffle } from 'lodash';
import { useMediaQuery } from 'usehooks-ts';
import { units } from '@/data';
import React from 'react';
import { Timer } from '.';

export const Quiz = () => {
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
        {shuffle(units)
          .slice(0, 4)
          .map(({ id, name }) => {
            return (
              <li key={id}>
                <button
                  title="Nume judet"
                  type="button"
                  className="bg-primary-500 text-gray-50 font-bold py-3 transition-colors shadow-primary-200 shadow-inner w-full block rounded-lg hover:shadow-primary-400 hover:bg-primary-800"
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
