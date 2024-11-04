const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";

// Base configuration for all API requests
const baseConfig = {
    method: "GET",
    headers: { accept: "application/json" },
    params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
    },
};

// Discover Movies and TV Shows
export const fetchDiscoverMovies = {
    ...baseConfig,
    url: `${apiUrl}/discover/movie?api_key=${apiKey}`,
    params: {
        ...baseConfig.params,
        sort_by: "popularity.desc",
    },
};

export const fetchDiscoverTvShows = {
    ...baseConfig,
    url: `${apiUrl}/discover/tv?api_key=${apiKey}`,
    params: {
        ...baseConfig.params,
        sort_by: "popularity.desc",
    },
};

// Popular Movies and TV Shows
export const fetchPopularMovies = {
    ...baseConfig,
    url: `${apiUrl}/movie/popular?api_key=${apiKey}`,
};

export const fetchPopularTvShows = {
    ...baseConfig,
    url: `${apiUrl}/tv/popular?api_key=${apiKey}`,
};

// Top Rated Movies and TV Shows
export const fetchTopRatedMovies = {
    ...baseConfig,
    url: `${apiUrl}/movie/top_rated?api_key=${apiKey}`,
};

export const fetchTopRatedTvShows = {
    ...baseConfig,
    url: `${apiUrl}/tv/top_rated?api_key=${apiKey}`,
};

// Trending Movies and TV Shows
export const fetchTrending = {
    ...baseConfig,
    url: `${apiUrl}/trending/all/day?api_key=${apiKey}`,
};

// Airing Today
export const fetchAiring = {
    ...baseConfig,
    url: `${apiUrl}/tv/airing_today?api_key=${apiKey}`, // Corrected URL
};

// On the Air
export const fetchOnTheAir = {
    ...baseConfig,
    url: `${apiUrl}/tv/on_the_air?api_key=${apiKey}`,
};
