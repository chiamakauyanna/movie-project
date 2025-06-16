import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchDiscoverTvShows } from "../../services/fetchMovieApi";

const DiscoverTvShows = () => {
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/tvshows/${id}`);
  };

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Discover TvShows"
        onItemClick={handleClick}
        fetchFunction={fetchDiscoverTvShows}
      />
    </div>
  );
};

export default DiscoverTvShows;
