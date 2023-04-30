import { createAsyncThunk } from "@reduxjs/toolkit";
import theAxios from "../../../utils/theAxios";

const savedBlogApi = createAsyncThunk("savedBlogs/savedBlogApi", async () => {
  let res = await theAxios.get("blogs?isSaved=true");
  return res.data;
});

export default savedBlogApi;
