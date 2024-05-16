import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from "../../constants";

const Navbar = () => {
  // Retrieve ACCESS_TOKEN from localStorage
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  // Check if the ACCESS_TOKEN exists to determine authentication status
  const isAuthenticated = accessToken !== null;

  const handleLogout = () => {
    // Clear the access token from localStorage
    localStorage.removeItem(ACCESS_TOKEN);
    // Refresh the page after logging out
    window.location.reload();
  };

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/bids">
            Bids
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/user">
            Profile
          </Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link className="link" to="/logout" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
      <div className="nav-connect">Connect With Us</div>
    </div>
  );
};

export default Navbar;
