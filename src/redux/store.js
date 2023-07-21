import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import catagoriesReducer from './catagories/catagoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    catagories: catagoriesReducer,
  },
}, applyMiddleware);

export default store;
