import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IconMenu2 } from "@tabler/icons-react";

import logo from "../images/logo/logo.png";

const Header = ({ setActive }) => {
  return (
    <header className="fixed w-[90%] left-1/2 -translate-x-1/2">
      <nav className="flex justify-between items-stretch bg-[var(--color-header)] text-accent border-2 border-[var(--color-accent)] rounded-xl">
        <div className="m-4">
          <img src={logo} className="h-8 w-8" />
        </div>
        <div className="flex items-end">
          <button
            className="h-4/5 p-3 border-t-2 border-l-2 rounded-tl-xl border-[var(--color-accent)] text-[var(--color-text)] text-lg cursor-pointer "
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
