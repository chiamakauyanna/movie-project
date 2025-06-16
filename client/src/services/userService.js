import axios from "axios";

const BASE_URL = import.meta.env.VITE_MOVIE_SERVER_URL;
const getToken = () => localStorage.getItem("token");

const authHeader = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const getFavorites = () =>
  axios.get(`${BASE_URL}/user/favorites`, authHeader());

export const addFavorite = (movie) =>
  axios.post(`${BASE_URL}/user/favorites`, { item: movie }, authHeader());

export const removeFavorite = (id) =>
  axios.delete(`${BASE_URL}/user/favorites/${id}`, authHeader());

export const fetchUser = () =>
  axios.get(`${BASE_URL}/user/me`, authHeader());
