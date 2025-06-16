import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import GetMovieDetails from "./components/details/GetMovieDetails";
import GetTvShowDetails from "./components/details/GetTvShowDetails";
import DiscoverMovies from "./components/pages/DiscoverMovies";
import DiscoverTvShows from "./components/pages/DiscoverTvShows";
import PopularMovies from "./components/pages/PopularMovies";
import PopularTvShows from "./components/pages/PopularTvShows";
import Trending from "./components/pages/Trending";
import OnTheAir from "./components/pages/OnTheAir";
import TopRatedMovies from "./components/pages/TopRatedMovies";
import TopRatedTvShows from "./components/pages/TopRatedTvShows";
import Airing from "./components/pages/Airing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { AuthProvider } from "./context/AuthContext";
import Favorites from "./components/pages/Favorites";
import Upcoming from "./components/pages/Upcoming";
import Search from "./components/pages/Search";
import Recommendations from "./components/pages/Recommendations";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<DiscoverMovies />} />
          <Route path="/tvshows" element={<DiscoverTvShows />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/tvshows/popular" element={<PopularTvShows />} />
          <Route path="/movies/popular" element={<PopularMovies />} />
          <Route path="/tvshows/airing" element={<Airing />} />
          <Route path="/tvshows/on-air" element={<OnTheAir />} />
          <Route path="/movies/toprated" element={<TopRatedMovies />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
          <Route path="/tvshows/toprated" element={<TopRatedTvShows />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies/:id" element={<GetMovieDetails />} />
          <Route path="/tvshows/:id" element={<GetTvShowDetails />} />
           <Route path="/search" element={<Search />} />
           <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
