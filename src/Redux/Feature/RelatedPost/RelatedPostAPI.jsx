import { createAsyncThunk } from "@reduxjs/toolkit";
import theAxios from "../../../utils/theAxios";

const relatedPostApi = createAsyncThunk(
  "relatedPost/relatedPostApi",
  async ({ currentVideoId, tags }) => {
    let req = await theAxios.get(`/blogs/`);

    return req.data;
  }
);

export default relatedPostApi;
