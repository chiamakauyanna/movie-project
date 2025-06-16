import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../layouts/Header";
import ItemsCard from "./ItemsCard";
import Loading from "./Loading";
import SideMenu from "../layouts/SideMenu";

const ItemsList = ({
  title,
  mediaType = "movie",
  onItemClick,
  fetchFunction,
  staticItems = null,
}) => {
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError("");

      try {
        if (staticItems) {
          setItems(staticItems);
        } else {
          const requestConfig =
            typeof fetchFunction === "function"
              ? fetchFunction({ genre, rating, sortBy })
              : fetchFunction;

          const res = await axios(requestConfig);
          setItems(res.data.results);
        }
      } catch (err) {
        setError("Failed to load items.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [fetchFunction, genre, rating, sortBy, staticItems]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-primary text-textPrimary">
      <aside className="md:w-72 lg:w-80">
        <SideMenu
          genre={genre}
          setGenre={setGenre}
          rating={rating}
          setRating={setRating}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </aside>
      <main className="flex-1 flex flex-col">
        <Header />
        <h2 className="text-2xl text-gray-100 pl-4 pt-4 font-heading">
          {title}
        </h2>

        <section className="flex-1 px-4 py-6">
          {loading ? (
            <div className="flex w-full justify-center items-center">
              <Loading />
            </div>
          ) : error ? (
            <div className="flex w-full h-[60vh] justify-center items-center font-bold text-red-400">
              {error}
            </div>
          ) : items.length === 0 ? (
            <div className="text-center text-gray-300">No results found.</div>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {items.map((item) => (
                <ItemsCard
                  key={item.id}
                  item={item}
                  imageUrl="https://image.tmdb.org/t/p"
                  handleClick={onItemClick}
                  mediaType={mediaType}
                />
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default ItemsList;
