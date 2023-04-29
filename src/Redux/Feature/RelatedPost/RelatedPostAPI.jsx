import { createAsyncThunk } from "@reduxjs/toolkit";
import theAxios from "../../../utils/theAxios";

const relatedPostApi = createAsyncThunk(
  "relatedPost/relatedPostApi",
  async ({ currentVideoId: id, tags }) => {
    let queryString =
      tags?.length > 0
        ? tags.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${id}&_limit=${limit}`
        : `id_ne=${id}`;

    let req = await theAxios.get(`/blogs/?${queryString}`);
    return req.data;
  }
);

export default relatedPostApi;
