import { configureStore } from '@reduxjs/toolkit';
import favsReducer from '../features/favs/favSlice';

export const store = configureStore({
  reducer: {
    favs: favsReducer
  }
});
