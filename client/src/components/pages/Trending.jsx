import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchTrending } from "../../services/fetchMovieApi";

const Trending = () => {
  const navigate = useNavigate();

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
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Trending"
        onItemClick={handleClick}
        fetchFunction={fetchTrending}
      />
    </div>
  );
};

export default Trending;
