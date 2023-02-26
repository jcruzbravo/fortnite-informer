import React from "react";
import "@styles/Header.scss";
import logo from "@assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="navbar">
        <Link>
          <img src={logo} alt="Logo Fortnite" />
        </Link>
        <ul>
          <li>
            <Link to="/shop"></Link>
          </li>
          <li>
            <Link to="/map"></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
