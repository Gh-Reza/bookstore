import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const catagoriesSlice = createSlice({
  name: 'catagory',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;
    },
  },
});

export const { checkStatus } = catagoriesSlice.actions;
export default catagoriesSlice.reducer;
