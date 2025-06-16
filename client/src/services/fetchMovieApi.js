const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const apiUrl = import.meta.env.VITE_MOVIE_BASE_URL;

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
export const fetchDiscoverMovies = ({ genre = "", rating = "", sortBy = "popularity.desc", page = 1 }) => {
  return {
    ...baseConfig,
    url: `${apiUrl}/discover/movie`,
    params: {
      ...baseConfig.params,
      api_key: apiKey,
      with_genres: genre || undefined,
      "vote_average.gte": rating || undefined,
      sort_by: sortBy,
      page,
    },
  };
};

export const fetchDiscoverTvShows = ({ genre = "", rating = "", sortBy = "popularity.desc", page = 1 }) => {
  return {
    ...baseConfig,
    url: `${apiUrl}/discover/tv`,
    params: {
      ...baseConfig.params,
      api_key: apiKey,
      with_genres: genre || undefined,
      "vote_average.gte": rating || undefined,
      sort_by: sortBy,
      page,
    },
  };
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

export const fetchUpcomingMovies = {
    ...baseConfig,
    url: `${apiUrl}/movie/upcoming?api_key=${apiKey}`,
};

// Trending Movies and TV Shows
export const fetchTrending = {
    ...baseConfig,
    url: `${apiUrl}/trending/all/day?api_key=${apiKey}`,
};

// Airing Today
export const fetchAiring = {
    ...baseConfig,
    url: `${apiUrl}/tv/airing_today?api_key=${apiKey}`, 
};

// On the Air
export const fetchOnTheAir = {
    ...baseConfig,
    url: `${apiUrl}/tv/on_the_air?api_key=${apiKey}`,
};

// Search
export const fetchSearchResults = (query) => {
  return {
    method: "GET",
    url: `${apiUrl}/search/multi`,
    params: {
      query,
      api_key: apiKey,
    },
  };
};

export const fetchRecommendations = (id, mediaType = "movie") => {
   const typePath = mediaType === "tv" ? "tv" : "movie"; 
  return {
    ...baseConfig,
    url: `${apiUrl}/${typePath}/${id}/recommendations`,
    params: {
      ...baseConfig.params,
      api_key: apiKey,
    },
  };
};


