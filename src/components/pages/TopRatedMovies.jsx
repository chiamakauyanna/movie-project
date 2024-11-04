import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList";
import useFetchItems from "../../hooks/useFetchItems";

const TopRatedMovies = () => {
    const { topRatedMovies, loading, error } = useFetchItems();

    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/movies/${id}`);
    };

    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <ItemsList
                title="Top-rated Movies"
                items={topRatedMovies}
                loading={loading}
                error={error}
                onItemClick={handleClick}
            />
        </div>
    );
};

export default TopRatedMovies;
