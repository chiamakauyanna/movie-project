import axios from "axios";
import { useEffect, useState } from "react";
import * as fetchApi from "../services/fetchMovieApi";

const useFetchItems = () => {
  const [data, setData] = useState({
    movies: [],
    tvshows: [],
    popularMovies: [],
    popularTvShows: [],
    trending: [],
    topRatedMovies: [],
    topRatedTvShows: [],
    airing: [],
    onAir: [],
    upcoming: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const fetchConfigs = [
        { config: fetchApi.fetchDiscoverMovies({}), key: "movies" },
        { config: fetchApi.fetchDiscoverTvShows({}), key: "tvshows" },
        { config: fetchApi.fetchPopularMovies, key: "popularMovies" },
        { config: fetchApi.fetchPopularTvShows, key: "popularTvShows" },
        { config: fetchApi.fetchTrending, key: "trending" },
        { config: fetchApi.fetchTopRatedMovies, key: "topRatedMovies" },
        { config: fetchApi.fetchTopRatedTvShows, key: "topRatedTvShows" },
        { config: fetchApi.fetchAiring, key: "airing" },
        { config: fetchApi.fetchOnTheAir, key: "onAir" },
        { config: fetchApi.fetchUpcomingMovies, key: "upcoming" },
      ];

      await Promise.all(
        fetchConfigs.map(async ({ config, key }) => {
          try {
            const response = await axios.request(config);
            setData((prevData) => ({
              ...prevData,
              [key]: response.data.results,
            }));
          } catch (err) {
            console.error(`Error fetching ${key}:`, err);
            setError((prevError) => {
              const message = `Error loading ${key}.`;
              return prevError ? `${prevError}\n${message}` : message;
            });
          }
        })
      );

      setLoading(false);
    };

    fetchData();
  }, []);

  return { ...data, loading, error };
};

export default useFetchItems;
