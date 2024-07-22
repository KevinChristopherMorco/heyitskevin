import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

import { IconCopyright } from "@tabler/icons-react";

import { useState } from "react";

const Footer = () => {
  const [localTime, setLocalTime] = useState(null);
  const [utcTime, setUTCTime] = useState(null);

  setInterval(() => {
    const currentDate = new Date().toLocaleTimeString("en", {
      hour12: false,
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Manila",
      timeZoneName: "short",
    });
    setLocalTime(() => currentDate);
  }, 1000);

  return (
    <footer className="py-5 px-4 flex flex-col gap-y-10" id="contacts">
      <div className="flex items-center gap-x-4">
        <div className="w-10 border-t-2 border-[var(--color-accent)]"></div>
        <p className="text-3xl font-bold md:text-4xl">Connect </p>
        <div className="w-10 border-t-2 border-[var(--color-accent)]"></div>
      </div>
      <div className="mb-10 text-3xl md:text-5xl">
        <p>Hey there!</p>
        <p>
          Got a question, or just want to <span>say hi?</span>
        </p>
        <p>
          Drop me a line anytime. <span>Let's chat</span> and make something
          <span> awesome together!!</span>
        </p>
      </div>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-8">
          <p className="text-xl font-bold md:text-3xl">Join me at Codewars!</p>
          <p className="text-lg md:text-xl">
            Here, you’ll find a collection of my coding adventures and
            problem-solving quests. Usually I spend an hour everyday on cracking
            code challenges to test my problem solving skill, I've only started
            recently and enjoyed every step of the journey. Check out my profile{" "}
            <a
              href="https://www.codewars.com/users/Hey%20Kevin"
              target="_blank"
              className="text-[var(--color-accent)] font-bold underline underline-offset-3 decoration-[var(--color-accent)]"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="text-xl font-bold md:text-3xl">
            Journey at Frontend Mentor
          </p>
          <p className="text-lg md:text-xl">
            This is where I’ve honed my front-end skills and tackled some
            exciting design challenges. Each project here is a piece of my
            journey into creating clean, user-friendly interfaces.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 text-base text-center">
        <p className="text-base italic md:text-lg">
          "The greatest virtue of man is perhaps curiosity"
        </p>
        <p className="text-base font-bold md:text-lg">Anatole France</p>
      </div>
      <div className="flex flex-col gap-y-2 text-[var(--color-footer)]">
        <ul className="flex justify-center gap-x-8 text-3xl">
          <li className="py-2">
            <a href="https://github.com/KevinChristopherMorco" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
          </li>
          <li className="py-2">
            <a
              href="https://www.linkedin.com/in/kevin-christopher-morco-a9a361289/"
              target="__blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
          </li>
          <li className="py-2">
            <a href="https://discordapp.com/users/kevinnnn02" target="_blank">
              <FontAwesomeIcon
                icon={faDiscord}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
          </li>
          <li className="py-2">
            <a href="https://www.facebook.com/kevin.morco.5/" target="_blank">
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
          </li>
        </ul>
        <p className="text-base text-center md:text-lg">
          Developed and Styled by Kevin Morco
        </p>
        <div className="flex justify-center items-center text-sm gap-x-4 md:text-base">
          <IconCopyright className="md:w-6 md:h-6" />
          {localTime}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
