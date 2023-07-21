import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iq87ZDBdLVe5avxJUeoP/books';
export const getAllBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(url);
  const { data } = await response;

  const allBooks = Object.keys(data).map((key) => {
    const apiBooks = data[key][0];
    return {
      ...apiBooks,
      item_id: parseInt(key, 10),
    };
  });
  return allBooks;
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  await axios.post(url, newBook);
  return newBook;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${url}/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'book',
  initialState: [
    {
      item_id: 1,
      title: 'Looding...',
      author: 'Looding...',
      category: 'Looding...',
    },
  ],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const newState = state.filter((book) => book.item_id !== action.payload);
        return newState;
      });
  },
});

export default booksSlice.reducer;
