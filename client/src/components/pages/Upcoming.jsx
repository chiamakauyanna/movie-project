import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchUpcomingMovies } from "../../services/fetchMovieApi";

const Upcoming = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Upcoming"
        onItemClick={handleClick}
        fetchFunction={fetchUpcomingMovies}
      />
    </div>
  );
};

export default Upcoming;
