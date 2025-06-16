import { useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex">
        <div>
          <select
            onChange={(e) => navigate(e.target.value)}
            className="bg-primary font-heading text-sm py-3 lg:px-4 md:px-2 px-2 rounded focus:outline-none border-none"
          >
            <option value="">Select</option>
            <option value="/movies">Movies</option>
            <option value="/tvshows">TvShows</option>
            <option value="/trending">Trending</option>
            <option value="/tvshows/popular">Popular TvShows</option>
            <option value="/movies/popular">Popular Movies</option>
            <option value="/tvshows/airing">Airing</option>
            <option value="/tvshows/on-air">On Air</option>
            <option value="/movies/toprated">Top rated Movies</option>
            <option value="/tvshows/toprated">Top rated TvShows</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
