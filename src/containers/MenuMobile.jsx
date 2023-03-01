import React from "react";
import { Link } from "react-router-dom";
import "@styles/MenuMobile.scss";

const MenuMobile = () => {
  return (
    <div className="MenuMobile">
      <div className="menu-mobile-container">
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
    </div>
  );
};

export default MenuMobile;
