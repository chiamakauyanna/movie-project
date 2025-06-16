import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchTopRatedTvShows } from "../../services/fetchMovieApi";

const TopRatedTvShows = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/tvshow/${id}`);
  };

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Top-rated TvShows"
        onItemClick={handleClick}
        fetchFunction={fetchTopRatedTvShows}
      />
    </div>
  );
};

export default TopRatedTvShows;
