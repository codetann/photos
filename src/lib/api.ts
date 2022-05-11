import axios from "axios";
import { apiKey } from "@config";

const api = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: apiKey,
  },
});

export { api };
