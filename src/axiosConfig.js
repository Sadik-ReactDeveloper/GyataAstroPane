import axios from "axios";

const instance = axios.create({
  // baseURL: "http://91.203.134.213/api",
  baseURL: "https://api.astrogyata.in/api",
});

export default instance;
