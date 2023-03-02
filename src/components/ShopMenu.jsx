import React from "react";
import { Link } from "react-router-dom";
import '@styles/ShopMenu.scss';

const ShopMenu = () => {
  return (
    <div className="ShopMenu">
      <div className="shop-menu-container">
        <ul>
          <li>
            <Link to="/shop/featured">Featured</Link>
          </li>
          <li>
            <Link to="/shop/daily">Daily</Link>
          </li>
          <li>
            <Link to="/shop/without">Without Bundle</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopMenu;
