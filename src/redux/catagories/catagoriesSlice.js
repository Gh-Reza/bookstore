import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const catagoriesSlice = createSlice({
  name: 'catagory',
  initialState,
  reducers: {
    checkStatus: (state) => state,
  },
});

export const { checkStatus } = catagoriesSlice.actions;
export default catagoriesSlice.reducer;
