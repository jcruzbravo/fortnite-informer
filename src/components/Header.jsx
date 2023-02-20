import React from "react";
import '@styles/Header.scss';
import logo from '@assets/logo.png';

const Header = () => {
  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="Logo Fortnite" />
        <ul>
          <li><a href="">Shop</a></li>
          <li><a href="">Cosmetics</a></li>
          <li><a href="">Map</a></li>
          <li><a href="">Creator code</a></li>
          {/* <li>Search</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
