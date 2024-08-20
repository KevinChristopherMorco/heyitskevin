import React from "react";
import useScrollEffect from "../../hooks/useScrollEffect";
import { useInView } from "react-intersection-observer";
import useCurrentTime from "../../hooks/useCurrentTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

import { IconCopyright } from "@tabler/icons-react";

const Footer = () => {
  // const { ref } = useScrollEffect("animateSlideUp");
  const { ref, inView } = useInView();
  const { localTime } = useCurrentTime();

  return (
    <footer
      className={`defaultSlideUpView py-5 px-4 flex flex-col gap-y-10 ${
        inView && "animateSlideUp"
      }`}
      id="contacts"
      ref={ref}
    >
      <p className="mb-6 flex items-center gap-x-4 text-3xl text-[var(--color-accent)] font-extrabold before:h-[0.2rem] before:w-[3rem] before:bg-[var(--color-accent)] after:h-[0.2rem] after:w-[3rem] after:bg-[var(--color-accent)] md:text-4xl md:before:hidden md:after:w-[20rem] lg:mb-32 lg:after:w-[36rem] lg:text-5xl ">
        Connect
      </p>
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
          <p className="text-xl font-bold md:text-3xl xl:text-4xl">
            Join me at Codewars!
          </p>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
            Here, you’ll find a collection of my coding adventures and
            problem-solving quests. Usually I spend an hour everyday on cracking
            code challenges to test my problem solving skill, I've only started
            recently and enjoyed every step of the journey. Check out my profile{" "}
            <a
              href="https://www.codewars.com/users/HeyItsKevin"
              target="_blank"
              className="text-[var(--color-accent)] font-bold underline underline-offset-3 decoration-[var(--color-accent)]"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="text-xl font-bold md:text-3xl xl:text-4xl">
            Journey at Frontend Mentor
          </p>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
            This is where I’ve honed my front-end skills and tackled some
            exciting design challenges. Each project here is a piece of my
            journey into creating clean, user-friendly interfaces.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 my-[5rem] xl:gap-y-12 xl:my-[10rem]">
        <div className="flex flex-col gap-y-2 text-base text-center">
          <p className="text-base font-semibold italic md:text-lg xl:text-3xl">
            "The greatest virtue of man is perhaps curiosity"
          </p>
          <p className="text-base font-bold md:text-lg xl:text-2xl">
            Anatole France
          </p>
        </div>
        <div className="flex flex-col gap-y-2 text-[var(--color-footer)]">
          <ul className="flex justify-center gap-x-8 text-3xl xl:gap-x-14">
            <li className="py-2">
              <a
                href="https://github.com/KevinChristopherMorco"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-8 h-8 md:w-8 md:h-8 xl:h-14 xl:w-14"
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
                  className="w-8 h-8 md:w-8 md:h-8 xl:h-14 xl:w-14"
                />
              </a>
            </li>
            <li className="py-2">
              <a href="https://discordapp.com/users/kevinnnn02" target="_blank">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="w-8 h-8 md:w-8 md:h-8 xl:h-14 xl:w-14"
                />
              </a>
            </li>
            <li className="py-2">
              <a href="https://www.facebook.com/kevin.morco.5/" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  className="w-8 h-8 md:w-8 md:h-8 xl:h-14 xl:w-14"
                />
              </a>
            </li>
          </ul>
          <p className="text-sm text-center font-bold md:text-lg xl:text-xl 2xl:text-2xl">
            Developed and Styled by Kevin Morco
          </p>
          <div className="flex justify-center items-center text-sm gap-x-4 font-bold md:text-base xl:text-xl 2xl:text-2xl">
            <IconCopyright className="md:w-6 md:h-6" />
            {localTime}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
