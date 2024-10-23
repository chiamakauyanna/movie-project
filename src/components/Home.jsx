import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container max-w-none bg-secondary h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                 <h1 className="text-5xl font-heading text-accent font-bold mb-4">
                Welcome to Movie App
            </h1>
            <p className="text-lg text-textPrimary font-body mb-4">
                Explore our vast collection of cinematic masterpieces.
            </p>
            <button className="px-3 py-1 bg-gold font-heading rounded mx-auto font-bold ">
                <Link to="/movies">View Site</Link>
            </button>
            </div>
        </div>
    );
};

export default Home;
