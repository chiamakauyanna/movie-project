import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList";
import useFetchItems from "../../hooks/useFetchItems";

const DiscoverMovies = () => {
    const { movies, loading, error } = useFetchItems();
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/movies/${id}`);
    };

    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <ItemsList
            title = 'Discover Movies'
                items={movies || []} // Ensure `items` is always an array
                loading={loading}
                error={error}
                onItemClick={handleClick}
            />
        </div>
    );
};

export default DiscoverMovies;
