import React from "react";
import { FaTwitch } from "react-icons/fa";

const colorTwitch = "#a970ff";
const Twitch = () => {
  return (
    <a
      href="https://www.twitch.tv/1tsjoaco"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitch color={colorTwitch} size={28} />
    </a>
  );
};

export default Twitch;
