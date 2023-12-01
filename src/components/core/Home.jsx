'use client';
import { increment } from '@/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector(({ game }) => {
    return game.count;
  });

  return (
    <div className="text-gray-50 lg:w-1/2 mx-auto flex flex-col gap-11 lg:gap-4">
      <div className="bg-primary  text-center px-4 py-4 lg:py-6 shadow-lg ">
        Ai 30 de secunde pentru a alege varianta corecta.
      </div>

      <div className="shadow-lg">
        <div className="bg-accent2-500 text-shadow lg:rounded-lg shadow-inner text-center p-4 py-3">
          <span className="shadow-black text-shadow">
            Ghiceste toate judetele pentru a castiga jocul.
          </span>
        </div>
      </div>

      <div className="text-center">
        <button
          type="button"
          title="Start"
          className="uppercase text-center px-2 py-1 bg-gray-50 shadow-md rounded text-gray-400 font-bold"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Start {count}
        </button>
      </div>
    </div>
  );
};
