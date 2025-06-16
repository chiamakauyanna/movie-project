import { useParams, useNavigate } from "react-router-dom";
import Loading from "../common/Loading";
import { FaArrowAltCircleLeft, FaHeart } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { addFavorite, removeFavorite } from "../../services/userService";
import { useFetchItemsDetails } from "../../hooks/useFetchItemsDetails";

const imageUrl = import.meta.env.VITE_MOVIE_IMAGE_URL;

const GetTvShowDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const { details, casts, loading, error, isFavorite, setIsFavorite } =
    useFetchItemsDetails(id, user, "tv");

  const handleBackButton = () => navigate(-1);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await removeFavorite(details.id);
        setIsFavorite(false);
      } else {
        await addFavorite({
          id: details.id,
          title: details.name,
          poster_path: details.poster_path,
          release_date: details.first_air_date,
          media_type: "tv",
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
    <div className="container max-w-none bg-primary text-textPrimary font-body max-h-full">
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
        alt="Tv Show backdrop"
        loading="lazy"
        className="relative w-full"
      />
      <div className="absolute top-20 bg-secondary opacity-90">
        <div className="flex gap-8 items-center px-8 mt-4 md:flex-row lg:flex-row flex-col">
          {/* poster path */}
          <div className="flex-initial">
            <img
              src={`${imageUrl}/w300/${details.poster_path}`}
              alt="tvShow poster"
              loading="lazy"
              className="rounded"
            />
          </div>
          {/* Details title & release date */}
          <div className="flex-1">
            <div className="flex items-center gap-14 mb-3">
              <h2 className="text-3xl font-bold font-header">
                {details.name} (
                {new Date(details.first_air_date).getFullYear()}){" "}
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

            <div className="flex gap-1.5 mt-4">
              <h3 className="font-heading font-bold text-accent">Language -</h3>
              <p>{details.original_language}</p>
            </div>

            <div className="flex gap-1.5">
              <h3 className="font-heading font-bold text-accent">
                No of seasons -
              </h3>
              <p className="italic text-lg">{details.number_of_seasons}</p>
            </div>

            <div className="flex gap-1.5">
              <h3 className="font-heading font-bold text-accent">
                No of episodes -
              </h3>
              <p className="italic text-lg">{details.number_of_episodes}</p>
            </div>
          </div>
        </div>

        {/* Casts */}
        <div className="p-4">
          <h2 className="font-heading py-2 pl-4 text-2xl font-bold">Casts</h2>
          <div>
            <ul className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 whitespace-nowrap md:gap-8 lg:gap-9 gap-2">
              {casts.map((cast) => (
                <li key={cast.id}>
                  <img
                    src={`${imageUrl}/w300/${cast.profile_path}`}
                    alt={cast.name}
                    className="rounded w-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/92x138?text=No+Image";
                    }}
                  />
                  <div className="text mt-2">
                    <p className="font-semibold truncate text-xs">
                      {cast.name}
                    </p>
                    <p className="text-gray-500 text-wrap text-xs">
                      {cast.character}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTvShowDetails;
