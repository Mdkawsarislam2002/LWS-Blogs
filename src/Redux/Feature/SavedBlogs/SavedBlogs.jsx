import { createSlice } from "@reduxjs/toolkit";
import savedBlogApi from "./SavedBlogAPI";

const initialState = {
  savedBlogs: [],
  isLoading: false,
  isError: false,
  errMsg: "",
};

const savedBlogsSlice = createSlice({
  name: "savedBlogsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(savedBlogApi.fulfilled, (state, actions) => {
        state.savedBlogs = actions.payload;
        state.isLoading = false;
        state.isError = false;
        state.errMsg = "";
      })
      .addCase(savedBlogApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(savedBlogApi.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.errMsg = actions.error.message;
      });
  },
});

export default savedBlogsSlice;
