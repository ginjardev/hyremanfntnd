import { configureStore } from '@reduxjs/toolkit';
import candidatesReducer from './slices/candidates';

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
  },
});
