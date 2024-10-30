import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./common/Loading";
import SideMenu from "./common/SideMenu";
import SearchBar from "./common/SearchBar";
import User from "./common/User";
import Filter from "./common/Filter";
import Header from "./common/Header";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p";

const GetTvShows = () => {
    const [tvShows, setTvShows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const getTvShows = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `${apiUrl}/discover/tv?api_key=${apiKey}`
                );
                setTvShows(response.data.results);
            } catch (error) {
                if (error.response) {
                    setError(
                        "We're having trouble loading the information right now. Please refresh the page or try again later."
                    );
                } else if (error.request) {
                    setError(
                        "Oops! It seems there’s a problem with your connection. Please check your internet and try again."
                    );
                } else {
                    setError(`Error: ${error.message}. Please try again.`);
                }
            } finally {
                setLoading(false);
            }
        };
        getTvShows();
    }, []);

    const handleClick = (id) => {
        navigate(`/tvshows/${id}`);
    };

    if (loading) return <Loading />;
    if (error)
        return (
            <div className="flex w-3/4 h-screen m-auto justify-center items-center font-bold">
                <p>{error}</p>;
            </div>
        );
    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body">
            <div className="flex">
                <SideMenu />
                <div>
                   <Header/>
                    <ul className="flex-1 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 px-4 py-8">
                        {tvShows.map((tvShow, index) => (
                            <li
                                key={`${index}-${tvShow.id}`}
                                className="relative pb-6 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-105"
                                onClick={() => handleClick(tvShow.id)}
                            >
                                <div className="">
                                    <img
                                        src={`${imageUrl}/w185/${tvShow.poster_path}`}
                                        alt="tvShow poster"
                                        loading="lazy"
                                        className="rounded md:w-[195px] lg:w-[300px]"
                                    />
                                </div>
                                <div className="transition ease-in-out duration-500  hover:opacity-50 hover:bg-accent absolute inset-0 rounded"></div>

                                <div className="bg-gold text-secondary text-sm py-1 px-4 font-bold rounded-tl-full rounded-br-full absolute top-0 right-0">
                                    <p className="">
                                        {tvShow.vote_average.toFixed(1)}
                                    </p>
                                </div>
                                <div className="truncate pt-3">
                                    <h2 className="font-bold font-header">
                                        {tvShow.name}
                                    </h2>
                                    <p className="text-xs pt-2 opacity-50">
                                        {tvShow.first_air_date}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GetTvShows;
