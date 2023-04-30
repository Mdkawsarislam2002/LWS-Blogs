import { configureStore } from "@reduxjs/toolkit";

//  Reducers
import homeBlogsSlice from "./Feature/Home_Blogs/Hoome_blogs";
import singleBlog from "./Feature/PerBlogData/blogData";
import relatedPost from "./Feature/RelatedPost/RelatedPosSlicet";
import sortSlice from "./Feature/Sorting/sortSlice";
import savedBlogs from "./Feature/SavedBlogs/SavedBlogs";

const store = configureStore({
  reducer: {
    homeBlogs: homeBlogsSlice.reducer,
    singleBlog: singleBlog.reducer,
    relatedPost: relatedPost.reducer,
    sort: sortSlice.reducer,
    savedBlogsSlice: savedBlogs.reducer,
  },
});

export default store;
