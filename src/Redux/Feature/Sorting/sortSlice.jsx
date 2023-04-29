import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortValue: "default",
  filterBySaved: false,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortTask: (state, action) => {
      state.sortValue = action.payload;
    },
    filterTaskHandler: (state, action) => {
      state.filterBySaved = action.payload;
    },
  },
});

export const { sortTask, filterTaskHandler } = sortSlice.actions;
export default sortSlice;
