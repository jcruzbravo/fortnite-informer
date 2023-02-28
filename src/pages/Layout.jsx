import React from "react";
import "@styles/Header.scss";
import logo from "@assets/logo.png";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <Link to="/">
            <img src={logo} alt="Logo Fortnite" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
