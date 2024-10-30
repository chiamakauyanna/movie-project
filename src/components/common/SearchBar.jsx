import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <form className="flex">
            <input
                type="text"
                placeholder="Search movie or tvshow..."
                className="px-4 py-3 rounded-l-lg bg-primary w-36 md:w-64 lg:w-72 font-heading"
            />
            <button type="submit" className="bg-primary px-2 rounded-r-lg">
                <FaSearch size="1.2rem" color="#E50914" />
            </button>
        </form>
    );
};

export default SearchBar;
