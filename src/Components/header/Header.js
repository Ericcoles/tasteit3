import React from "react";
import Nav from "../nav/Nav";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../Assets/coles.png";
const Header = () => {
  return (
    <section className="header">
      <Link to="/">
        <div>
          <img src={logo} className="logo" alt="eagle red and blue" />
        </div>
      </Link>
      <Nav />
    </section>
  );
};

export default Header;
