import SearchBar from "./SearchBar";
import User from "./User";
import Filter from "./Filter"

const Header = () => {
    return (
        <div>
            <div className="bg-secondary flex justify-between px-8 py-8 items-center">
                <div className="">
                    <Filter />
                </div>
                <div className="flex items-center gap-4">
                    <SearchBar />
                    <User />
                </div>
            </div>
        </div>
    );
};

export default Header;
