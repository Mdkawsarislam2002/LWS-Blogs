import axios from "axios";

const theAxios = axios.create({
  baseURL: "http://localhost:9000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default theAxios;
