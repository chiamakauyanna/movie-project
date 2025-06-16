import useSearchResults from "../../hooks/useSearchResults";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import ItemsList from "../common/ItemsList";

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get("query");
  const navigate = useNavigate();

  const { results, search } = useSearchResults();

  useEffect(() => {
    if (query) {
      search(query);
    }
  }, [query, search]);

  const handleClick = (id, mediaType) => {
  if (mediaType === "movie") {
    navigate(`/movies/${id}`);
  } else if (mediaType === "tv") {
    navigate(`/tvshows/${id}`);
  } else {
    console.warn("Unknown media type:", mediaType);
  }
};

  return (
    <ItemsList
      title={`Search Results for "${query}"`}
      onItemClick={handleClick}
      staticItems={results} 
    />
  );
};

export default Search;
