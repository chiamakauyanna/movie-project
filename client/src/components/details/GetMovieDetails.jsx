import { useParams, useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft, FaHeart } from "react-icons/fa";
import Loading from "../common/Loading";
import { useAuth } from "../../context/AuthContext";
import { addFavorite, removeFavorite } from "../../services/userService";
import { useFetchItemsDetails } from "../../hooks/useFetchItemsDetails";

const imageUrl = import.meta.env.VITE_MOVIE_IMAGE_URL;

const GetMovieDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { details, casts, loading, error, isFavorite, setIsFavorite } =
    useFetchItemsDetails(id, user, "movie");

  const handleBackButton = () => navigate(-1);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await removeFavorite(details.id);
        setIsFavorite(false);
      } else {
        await addFavorite({
          id: details.id,
          title: details.title,
          poster_path: details.poster_path,
          release_date: details.release_date,
          media_type: "movie",
        });
        setIsFavorite(true);
      }
    } catch (err) {
      console.error("Error toggling favorite", err);
    }
  };

  if (loading) return <Loading />;
  if (error)
    return (
      <div className="flex w-3/4 h-screen m-auto justify-center items-center font-bold">
        <p>{error}</p>
      </div>
    );

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <div className="absolute z-10 p-6">
         <button
          onClick={handleBackButton}
          className="flex gap-3 transition duration-300 ease-in-out hover:text-accent items-center"
        >
          <FaArrowAltCircleLeft />
          Back
        </button>
      </div>

      <img
        src={`${imageUrl}/original/${details.backdrop_path}`}
        alt="movie backdrop"
        className="relative w-full"
      />

      <div className="absolute top-20 bg-secondary opacity-90">
        <div className="flex gap-8 items-center px-8 mt-4 lg:flex-row flex-col md:flex-row">
          <div>
            <img
              src={`${imageUrl}/w300/${details.poster_path}`}
              alt="movie poster"
               loading="lazy"
              className="rounded"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-14 mb-3">
              <h2 className="text-3xl font-bold font-header">
                {details.title} ({new Date(details.release_date).getFullYear()}){" "}
                <span className="bg-gold text-primary font-bold px-2 inline-flex rounded-lg text-base">
                  {details.vote_average?.toFixed(1) || "N/A"}
                </span>
              </h2>

              {/* Favorite button */}
              {user && (
                <button
                  onClick={toggleFavorite}
                  className={`transition-colors duration-300 ${
                    isFavorite
                      ? "text-red-600 hover:text-red-700"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <FaHeart size={28} />
                </button>
              )}
            </div>

            <p className="text-gray-400">
              {details.genres?.map((g) => g.name).join(" - ") || "No genres"}
            </p>
            <div className="mt-6 text-xl">
              <p className="italic text-gray-400 font-mono">
                {details.tagline}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-heading font-bold text-accent">Overview</h3>
              <p className="font-mono text-gray-300">{details.overview}</p>
            </div>

            <div className="mt-4 flex gap-1.5">
              <h3 className="font-heading font-bold text-accent">Runtime -</h3>
              <p className="italic text-lg">{details.runtime} min</p>
            </div>

            <div className="flex gap-1.5">
              <h3 className="font-heading font-bold text-accent">Language -</h3>
              <p>{details.original_language}</p>
            </div>
          </div>
        </div>

        {/* Casts */}
        <div className="p-4">
          <h2 className="font-heading py-2 pl-4 text-2xl font-bold">Casts</h2>
          <ul className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 md:gap-8 lg:gap-9">
            {casts.map((cast) => (
              <li key={cast.id}>
                <img
                  src={
                    cast.profile_path
                      ? `${imageUrl}/w300/${cast.profile_path}`
                      : "https://placehold.co/92x138?text=No+Image"
                  }
                  alt={cast.name}
                  className="rounded w-full"
                />
                <div className="text-sm mt-2">
                  <p className="font-semibold truncate">{cast.name}</p>
                  <p className="text-gray-500">{cast.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetMovieDetails;
