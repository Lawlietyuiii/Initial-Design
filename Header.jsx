import React from "react";
import "../styles/header.css";

function Header({ activePage, onNavigate }) {
  return (
    <>
      <div className="announcement">
        Welcome to my website. Explore, read, and get to know me!
      </div>

      <header className="site-header">
        <div className="header-content">
          <a className="brand" href="#home" onClick={() => onNavigate("home")}>
            <span className="brand-mark">C</span>
            <span>My Website</span>
          </a>
          <p className="header-tagline">
            Thoughts, stories, and a little bit about me.
          </p>
        </div>
      </header>

      <nav className="navbar" aria-label="Main navigation">
        <button
          className={activePage === "home" ? "nav-link active" : "nav-link"}
          onClick={() => onNavigate("home")}
        >
          Home
        </button>
        <button
          className={activePage === "about" ? "nav-link active" : "nav-link"}
          onClick={() => onNavigate("about")}
        >
          About
        </button>
      </nav>
    </>
  );
}

export default Header;
