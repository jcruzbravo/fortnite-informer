import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import "@styles/Layout.scss";
import logo from "@assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import MenuMobile from "@containers/MenuMobile";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav>
        <div className="menu-mobile-icon" onClick={() => handleMenuClick()}>
          <FaBars />
        </div>
        {showMenu && <MenuMobile/>}
        <div className="navbar-left">
          <img src={logo} alt="Logo Fortnite" />
        </div>
        <div className="navbar-right">
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
