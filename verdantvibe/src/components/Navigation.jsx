import { Outlet, Link } from "react-router-dom";

import "./css/Navigation.css";
import logo from "./images/freelogo.jpg";

function Navigation() {
  return (
    <nav id="main-nav" className="columns three center">
      <ul className="hide-for-small">
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
      <ul className="hide-for-small">
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
  );
}

export default Navigation;
