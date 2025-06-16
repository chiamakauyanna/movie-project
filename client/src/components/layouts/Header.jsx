import { useState } from "react";
import SearchBar from "../common/SearchBar";
import Filter from "../common/Filter";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaTimes } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";

const Header = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-secondary px-4 py-4 md:px-8 md:py-8 relative z-40">
      <div className="flex justify-between items-center lg:ml-0 md:ml-0 ml-16">
        {/* Filter always visible */}
        <Filter />

        {/* Hamburger menu */}
        <button
          className="md:hidden text-textPrimary text-2xl z-60 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <CiMenuKebab />}
        </button>

        {/* Right side: Search + Auth buttons */}
        <div
          className={`flex flex-col md:flex-row items-center md:gap-6 lg:gap-12 transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "block absolute top-full right-0 bg-secondary w-full md:static md:w-auto p-4 md:p-0 rounded-b-lg shadow-lg md:shadow-none z-50"
              : "hidden md:flex"
          }`}
        >
          <SearchBar />

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            {user ? (
              <>
                <span className="text-textPrimary font-semibold lg:text-md md:text-md text-sm">
                  Hello, {user.username}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="bg-accent text-primary px-3 py-1 rounded hover:bg-opacity-80 transition lg:text-md md:text-md text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-textPrimary font-semibold hover:underline lg:text-md md:text-md text-sm"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-accent text-primary px-3 py-1 rounded hover:bg-opacity-80 transition lg:text-md md:text-md text-sm"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
