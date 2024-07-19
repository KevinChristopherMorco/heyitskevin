import React from "react";
import { IconX } from "@tabler/icons-react";
import logo from "../images/logo/dark-theme.png";

const Hamburger = ({ isActive, setActive }) => {
  return (
    <div
      className={`fixed bg-[#00000080] ${
        isActive ? "w-full h-full flex justify-end" : "w-0 h-0"
      }`}
    >
      <div
        className={`w-2/3 px-6 fixed right-0 bg-primary text-accent
 ${isActive ? "h-full animate-slideIn " : "h-full animate-slideOut"}`}
      >
        <div className="flex py-6 justify-between items-center">
          <div className="w-20 h-5">
            <img src={logo} />
          </div>
          <div className="cursor-pointer" onClick={() => setActive(false)}>
            <IconX />
          </div>
        </div>
        <div className="h-1/3 mt-8 flex flex-col justify-between text-lg">
          <a href="#intro" onClick={() => setActive(false)}>
            Intro
          </a>
          <a href="#about" onClick={() => setActive(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setActive(false)}>
            Tech Stacks
          </a>
          <a href="#projects" onClick={() => setActive(false)}>
            Projects
          </a>
          <a href="#contacts" onClick={() => setActive(false)}>
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
