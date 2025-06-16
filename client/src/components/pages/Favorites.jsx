import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemsList from "../common/ItemsList";
import { useAuth } from "../../context/AuthContext";
import { getFavorites } from "../../services/userService";

const Favorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    const fetchFavorites = async () => {
      try {
        const res = await getFavorites();
        setFavorites(res.data || []);
      } catch (err) {
        console.error("Failed to load favorites. Please try again later.", err);
      } 
    };

    fetchFavorites();
  }, [user]);

  const handleClick = (id) => {
    const item = favorites.find((fav) => fav.id === id);
    if (!item) return;
    const route = item.media_type === "tv" ? "tvshows" : "movies";
    navigate(`/${route}/${item.id}`);
  };

  // Show login message if no user
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-primary text-textPrimary text-xl font-bold">
        Please log in to see your favorites.
      </div>
    );
  }

  return (
    <div className="container max-w-none bg-primary text-textPrimary font-body">
      <ItemsList
        title="Your Favorite"
        onItemClick={handleClick}
        staticItems={favorites}
      />
    </div>
  );
};

export default Favorites;
