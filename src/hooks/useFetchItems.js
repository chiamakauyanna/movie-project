import axios from "axios";
import { useEffect, useState } from "react";
import * as fetchApi from "../api/fetchApi";

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
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            // Helper function to make a request and update the appropriate state
            const fetchAndSetData = async (config, key) => {
                try {
                    const response = await axios.request(config);
                    setData((prevData) => ({
                        ...prevData,
                        [key]: response.data.results,
                    }));
                } catch (err) {
                    console.error(`Error fetching ${key}:`, err);
                    setError(`Error loading ${key}. Please try again later.`);
                }
            };

            // List of all fetch configurations with corresponding keys
            const fetchConfigs = [
                { config: fetchApi.fetchDiscoverMovies, key: "movies" },
                { config: fetchApi.fetchDiscoverTvShows, key: "tvshows" },
                { config: fetchApi.fetchPopularMovies, key: "popularMovies" },
                { config: fetchApi.fetchPopularTvShows, key: "popularTvShows" },
                { config: fetchApi.fetchTrending, key: "trending" },
                { config: fetchApi.fetchTopRatedMovies, key: "topRatedMovies" },
                {
                    config: fetchApi.fetchTopRatedTvShows,
                    key: "topRatedTvShows",
                },
                { config: fetchApi.fetchAiring, key: "airing" },
                { config: fetchApi.fetchOnTheAir, key: "onAir" },
            ];

            // Fetch all data sequentially
            for (let { config, key } of fetchConfigs) {
                await fetchAndSetData(config, key);
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    return { ...data, loading, error };
};

export default useFetchItems;
