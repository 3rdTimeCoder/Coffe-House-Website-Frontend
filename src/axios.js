import axios from "axios";

const instance = axios.create({
  baseURL: "https://coffee-house-09.herokuapp.com", //The API (Express Server) URL
});

export default instance;
