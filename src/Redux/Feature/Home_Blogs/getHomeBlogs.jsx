import { createAsyncThunk } from "@reduxjs/toolkit";
import theAxios from "../../../utils/theAxios";

const getHomeBlogs = createAsyncThunk("homeBlogs/getHomeBlogs", async () => {
  let req = await theAxios.get("blogs");

  return req.data;
});

export default getHomeBlogs;
