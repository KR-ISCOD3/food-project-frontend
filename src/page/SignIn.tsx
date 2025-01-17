import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/ReactAuthContext";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

function SignIn() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
      const response = await axios.post("hhttps://foot-app-backend.onrender.com/api/auth/login", { email, password });

      if (response.status === 200) {
        const userData = response.data.user;
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSuccess = async (response: any) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", { token: response.credential });

      if (res.status === 200) {
        setUser(res.data.user);
        navigate("/");
      } else {
        setError("Google login failed");
      }
    } catch (error) {
      setError("Error verifying Google login");
    }
  };

  
  return (
    <div className="container-fluid d-grid align-content-center font-afacad">
      <div className="col-12 col-md-5 col-lg-3 mx-auto p-3 pt-5 mt-5">
        <h1 className="text-center font-bold m-0">Welcome Back!</h1>
        <p className="text-center mb-3">Let’s get you back to your journey!</p>
        <form onSubmit={handleSubmit} className="border-b-2 pb-10">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control shadow-none border border-1 my-3"
            placeholder="Enter Your Username or Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control shadow-none border border-1 my-3"
            placeholder="Enter Your Password"
          />
          <button type="submit" className="btn text-center w-100 btn-success" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </form>
        <p className="text-center pt-1 border-top mt-3">Or With</p>
        <div className="d-flex justify-content-center">
          <GoogleLogin onSuccess={handleSuccess} onError={() => setError("Google login failed")} />
        </div>
        <p className="text-center mt-3">
          Don’t have an account?
          <NavLink to={"/signup"} className="text-decoration-none">
            {" "}
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
