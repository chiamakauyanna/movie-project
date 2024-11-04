import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList";
import useFetchItems from "../../hooks/useFetchItems";

const Trending = () => {
    const { trending, loading, error } = useFetchItems();

    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/trending/${id}`);
    };

    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <ItemsList
                title="Trending"
                items={trending}
                loading={loading}
                error={error}
                onItemClick={handleClick}
            />
        </div>
    );
};

export default Trending;
