import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iq87ZDBdLVe5avxJUeoP/books',
  );
  const { data } = response;

  const allBooks = Object.keys(data).map((key) => {
    const apiBooks = data[key][0];
    return {
      ...apiBooks,
      item_id: parseInt(key, 10),
    };
  });
  return allBooks;
});

const booksSlice = createSlice({
  name: 'book',
  initialState: [
    {
      item_id: 1,
      title: 'Looding...',
      author: '',
      category: '',
    },
  ],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => action.payload);
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
