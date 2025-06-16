import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-primary text-textPrimary font-body flex flex-col">

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-32 bg-secondary rounded-b-3xl shadow-lg">
        
        {/* Text Content */}
        <div className="max-w-lg space-y-6 text-center md:text-left md:flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Your Next Favorite Movie or TV Show
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Dive into trending, top rated, and upcoming movies and TV shows all in one place.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/register"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold py-3 px-6 rounded-lg transition"
            >
              Get Started
            </Link>
            <Link
              to="/movies"
              className="border border-accent hover:bg-accent hover:text-primary font-semibold py-3 px-6 rounded-lg transition"
            >
              Browse Movies
            </Link>
          </div>
        </div>

        {/* Bigger Image or Illustration */}
        <div className="mb-8 md:mb-0 md:flex-1 max-w-full">
          <img
            src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80"
            alt="Watching movies"
            className="rounded-xl shadow-lg w-full max-w-xl mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 px-8 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="bg-secondary p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Curated Content</h3>
            <p className="text-gray-300">
              Handpicked selections to keep you up-to-date with the best movies and TV shows.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Personalized Watchlist</h3>
            <p className="text-gray-300">
              Save your favorites and get recommendations tailored just for you.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Seamless Experience</h3>
            <p className="text-gray-300">
              Responsive design and fast navigation on any device.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action Footer */}
      <section className="mt-24 bg-accent text-primary py-12 px-8 rounded-t-3xl text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Join thousands of users and start your entertainment journey today!
        </p>
        <Link
          to="/register"
          className="inline-block bg-primary text-accent px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Create an Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-gray-400 text-sm mt-auto py-6 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} YourAppName. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
};

export default Home;
