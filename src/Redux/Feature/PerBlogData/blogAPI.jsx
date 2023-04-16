import { createAsyncThunk } from "@reduxjs/toolkit";
import theAxios from "../../../utils/theAxios";

const singleBlogAPI = createAsyncThunk(
  "Blogs/singleBlog",
  async ({ blog_details }) => {
    let req = await theAxios.get(`/blogs/${blog_details}`);

    return req.data;
  }
);

export default singleBlogAPI;
