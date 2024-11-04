import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList";
import useFetchItems from "../../hooks/useFetchItems";

const PopularTvShows = () => {
    const { popularTvShows, loading, error } = useFetchItems();

    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/tvshows/${id}`);
    };

    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <ItemsList
                title="Popular TvShows"
                items={popularTvShows}
                loading={loading}
                error={error}
                onItemClick={handleClick}
            />
        </div>
    );
};

export default PopularTvShows;
