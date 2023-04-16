import { createAsyncThunk } from "@reduxjs/toolkit";
import theAxios from "../../../utils/theAxios";

const getHomeBlogs = createAsyncThunk("homeBlogs/getHomeBlogs", async () => {
  theAxios.get("blogs").then((res) => {
    return res.data;
  });
});

export default getHomeBlogs;
