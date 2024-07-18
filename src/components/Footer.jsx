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
    <footer className="py-5 px-4 flex flex-col gap-y-10 text-3xl border-t-2 border-accent">
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
        <p className="my-4">Contacts:</p>
        <ul className="flex flex-col gap-y-3">
          <li className="py-2 w-1/2 border-b border-accent">
            <a className="w-4/5 flex items-center gap-x-4">
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </li>
          <li className="py-2 w-1/2 border-b border-accent">
            <a className="w-4/5 flex items-center gap-x-4">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li className="py-2 w-1/2 border-b border-accent">
            <a className="w-4/5 flex items-center gap-x-4">
              <FontAwesomeIcon icon={faDiscord} /> Discord
            </a>
          </li>
          <li className="py-2 w-1/2 border-b border-accent">
            <a className="w-4/5 flex items-center gap-x-4">
              <FontAwesomeIcon icon={faFacebookMessenger} /> Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
