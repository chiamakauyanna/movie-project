import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p";

const GetMovieDetails = () => {
    const [details, setDetails] = useState({});
    const [casts, setCasts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getMovieDetails = async () => {
            if (!id) return;

            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `${apiUrl}/movie/${id}?api_key=${apiKey}`
                );

                const castResponse = await axios.get(
                    `${apiUrl}/movie/${id}/credits?api_key=${apiKey}`
                );
                setDetails(response.data);
                setCasts(castResponse.data.cast);
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    setError(error.response.status);
                } else if (error.request) {
                    // The request was made but no response was received
                    setError(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };
        getMovieDetails();
    }, [id]);

    const handleBackButton = () => {
        navigate(-1);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className="container max-w-none bg-primary text-textPrimary font-body px-4">
            <div className="absolute z-10 p-6">
                <button onClick={handleBackButton}>Back</button>
            </div>
            <img
                src={`${imageUrl}/original/${details.backdrop_path}`}
                alt="movie backdrop"
                loading="lazy"
                className="relative h-screen w-screen"
            />
            <div className="absolute inset-0 bg-primary opacity-75 flex gap-8 items-center px-8">
                <div className="flex-initial ">
                    <img
                        src={`${imageUrl}/w300/${details.poster_path}`}
                        alt="tvShow poster"
                        loading="lazy"
                        className="rounded"
                    />
                </div>
                {/* Details title */}
                <div className="flex-1">
                    <div>
                        <h2 className="font-bold font-header text-3xl mb-3">
                            {details.title} ({" "}
                            {new Date(details.release_date).getFullYear()} )
                        </h2>
                    </div>

                    {/* details genre */}
                    <div className="-mt-2">
                        <p>
                            {details.genres
                                ?.map((genre) => genre.name)
                                .join(", ") || "No genres available"}
                        </p>
                    </div>

                    {/* details runtime */}
                    <div>
                        <p className="italic text-lg mt-3">
                            {details.runtime} min
                        </p>
                    </div>

                    <div>
                        {/* Details Rating */}
                        <div className="bg-gold flex gap-1 text-primary font-bold rounded px-2 w-32 items-center justify-center mt-3">
                            <h3>Rating -</h3>
                            <p>
                                {details.vote_average
                                    ? details.vote_average.toFixed(1)
                                    : "N/A"}
                            </p>
                        </div>

                        {/* details language */}
                        <div className="flex gap-1 mt-4">
                            <h3 className="pt-2 font-heading font-bold text-accent">
                                Language -
                            </h3>
                            <p className=" pt-2">{details.original_language}</p>
                        </div>

                        {/* Details tagline */}
                        <div>
                            <h3 className="pt-2 font-heading font-bold text-accent">
                                Tagline
                            </h3>
                            <p className=" italic font-heading">
                                {details.tagline}
                            </p>
                        </div>

                        {/* Details Overview */}
                        <div>
                            <h3 className="pt-4 font-heading font-bold text-accent">
                                Overview
                            </h3>
                            <p className=" pt-2 text-base">
                                {details.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* cast */}
            <ul className="bg-accent text-textPrimary my-8 mx-6 flex gap-2 truncate overflow-x-auto">
                {casts.map((cast) => (
                    <li key={cast.id} className="bg-secondary pr-1">
                        <img
                            src={`${imageUrl}/w92/${cast.profile_path}`}
                            alt=""
                        />
                        <p className="text-sm">{cast.name}</p>
                        <p>as</p>
                        <p>{cast.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetMovieDetails;
