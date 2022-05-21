import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <h1>JS Cheat-Sheet: Home</h1>
      <button type="button" className="navButton">
        Show Nav
      </button>
      <Navigation />
    </header>
  );
};

export default Header;
