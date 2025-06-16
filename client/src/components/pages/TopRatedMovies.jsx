import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchTopRatedMovies } from "../../services/fetchMovieApi";

const TopRatedMovies = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Top-rated Movies"
        onItemClick={handleClick}
        fetchFunction={fetchTopRatedMovies}
      />
    </div>
  );
};

export default TopRatedMovies;
