import { useEffect, useState } from "react";
import axios from "axios";
import { getFavorites } from "../services/userService";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const apiUrl = import.meta.env.VITE_MOVIE_BASE_URL;

export const useFetchItemsDetails = (id, user, mediaType = "movie") => {
  const [details, setDetails] = useState({});
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      if (!id || !mediaType) return;

      setLoading(true);
      setError(null);
      try {
        const [movieRes, castRes] = await Promise.all([
         axios.get(`${apiUrl}/${mediaType}/${id}?api_key=${apiKey}`),
          axios.get(`${apiUrl}/${mediaType}/${id}/credits?api_key=${apiKey}`),
        ]);

        setDetails(movieRes.data);
        setCasts(castRes.data.cast);

        if (user) {
          const favs = await getFavorites();
          const alreadyFav = favs.data.some((fav) => fav.id === parseInt(id));
          setIsFavorite(alreadyFav);
        }
      } catch (err) {
        if (err.response) {
          setError(
            "We're having trouble loading the information right now. Please refresh the page or try again later."
          );
        } else if (err.request) {
          setError(
            "Oops! It seems there’s a problem with your connection. Please check your internet and try again."
          );
        } else {
          setError(`Error: ${err.message}. Please try again.`);
        }
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id, user, mediaType]);

  return {
    details,
    casts,
    loading,
    error,
    isFavorite,
    setIsFavorite, 
  };
};
