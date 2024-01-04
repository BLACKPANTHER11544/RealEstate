import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formdata, setformdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      console.log(data);
      setLoading(false);
      setError(null);
      navigate("/sign_in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg focus:outline-none"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none"
          id="email"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opdacity-80"
        >
          {loading ? "Loading...." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign_up">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
