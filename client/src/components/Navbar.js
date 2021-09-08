import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <div className="search">
        <input type="search" name="search" id="searech" />
      </div>

      <div className="navlinks">
        <ul>
          <li className="nav-items">
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>

          <li className="nav-items">
            <Link to="/advices" className="nav-item">
              Advices
            </Link>
          </li>

          <li className="nav-items">
            <Link to="/services" className="nav-item">
              Services
            </Link>
          </li>

          <li className="nav-items">
            <Link to="/chats" className="nav-item">
              Chats
            </Link>
          </li>

          <li className="nav-items">
            <Link to="/login" className="nav-item">
              Login
            </Link>
          </li>

          <li className="nav-items">
            <Link to="/signup" className="nav-item">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
