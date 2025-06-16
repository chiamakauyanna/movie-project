import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchPopularTvShows } from "../../services/fetchMovieApi";

const PopularTvShows = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/tvshows/${id}`);
  };

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Popular TvShows"
        fetchFunction={fetchPopularTvShows}
        onItemClick={handleClick}
      />
    </div>
  );
};

export default PopularTvShows;
