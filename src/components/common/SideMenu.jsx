import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaArrowTrendUp, FaDiamond, FaFilm, FaHeart, FaHouse, FaVideo } from "react-icons/fa6";

const SideMenu = () => {
    return (
        <div className="bg-secondary pt-10 text-gray-500 font-semibold flex-col hidden md:flex lg:flex w-1/3">
            <Logo />
            <div className="lg:flex-initial">
                <h2 className="font-heading pl-8 py-6">Main</h2>
                <ul className=" pl-10 transition ease-in-out duration-500">
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaHouse />
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaFilm />
                        <Link to="/movies">Discover</Link>
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaArrowTrendUp />
                        <Link to="/tvshows">Trending</Link>
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaVideo />
                        <Link to="/tvshows">Upcoming</Link>
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaHeart />
                        <Link to="/favourites">My Collection</Link>
                    </li>
                </ul>
            </div>

            <div className="lg:flex-initial">
                <h2 className="font-heading pl-8 pt-7">Genre</h2>
                <ul className="pl-10 mt-4 transition ease-in-out duration-500">
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaDiamond />
                        Drama
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaDiamond />
                        Horror
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaDiamond />
                        Thriller
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaDiamond />
                        Adventure
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaDiamond />
                        Documentary
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaDiamond />
                        Comedy
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;
