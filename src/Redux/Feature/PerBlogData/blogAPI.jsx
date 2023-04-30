import { createAsyncThunk } from "@reduxjs/toolkit";
import theAxios from "../../../utils/theAxios";

const singleBlogAPI = createAsyncThunk(
  "Blogs/singleBlog",
  async ({ blog_details }) => {
    let req = await theAxios.get(`/blogs/${blog_details}`);
    return req.data;
  }
);

export const saveOrUnSaveBlog = createAsyncThunk(
  "Blogs/saveOrUnsaveBlog",
  async ({ id, isSaved }) => {
    let update;
    if (isSaved) {
      update = false;
    } else {
      update = true;
    }
    let req = await theAxios.patch(`/blogs/${id}`, {
      isSaved: update,
    });
    return req.data;
  }
);

export default singleBlogAPI;
