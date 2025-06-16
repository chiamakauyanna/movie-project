import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchAiring } from "../../services/fetchMovieApi";

const Airing = () => {
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/tvshows/airing/${id}`);
  };

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Airing TvShows"
        onItemClick={handleClick}
        fetchFunction={fetchAiring}
      />
    </div>
  );
};

export default Airing;
