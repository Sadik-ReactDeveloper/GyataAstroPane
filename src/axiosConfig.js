import axios from "axios";

const instance = axios.create({
  baseURL: "http://91.203.134.213/api",
});

export default instance;
