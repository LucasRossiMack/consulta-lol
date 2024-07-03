import axios from "axios";

const api = axios.create({
  baseURL: "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/",
});

export default api;