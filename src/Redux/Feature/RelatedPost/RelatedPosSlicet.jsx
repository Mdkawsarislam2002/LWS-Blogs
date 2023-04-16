import { createSlice } from "@reduxjs/toolkit";
import relatedPostApi from "./RelatedPostAPI";

const initialState = {
  singeBlogs: [],
  loading: false,
  error: null,
};

const relatedPost = createSlice({
  name: "relatedPost",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(relatedPostApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(relatedPostApi.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.loading = false;
      })
      .addCase(relatedPostApi.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default relatedPost;
