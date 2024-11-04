import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList";
import useFetchItems from "../../hooks/useFetchItems";

const TopRatedTvShows = () => {
    const { topRatedTvShows, loading, error } = useFetchItems();

    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/top_rated_tvshow/${id}`);
    };

    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <ItemsList
                title="Top-rated TvShows"
                items={topRatedTvShows}
                loading={loading}
                error={error}
                onItemClick={handleClick}
            />
        </div>
    );
};

export default TopRatedTvShows;
