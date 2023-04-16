import { configureStore } from "@reduxjs/toolkit";
import homeBlogsSlice from "./Feature/Home_Blogs/Hoome_blogs";

const store = configureStore({
  reducer: {
    homeBlogs: homeBlogsSlice.reducer,
  },
});

export default store;
