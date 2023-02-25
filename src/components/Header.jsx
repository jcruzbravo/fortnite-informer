import React from "react";
import '@styles/Header.scss';
import logo from '@assets/logo.png';

const Header = () => {
  return (
    <nav>
      <div className="navbar">
        <a href="/"><img src={logo} alt="Logo Fortnite" /></a>
        <ul>
          <li><a href="./shop">Shop</a></li>
          {/* <li><a href="">Cosmetics</a></li> */}
          <li><a href="./map">Map</a></li>
          <li><a href="">Creator code</a></li>
          {/* <li>Search</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
