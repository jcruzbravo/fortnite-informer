const colorTwitter = "#55acee";

import React from "react";
import { FaTwitter } from "react-icons/fa";

const Twitter = () => {
  return (
    <a
      href="https://twitter.com/Joaacooo___"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter color={colorTwitter} size={28} />
    </a>
  );
};

export default Twitter;
