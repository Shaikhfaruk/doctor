import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navItems = document.querySelector(".nav-items");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.add("open");
        navItems.classList.add("nav-items-open");
        menuOpen = true;
      } else {
        menuBtn.classList.remove("open");
        navItems.classList.remove("nav-items-open");
        menuOpen = false;
      }
    });
  });
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Doctor</Link>
      </div>
      <div className="search">
        <input type="search" name="search" id="search" />
        <BiSearch className="search-icon" />
      </div>

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
      <div className="menu-btn">
        <div className="menu-btn-burger"></div>
      </div>
    </div>
  );
};

export default Navbar;
