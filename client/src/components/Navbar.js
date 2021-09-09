import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Doctor</Link>
      </div>
      {/* <div className="search">
        <input type="search" name="search" id="searech" />
      </div> */}

      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/advices" className="nav-item">
            Advices
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/services" className="nav-item">
            Services
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/chats" className="nav-item">
            Chats
          </Link>
        </li>
      </ul>

      <div className="loginbtn">
        <button className="btn">
          <Link to="/login">Login</Link>
        </button>

        <button className="btn">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
