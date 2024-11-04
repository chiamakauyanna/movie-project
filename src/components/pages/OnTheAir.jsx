import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList";
import useFetchItems from "../../hooks/useFetchItems";

const OnTheAir = () => {
    const { onAir, loading, error } = useFetchItems();

    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/on_air/${id}`);
    };

    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <ItemsList
                title="On The Air"
                items={onAir}
                loading={loading}
                error={error}
                onItemClick={handleClick}
            />
        </div>
    );
};

export default OnTheAir;
