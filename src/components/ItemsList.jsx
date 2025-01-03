import SideMenu from "./common/SideMenu";
import Header from "./common/Header";
import ItemsCard from "./ItemsCard";
import Loading from "./common/Loading";

const ItemsList = ({ title, items = [], loading, error, onItemClick }) => {
    return (
        <div className="flex">
            <div className="flex-initial w-[30%]">
             <SideMenu />   
            </div>
            
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <h2 className="text-2xl text-gray-100 pl-4 pt-2 font-heading">
                        {title}
                    </h2>
                <ul className="flex-1 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 px-4 py-8">
                    {loading && items.length === 0 ? (
                        <Loading />
                    ) : error ? (
                        <div className="flex w-3/4 h-screen m-auto justify-center items-center font-bold">
                            <p>{error}</p>;
                        </div>
                    ) : (
                        <>
                            {items.map((item, index) => (
                                <ItemsCard
                                    key={`${index}-${item.id}`}
                                    id={item.id}
                                    poster_path={item.poster_path}
                                    title={item.title || item.name}
                                    release_date={
                                        item.release_date || item.first_air_date
                                    }
                                    vote_average={item.vote_average}
                                    handleClick={onItemClick}
                                    imageUrl="https://image.tmdb.org/t/p"
                                />
                            ))}
                        </>
                    )}
                </ul>
                </div>
            </div>
        </div>
    );
};

export default ItemsList;
