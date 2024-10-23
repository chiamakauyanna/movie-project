import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p";

const GetTvShows = () => {
    const [tvShows, setTvShows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    setError(error.response.data);
                    setError(error.response.status);
                    setError(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    setError(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setError("Error", error.message);
                }
            } finally {
                setLoading(false);
            }
        };
        getTvShows();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body px-4">
            <div className="h-32 "></div>
            <div className="flex">
                <ul className="flex-initial w-56">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/tvshows">Tv Shows</Link>
                    </li>
                    <li>
                        <Link to="/favourites">Favourites</Link>
                    </li>
                </ul>
                <ul className="flex-1 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 ">
                    {tvShows.map((tvShow, index) => (
                        <li
                            key={`${index}-${tvShow.id}`}
                            className="relative pb-6 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-105 "
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
    );
};

export default GetTvShows;
