const ItemCard = ({ item, handleClick, imageUrl }) => {
  const {
    id,
    title,
    name,
    media_type,
    poster_path,
    release_date,
    first_air_date,
    vote_average,
  } = item;

  const displayTitle = title || name;
  const displayDate = release_date || first_air_date;

  return (
    <li
      className="relative pb-6 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-105"
      onClick={() => handleClick(id, media_type)}
    >
      <div>
        <img
          src={`${imageUrl}/w185/${poster_path}`}
          alt={`${displayTitle} poster`}
          loading="lazy"
          className="rounded w-full"
        />
      </div>
      <div className="transition ease-in-out duration-500 hover:opacity-50 hover:bg-accent absolute inset-0 rounded" />
      <div
        className="bg-gold text-secondary text-xs md:text-sm py-1 px-4 font-bold rounded-tl-lg rounded-br-lg absolute top-0 right-0"
      >
        <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
      </div>
      <div className="truncate pt-3">
        <h2 className="font-bold text-xs md:text-lg truncate">{displayTitle}</h2>
        <p className="text-xs pt-2 opacity-50">{displayDate}</p>
      </div>
    </li>
  );
};

export default ItemCard;
