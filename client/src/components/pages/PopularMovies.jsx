import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchPopularMovies } from "../../services/fetchMovieApi";

const PopularMovies = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Popular Movies"
        onItemClick={handleClick}
        fetchFunction={fetchPopularMovies}
      />
    </div>
  );
};

export default PopularMovies;
