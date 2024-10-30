import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./common/Loading";
import SideMenu from "./common/SideMenu";
import Header from "./common/Header";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p";

const GetMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `${apiUrl}/discover/movie?api_key=${apiKey}`
                );
                setMovies(response.data.results);
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    setError(
                        "We're having trouble loading the information right now. Please refresh the page or try again later."
                    );
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    setError(
                        "Oops! It seems there’s a problem with your connection. Please check your internet and try again."
                    );
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setError(`Error: ${error.message}. Please try again.`);
                }
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, []);

    const handleClick = (id) => {
        navigate(`/movies/${id}`);
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
                        {movies.map((movie, index) => (
                            <li
                                key={`${index}-${movie.id}`}
                                className="relative pb-6 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-105"
                                onClick={() => handleClick(movie.id)}
                            >
                                <div>
                                    <img
                                        src={`${imageUrl}/w185/${movie.poster_path}`}
                                        alt="Movie poster"
                                        loading="lazy"
                                        className="rounded md:w-[195px] lg:w-[300px]"
                                    />
                                </div>
                                <div className="transition ease-in-out duration-500 hover:opacity-50 hover:bg-accent absolute inset-0 rounded"></div>
                                <div
                                    className="bg-gold text-secondary text-xs md:text-sm lg:text-sm py-1 px-1 md:px-4 lg:px-4 font-bold md:rounded-tl-full md:rounded-br-full
                            lg:rounded-tl-full lg:rounded-br-full 
                            rounded-tl-lg rounded-br-lg  absolute top-0 right-0"
                                >
                                    <p>{movie.vote_average.toFixed(1)}</p>
                                </div>
                                <div className="truncate pt-3">
                                    <h2 className="font-bold font-header overflow-hidden text-ellipsis whitespace-nowrap md:text-1xl lg:text-1xl text-xs">
                                        {movie.title}
                                    </h2>
                                    <p className="text-xs pt-2 opacity-50">
                                        {movie.release_date}
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

export default GetMovies;
