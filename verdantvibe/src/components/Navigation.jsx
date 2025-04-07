import { Outlet, Link } from "react-router-dom";

import "./css/Navigation.css";

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
        <img className="logo" src={"https://verdant-server.onrender.com/images/freelogo.jpg"} alt="Logo" />
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
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/houseplant">House Plants</Link>
            </li>
            <li>
            <Link to="/gardening">Gardening</Link>
            </li>
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
          {/* <ul className={menuOpen?"":"hide-for-small"}>

    </ul> */}
        </div>
      </div>
    </>
  );
}

export default Navigation;
