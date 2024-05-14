/* eslint-disable no-unused-vars */
// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Bids from "./Bids/Bids";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./pages/SingleProduct";
import BidDetails from "./pages/BidDeatails";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function SingnupAndLogout() {
  localStorage.clear();
  return <Signup />;
}

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/signup" element={<SingnupAndLogout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/bids"
            element={
             
                <Bids />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/bids/:id" element={<BidDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
