import axios from "axios";

const client = axios.create({
  baseURL: "https://plankton-app-oetun.ondigitalocean.app/api",
});

export default client;
