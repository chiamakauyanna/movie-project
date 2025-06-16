import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { getGenres } from "../../services/movieService";

const MovieFilters = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await getGenres();
        setGenresList(res.data.genres);
      } catch (err) {
        console.error("Failed to load genres");
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const filters = {
      search,
      genre,
      year,
      rating,
      sortBy,
    };
    onFilterChange(filters);
  }, [search, genre, year, rating, sortBy]);

  return (
    <div className="bg-secondary p-4 rounded-md shadow mb-6 space-y-4">
      <div className="flex gap-2 items-center">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by title..."
          className="flex-1 bg-transparent border-b border-gray-600 text-white focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <select
          className="bg-primary text-white p-2 rounded"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          {genresList.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          min="1900"
          max={new Date().getFullYear()}
          placeholder="Year"
          className="bg-primary text-white p-2 rounded"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <select
          className="bg-primary text-white p-2 rounded"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Any Rating</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
          <option value="6">6+</option>
        </select>

        <select
          className="bg-primary text-white p-2 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="popularity.desc">Popularity</option>
          <option value="vote_average.desc">Top Rated</option>
          <option value="release_date.desc">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default MovieFilters;
