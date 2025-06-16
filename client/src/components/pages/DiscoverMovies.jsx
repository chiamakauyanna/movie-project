import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchDiscoverMovies } from "../../services/fetchMovieApi";

const DiscoverMovies = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Discover Movies"
        onItemClick={handleClick}
        fetchFunction={fetchDiscoverMovies}
      />
    </div>
  );
};

export default DiscoverMovies;
