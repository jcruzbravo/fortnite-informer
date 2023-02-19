import React from "react";
import '@styles/Header.scss';
import logo from '@logo/logo.png';

const Header = () => {
  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="Logo Fortnite" />
      </div>
    </nav>
  );
};

export default Header;
