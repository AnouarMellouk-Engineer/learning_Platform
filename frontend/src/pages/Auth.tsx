import { useState } from "react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 relative">
        {/* 🏠 Back to Home Button */}
        <Link
          to="/"
          className="absolute top-4 right-4 text-emerald-700 font-semibold text-sm hover:underline"
        >
          ← Home
        </Link>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form className="flex flex-col space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <button
            type="submit"
            className="bg-emerald-700 hover:bg-emerald-800 text-white py-2 rounded-lg font-semibold transition-all duration-200"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span
            className="text-emerald-700 font-semibold cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
