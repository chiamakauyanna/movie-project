import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetMovies from "./components/GetMovies";
import GetTvShows from "./components/GetTvShows";
import Home from "./components/Home";
import GetMovieDetails from "./components/GetMovieDetails";
import GetTvShowDetails from "./components/GetTvShowDetails";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<GetMovies />} />
                <Route path="/tvshows" element={<GetTvShows />} />
                <Route path="/movies/:id" element={<GetMovieDetails />} />
                <Route path="/tvshows/:id" element={<GetTvShowDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
