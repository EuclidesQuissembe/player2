import axios from "axios";

const api = axios.create({
  baseURL: "https://challenge.player2.tech/react-native/api",
});

export default api;
