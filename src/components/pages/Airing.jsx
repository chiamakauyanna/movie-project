import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList";
import useFetchItems from "../../hooks/useFetchItems";

const Airing = () => {
    const { airing, loading, error } = useFetchItems();

    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/airing/${id}`);
    };

    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <ItemsList
                title="Airing TvShows"
                items={airing}
                loading={loading}
                error={error}
                onItemClick={handleClick}
            />
        </div>
    );
};

export default Airing;
