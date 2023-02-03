import { configureStore } from '@reduxjs/toolkit';
import translates from './translates/slice';
import jokes from './jokes/slice';

const setupStore = (preloadedState) => {
  return configureStore({
    reducer: {
      translates,
      jokes
    },
    preloadedState
  });
};

export default setupStore;
