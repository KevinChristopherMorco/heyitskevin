import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="py-5 px-4 flex flex-col gap-y-10 text-3xl border-t-2 border-[var(--color-accent)]"
      id="contacts"
    >
      <div>
        <p>Hey there!</p>
        <p>
          Got a question, or just want to <span>say hi?</span>
        </p>
        <p>
          Drop me a line anytime. <span>Let's chat</span> and make something
          <span> awesome together!!</span>
        </p>
      </div>
      <div className="text-xl">
        <p className="my-4 text-2xl font-bold">Contacts:</p>
        <ul className="flex flex-col gap-y-3">
          <li className="py-2 w-1/2 border-b-2 border-[var(--color-accent)]">
            <a className="w-4/5 flex items-center gap-x-2 font-semibold">
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </li>
          <li className="py-2 w-1/2 border-b-2 border-[var(--color-accent)]">
            <a className="w-4/5 flex items-center gap-x-2 font-semibold">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li className="py-2 w-1/2 border-b-2 border-[var(--color-accent)]">
            <a className="w-4/5 flex items-center gap-x-2 font-semibold">
              <FontAwesomeIcon icon={faDiscord} /> Discord
            </a>
          </li>
          <li className="py-2 w-1/2 border-b-2 border-[var(--color-accent)]">
            <a className="w-4/5 flex items-center gap-x-2 font-semibold">
              <FontAwesomeIcon icon={faFacebookMessenger} /> Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
