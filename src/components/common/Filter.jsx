import { Link } from "react-router-dom";

const Filter = () => {
    return (
        <div>
            <div className="flex">
                <div>
                    <select
                        name=""
                        className="bg-primary font-heading text-sm py-3 px-4 rounded"
                    >
                        <option value="popular">
                            <Link to="/popular">Most Popular</Link>
                        </option>
                        <option value="top-rated">
                            <Link to="/top-rated">Top Rated</Link>
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filter;
