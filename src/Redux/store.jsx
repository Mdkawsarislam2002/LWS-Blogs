import { configureStore } from "@reduxjs/toolkit";
import homeBlogsSlice from "./Feature/Home_Blogs/Hoome_blogs";
import singleBlog from "./Feature/PerBlogData/blogData";

const store = configureStore({
  reducer: {
    homeBlogs: homeBlogsSlice.reducer,
    singleBlog: singleBlog.reducer,
  },
});

export default store;
