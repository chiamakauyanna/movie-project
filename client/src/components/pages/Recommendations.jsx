import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getFavorites } from "../../services/userService";
import { fetchRecommendations } from "../../services/fetchMovieApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";

const Recommendations = () => {
  const { user } = useAuth();
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecs = async () => {
      try {
        const favRes = await getFavorites();
        const favorites = favRes.data || [];
        const favoriteMovies = favorites.filter(
          (item) => item.media_type === "movie" || item.media_type === "tv"
        );

        const allRecs = [];
        for (let fav of favoriteMovies) {
          const { id, media_type } = fav;
          const config = fetchRecommendations(id, media_type);
          const recRes = await axios.request(config);

          const results = recRes.data?.results || [];
          const recsWithType = results.slice(0, 3).map((rec) => ({
            ...rec,
            media_type: rec.media_type || media_type,
          }));

          allRecs.push(...recsWithType);
        }

        // Remove duplicates by ID
        const uniqueRecs = Array.from(
          new Map(allRecs.map((item) => [item.id, item])).values()
        );

        setRecommendations(uniqueRecs);
      } catch (err) {
        console.error("Failed to fetch recommendations.", err);
      }
    };

    if (user) fetchRecs();
  }, [user]);

  const handleClick = (id) => {
    const item = recommendations.find((fav) => fav.id === id);
    if (!item) return;
    const route = item.media_type === "tv" ? "tvshows" : "movies";
    navigate(`/${route}/${item.id}`);
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-textPrimary text-xl font-bold bg-primary">
        Please log in to get your personalized recommendations.
      </div>
    );
  }

  return (
    <ItemsList
      title="Recommended for You"
      onItemClick={handleClick}
      staticItems={recommendations}
    />
  );
};

export default Recommendations;
