import {
  AnyAction, configureStore, Store, ThunkDispatch,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import auth from './auth/slice';
import IStore from './interfaces/IStore';

let store: Store<IStore>;

export const setupStore = (preloadedState: IStore) => (
  configureStore({
    reducer: { auth },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  })
);

export const initializeStore = (preloadedState: IStore) => {
  let initialStore = store ?? setupStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    initialStore = setupStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    // store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return initialStore;
  // Create the store once in the client
  if (!store) store = initialStore;

  return initialStore;
};

export function useStore(initialState: IStore) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
