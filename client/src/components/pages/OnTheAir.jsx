import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { fetchOnTheAir } from "../../services/fetchMovieApi";

const OnTheAir = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/tvshows/on_air/${id}`);
  };

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="On The Air"
        onItemClick={handleClick}
        fetchFunction={fetchOnTheAir}
      />
    </div>
  );
};

export default OnTheAir;
