import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GetMovieDetails from "./components/GetMovieDetails";
import GetTvShowDetails from "./components/GetTvShowDetails";
import DiscoverMovies from "./components/pages/DiscoverMovies";
import DiscoverTvShows from "./components/pages/DiscoverTvShows";
import PopularMovies from "./components/pages/PopularMovies";
import PopularTvShows from "./components/pages/PopularTvShows";
import Trending from "./components/pages/Trending";
import OnTheAir from "./components/pages/OnTheAir";
import TopRatedMovies from "./components/pages/TopRatedMovies";
import TopRatedTvShows from "./components/pages/TopRatedTvShows";
import Airing from "./components/pages/Airing";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<DiscoverMovies />} />
                <Route path="/tvshows" element={<DiscoverTvShows />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/popular_tvshows" element={<PopularTvShows />} />
                <Route path="/popular_movies" element={<PopularMovies />} />
                <Route path="/airing" element={<Airing />} />
                <Route path="/on_air" element={<OnTheAir />} />
                <Route path="/toprated_movies" element={<TopRatedMovies />} />
                <Route path="/toprated_tvshow" element={<TopRatedTvShows />} />
                <Route path="/movies/:id" element={<GetMovieDetails />} />
                <Route path="/tvshows/:id" element={<GetTvShowDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
