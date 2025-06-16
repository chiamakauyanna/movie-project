import axios from "axios";


const BASE_URL = import.meta.env.VITE_MOVIE_SERVER_URL;

export const registerUser = (formData) => {
   return axios.post(`${BASE_URL}/auth/register`, formData)
};

export const loginUser = (formData) => {
   return axios.post(`${BASE_URL}/auth/login`, formData)
};

