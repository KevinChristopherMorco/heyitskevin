import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo/dark-theme.png";

const Header = ({ setActive }) => {
  return (
    <header>
      <nav className="my-8 mx-4 p-3 flex justify-between items-center text-accent border-2 border-accent rounded-xl">
        <img src={logo} className="w-1/3 h-1/3" />
        <FontAwesomeIcon
          className="color-accent text-lg cursor-pointer"
          icon={faBars}
          onClick={() => setActive(true)}
        />
      </nav>
    </header>
  );
};

export default Header;
