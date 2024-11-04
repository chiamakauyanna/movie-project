import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList";
import useFetchItems from "../../hooks/useFetchItems";

const DiscoverTvShows = () => {
    const { tvshows, loading, error } = useFetchItems();

    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/tvshows/${id}`);
    };

    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <ItemsList
                title="Discover TvShows"
                items={tvshows}
                loading={loading}
                error={error}
                onItemClick={handleClick}
            />
        </div>
    );
};

export default DiscoverTvShows;
