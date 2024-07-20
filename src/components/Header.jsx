import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IconMenu2 } from "@tabler/icons-react";

import logo from "../images/logo/logo.png";

const Header = ({ setActive }) => {
  return (
    <header className="fixed w-[90%] left-1/2 -translate-x-1/2">
      <nav className="flex justify-between items-stretch bg-primary/60 text-accent border-2 border-accent rounded-xl">
        <div className="m-4">
          <img src={logo} className="h-8 w-8" />
        </div>
        <div className="flex items-end">
          <button
            className="h-4/5 p-3 border-t border-l rounded-tl-xl border-accent text-lg color-accent cursor-pointer "
            onClick={() => setActive(true)}
          >
            <IconMenu2 size={25} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
