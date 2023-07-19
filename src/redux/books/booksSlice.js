import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 1,
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 2,
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 3,
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
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
