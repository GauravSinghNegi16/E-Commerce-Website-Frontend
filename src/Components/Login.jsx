import React, { useState } from "react";
import { loginUser } from "../services/apiService";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginUser(formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Logged in successfully!");
      setFormData({ email: "", password: "" });
      window.location.href = "/";
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Invalid credentials. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md p-6 sm:p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-full font-medium transition text-sm sm:text-base ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {error && <p className="mt-3 text-red-500 text-center text-sm sm:text-base">{error}</p>}

        <p className="mt-4 text-center text-gray-600 text-sm sm:text-base">
          Don't have an account?{" "}
          <a href="/signup" className="text-black font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
