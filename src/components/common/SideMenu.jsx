import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
    FaArrowTrendUp,
    FaDiamond,
    FaFilm,
    FaHeart,
    FaVideo,
} from "react-icons/fa6";

const SideMenu = () => {
    return (
        <div className="bg-secondary pt-10 text-gray-500 font-semibold flex-col hidden md:flex lg:flex w-1/2">
            <Logo />
            <div className="lg:flex-initial">
                <h2 className="font-heading pl-8 py-6">Main</h2>
                <ul className=" pl-10 transition ease-in-out duration-500">
                    <li className="mb-6">
                        <div>Discover</div>

                        <ul className="pl-6 pt-2">
                            <li className="pb-3 active:text-accent hover:text-accent flex items-center gap-2">
                                <FaFilm />
                                <Link to="/movies">Movies</Link>
                            </li>
                            <li className="active:text-accent hover:text-accent flex items-center gap-2">
                                <FaFilm />
                                <Link to="/tvshows">Tv Shows</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="mb-6 focus:text-accent hover:text-accent flex items-center gap-2">
                        <FaArrowTrendUp />
                        <Link to="/trending">Trending</Link>
                    </li>
                    <li className="mb-6">
                        Popular
                        <ul className="pl-6 pt-2">
                            <li className="pb-3 active:text-accent hover:text-accent flex items-center gap-2">
                                <FaVideo />
                                <Link to="/popular-movies">Popular Movies</Link>
                            </li>
                            <li className="active:text-accent hover:text-accent flex items-center gap-2">
                                <FaVideo />
                                <Link to="/popular-tvshows">
                                    Popular Tv Shows
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="mb-6">
                        Top Rated
                        <ul className="pl-6 pt-2">
                            <li className="pb-3 active:text-accent hover:text-accent flex items-center gap-2">
                                <FaVideo />
                                <Link to="/toprated-movies">
                                    Top Rated Movies
                                </Link>
                            </li>
                            <li className="active:text-accent hover:text-accent flex items-center gap-2">
                                <FaVideo />
                                <Link to="/toprated-tvshows">
                                    Top Rated Tv Shows
                                </Link>
                            </li>
                        </ul>
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
