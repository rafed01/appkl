// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./images/home.jpg";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div id="home">
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home
