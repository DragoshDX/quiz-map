import React from 'react';
import { Map, Controls } from '.';
import { StoreProvider } from '../store';

export const Game = () => {
  return (
    <StoreProvider>
      <div className="px-6 lg:p-0 lg:w-1/2 mx-auto">
        <Map></Map>
      </div>

      <div className="mt-7">
        <Controls></Controls>
      </div>
    </StoreProvider>
  );
};
