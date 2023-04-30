import { createSlice } from "@reduxjs/toolkit";
import getHomeBlogs, { shortByDate, shortByMostLikes } from "./getHomeBlogs";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const homeBlogsSlice = createSlice({
  name: "homeBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getHomeBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHomeBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.loading = false;
      })
      .addCase(getHomeBlogs.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });

    builder
      .addCase(shortByDate.pending, (state) => {
        state.loading = true;
      })
      .addCase(shortByDate.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.loading = false;
      })
      .addCase(shortByDate.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });

    builder
      .addCase(shortByMostLikes.pending, (state) => {
        state.loading = true;
      })
      .addCase(shortByMostLikes.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.loading = false;
      })
      .addCase(shortByMostLikes.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default homeBlogsSlice;
