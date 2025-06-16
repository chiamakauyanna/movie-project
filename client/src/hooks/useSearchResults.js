import { useState } from "react";
import axios from "axios";
import { fetchSearchResults } from "../services/fetchMovieApi";

const useSearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.request(fetchSearchResults(query));
      setResults(response.data.results);
    } catch (err) {
      console.error("Search failed:", err);
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, search };
};

export default useSearchResults;
