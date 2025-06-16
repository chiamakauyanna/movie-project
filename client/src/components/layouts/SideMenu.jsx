import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../common/Logo";
import { FaHeart, FaStar, FaVideo } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

const genres = [
  { id: "", name: "All" },
  { id: "28", name: "Action" },
  { id: "35", name: "Comedy" },
  { id: "18", name: "Drama" },
  { id: "27", name: "Horror" },
  { id: "10749", name: "Romance" },
];

const SideMenu = ({
  genre,
  setGenre,
  rating,
  setRating,
  sortBy,
  setSortBy,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  // Show filters only on /discovermovies or /tvshows routes
  const showFilters =
    pathname.startsWith("/movies") || pathname.startsWith("/tvshows");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-2xl text-textPrimary bg-secondary p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle side menu"
      >
        {isOpen ? <FaTimes /> : <RiMenu3Line />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar content */}
      <aside
        className={`bg-secondary text-gray-300 font-semibold flex-col fixed top-0 left-0 h-full w-64 pt-10
        transform transition-transform duration-300 ease-in-out z-40
        md:relative md:translate-x-0 md:flex md:w-auto md:pt-10
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Logo />

        <nav className="mt-8 px-6">
          <ul className="space-y-6 mb-6">
            <li>
              <Link
                to="/movies/upcoming"
                className="flex items-center gap-2 hover:text-accent focus:text-accent"
                onClick={() => setIsOpen(false)}
              >
                <FaVideo />
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                to="/recommendations"
                className="flex items-center gap-2 hover:text-accent focus:text-accent"
                onClick={() => setIsOpen(false)}
              >
                <FaStar />
                Recommendations
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="flex items-center gap-2 hover:text-accent focus:text-accent"
                onClick={() => setIsOpen(false)}
              >
                <FaHeart />
                My Favorites
              </Link>
            </li>
          </ul>

          {/* Filter Panel - visible only on /movies or /tvshows */}
          {showFilters && (
            <div className="mt-6 border-t border-gray-700 pt-6 text-sm text-textPrimary">
              <h3 className="text-lg font-bold mb-4 text-accent">
                Filter Results
              </h3>

              <div className="space-y-4">
                {/* Genre Filter */}
                <div>
                  <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">
                    Genre
                  </label>
                  <select
                    className="w-full bg-gray-800 text-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    {genres.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">
                    Minimum Rating
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    placeholder="e.g. 7.5"
                    className="w-full bg-gray-800 text-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </div>

                {/* Sort By Filter */}
                <div>
                  <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">
                    Sort By
                  </label>
                  <select
                    className="w-full bg-gray-800 text-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popularity.desc">Most Popular</option>
                    <option value="vote_average.desc">Highest Rated</option>
                    <option value="release_date.desc">Newest Releases</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
};

export default SideMenu;
