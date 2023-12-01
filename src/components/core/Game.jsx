import React from 'react';
import { Map, Home } from '.';

export const Game = () => {
  return (
    <>
      <div className="px-6 lg:p-0 lg:w-1/2 mx-auto">
        <Map></Map>
      </div>

      <div className="mt-7">
        <Home></Home>
      </div>
    </>
  );
};
