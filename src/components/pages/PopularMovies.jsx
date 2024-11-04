import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList";
import useFetchItems from "../../hooks/useFetchItems";

const PopularMovies = () => {
    const { popularMovies, loading, error } = useFetchItems();

    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/movies/${id}`);
    };

    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <ItemsList
                title="Popular Movies"
                items={popularMovies}
                loading={loading}
                error={error}
                onItemClick={handleClick}
            />
        </div>
    );
};

export default PopularMovies;
