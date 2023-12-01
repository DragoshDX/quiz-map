'use client';
import { useRef } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { makeStore } from '@/store';

export const StoreProvider = ({ children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <ReduxProvider store={storeRef.current}>{children}</ReduxProvider>;
};
