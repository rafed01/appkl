// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const loginButt = () => {
    navigate("/login");
  };

  const signupButt = () => {
    navigate("/signup");
  };
  return (
    <div>
      <h2>Welcome to the Homepage</h2>{" "}
      <button className="form-button" onClick={loginButt}>
        Login
      </button>
      <button className="form-button" onClick={signupButt}>
        Signup
      </button>
    </div>
  );
};

export default Home;
