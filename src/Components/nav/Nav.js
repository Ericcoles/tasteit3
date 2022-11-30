import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="navbar">
      <Link to="/" className="navbar-item">
        {" "}
        Home
      </Link>
      <Link to="/recipes" className="navbar-item">
        Recipes
      </Link>
      <Link to="/addrecipe" className="navbar-item">
        Add New Recipes
      </Link>
    </section>
  );
};

export default Nav;
