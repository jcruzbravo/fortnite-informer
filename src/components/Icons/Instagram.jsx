import React from "react";
import { FaInstagram } from "react-icons/fa";

const colorInstagram = "#ac2bac";
const Instagram = () => {
  return (
    <a
      href="https://www.instagram.com/1tsjoaco/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram color={colorInstagram} size={28} />
    </a>
  );
};

export default Instagram;
