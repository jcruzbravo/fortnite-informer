import React from "react";
import "@styles/Footer.scss";
import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import Twitter from "./Icons/Twitter";
import Twitch from "./Icons/Twitch";
import Github from "./Icons/Github";

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="icons-social-media">
              <Facebook />
              <Twitter />
              <Twitch />
              <Github />
              <Instagram />
            </div>

            <div className="description">
              <p>&copy; 2023 Joaquin. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
