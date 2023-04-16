import { createSlice } from "@reduxjs/toolkit";
import singleBlogAPI from "./blogAPI";

const initialState = {
  singeBlogs: [],
  loading: false,
  error: null,
};

const singleBlog = createSlice({
  name: "singleBlog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(singleBlogAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(singleBlogAPI.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.loading = false;
      })
      .addCase(singleBlogAPI.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default singleBlog;
