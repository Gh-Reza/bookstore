import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// disable no-linebreak rule
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iq87ZDBdLVe5avxJUeoP/books';
export const getAllBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(url);
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
      data: {
        item_id: 1,
        title: '',
        author: '',
        category: '',
      },
      loading: false,
    },
  ],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(addBook.rejected, (state) => {
        state.loading = false;
      })
      .addCase(removeBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const newState = state.filter(
          (book) => book.item_id !== action.payload,
        );
        return newState;
      })
      .addCase(removeBook.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default booksSlice.reducer;
