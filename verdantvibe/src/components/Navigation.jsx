import { Outlet, Link } from "react-router-dom";

import "./css/Navigation.css";
import logo from "./images/freelogo.jpg";

import { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="main-nav" className="columns three center">
        <ul className="hide-for-small ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/houseplant">House Plants</Link>
          </li>
          <li>
            <Link to="/gardening">Gardening</Link>
          </li>
        </ul>
        <img className="logo" src={logo} alt="Logo" />
        <ul className="hide-for-small ">
          <li>
            <Link to="/care">Care</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/about">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="hide-for-large">
        <div
          id="toggle-nav"
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={menuOpen ? "" : "hide"}>
          <ul className="nav-items gallery">
            <li>
              <a href="index.html"> Home </a>
            </li>
            <li>
              <a href="house_plants.html"> House Plants </a>
            </li>
            <li>
              <a href="gardening.html"> Gardening </a>
            </li>
            <li>
              <a href="care.html"> Care </a>
            </li>
            <li>
              <a href="resources.html"> Resources </a>
            </li>
            <li>
              <a href="contact.html"> Contact </a>
            </li>
          </ul>
          {/* <ul className={menuOpen?"":"hide-for-small"}>

    </ul> */}
        </div>
      </div>
    </>
  );
}

export default Navigation;
