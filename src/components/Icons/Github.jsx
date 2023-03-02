import React from "react";
import { FaGithub } from "react-icons/fa";

const colorGithub = "#333333";
const Github = () => {
  return (
    <a
      href="https://github.com/jcruzbravo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub color={colorGithub} style={{ filter: "invert(1)" }} size={28} />
    </a>
  );
};

export default Github;
