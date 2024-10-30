import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div
            className="container max-w-none"
        >
            <img 
            src="https://nkpremices.com/content/images/size/w1600/2021/08/mih10uhu1464fx1kr0by-2.jpg" 
            alt="background image" 
            loading="lazy"
            className="relative"/>
            <div className="bg-black absolute inset-0 opacity-50"></div>
            <div className="flex flex-col justify-center items-center z-10 absolute inset-0">
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
