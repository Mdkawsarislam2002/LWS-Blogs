import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedBlogs: [],
};

const savedBlogsSlice = createSlice({
  name: "savedBlogs",
  initialState,
  reducers: {
    addSavedBlog: (state, action) => {
      state.savedBlogs.push(action.payload);
    },
    removeBlogs: (state, action) => {
      console.log("payload", action.payload);
    },
  },
});

export const { addSavedBlog, removeBlogs } = savedBlogsSlice.actions;
export default savedBlogsSlice;
