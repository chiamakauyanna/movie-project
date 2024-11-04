const ItemsCard = ({
    id,
    poster_path,
    title,
    release_date,
    vote_average,
    handleClick,
    imageUrl,
}) => {
    return (
        <li
            className="relative pb-6 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-105"
            onClick={() => handleClick(id)}
        >
            <div>
                <img
                    src={`${imageUrl}/w185/${poster_path}`}
                    alt={`${title} poster`}
                    loading="lazy"
                    className="rounded md:w-[195px] lg:w-[300px]"
                />
            </div>
            <div className="transition ease-in-out duration-500 hover:opacity-50 hover:bg-accent absolute inset-0 rounded"></div>
            <div
                className="bg-gold text-secondary text-xs md:text-sm lg:text-sm py-1 px-1 md:px-4 lg:px-4 font-bold md:rounded-tl-full md:rounded-br-full
                            lg:rounded-tl-full lg:rounded-br-full 
                            rounded-tl-lg rounded-br-lg absolute top-0 right-0"
            >
                <p>{vote_average.toFixed(1)}</p>
            </div>
            <div className="truncate pt-3">
                <h2 className="font-bold font-header overflow-hidden text-ellipsis whitespace-nowrap md:text-1xl lg:text-1xl text-xs">
                    {title}
                </h2>
                <p className="text-xs pt-2 opacity-50">{release_date}</p>
            </div>
        </li>
    );
};

export default ItemsCard;
