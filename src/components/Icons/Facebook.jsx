import React from "react";
import { FaFacebook } from "react-icons/fa";

const colorFacebook = "#3b5998";
const Facebook = () => {
  return (
    <a
      href="https://www.facebook.com/joaquinbravo2000"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook color={colorFacebook} size={28} />
    </a>
  );
};

export default Facebook;
