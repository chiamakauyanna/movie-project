import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movie or tvshow..."
        className="flex-grow px-4 py-3 rounded-l-lg bg-primary font-heading text-sm outline-none"
      />
      <button type="submit" className="bg-primary px-3 rounded-r-lg flex items-center justify-center">
        <FaSearch size="1.2rem" color="#E50914" />
      </button>
    </form>
  );
};

export default SearchBar;
