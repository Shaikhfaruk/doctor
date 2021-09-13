import React from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiCommentError, BiChat } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";

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
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for Consult"
        />
        <BiSearch className="search-icon" />
      </div>

      <ul className="nav-items">
        <li className="nav-item">
          <BiCommentError className="nav-item-icon" />
          <Link to="/about" className="nav-item-link">
            About
          </Link>
        </li>

        <li className="nav-item">
          <FaHandsHelping className="nav-item-icon" />
          <Link to="/advices" className="nav-item-link">
            Advices
          </Link>
        </li>

        <li className="nav-item">
          <RiServiceFill className="nav-item-icon" />
          <Link to="/services" className="nav-item-link">
            Services
          </Link>
        </li>

        <li className="nav-item">
          <BiChat className="nav-item-icon" />
          <Link to="/chats" className="nav-item-link">
            Chats
          </Link>
        </li>
      </ul>

      <div className="loginbtn">
        <button className="btn">
          <Link to="/login">Login | Register</Link>
        </button>
      </div>
      <div className="menu-btn">
        <div className="menu-btn-burger"></div>
      </div>
    </div>
  );
};

export default Navbar;
