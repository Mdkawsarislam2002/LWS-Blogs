import { createAsyncThunk } from "@reduxjs/toolkit";
import theAxios from "../../../utils/theAxios";

const getHomeBlogs = createAsyncThunk("homeBlogs/getHomeBlogs", async () => {
  let req = await theAxios.get("blogs");
  return req.data;
});

//  sort by date
export const shortByDate = createAsyncThunk(
  "homeBlogs/getHomeBlogsByDate",
  async () => {
    let req = await theAxios.get("blogs?_sort=createdAt&_order=desc");
    return req.data;
  }
);

//  sort by date most  likes
export const shortByMostLikes = createAsyncThunk(
  "homeBlogs/getHomeBlogsByLikes",
  async () => {
    let req = await theAxios.get("blogs?_sort=likes&_order=desc");
    return req.data;
  }
);

export default getHomeBlogs;
