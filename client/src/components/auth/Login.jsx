import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { loginUser } from "../../services/authService";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      login(res.data);
      navigate("/movies");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-textPrimary font-body relative px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-accent text-sm underline hover:text-accent/80 transition flex items-center gap-3"
      >
        <MdOutlineArrowBackIos /> Back
      </button>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-secondary p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="lg:text-2xl md:text-1xl text-xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-white text-black rounded-lg outline-none"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-white text-black rounded-lg outline-none"
        />

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-accent hover:bg-accentDark text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

        {/* Link to Register */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-accent underline hover:text-accent/80"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
