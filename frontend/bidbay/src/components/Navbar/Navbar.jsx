import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
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
        <li>
          <Link className="link" to="/logout">
            Logout
          </Link>
        </li>
      </ul>
      <div className="nav-connect">Connect With Us</div>
    </div>
  );
};

export default Navbar;
