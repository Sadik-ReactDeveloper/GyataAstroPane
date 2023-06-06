import axios from "axios";

const instance = axios.create({
  baseURL: "http://43.205.241.133:4000",
});

export default instance;
