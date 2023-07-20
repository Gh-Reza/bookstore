import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const response = await axios.get(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iq87ZDBdLVe5avxJUeoP/books',
);
const { data } = response;

const books = Object.keys(data).map((key) => {
  const apiBooks = data[key][0];
  return {
    ...apiBooks,
    item_id: parseInt(key, 10),
  };
});

const initialState = books || [
  {
    item_id: 1,
    title: 'There is no book',
    author: '',
    category: '',
  },
];

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },
    removeBook(state, action) {
      const newState = state.filter((book) => book.item_id !== action.payload);
      return newState;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
