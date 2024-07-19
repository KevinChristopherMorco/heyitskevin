import React from "react";
import computer from "../images/hero/computer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="flex flex-col items-center" id="intro">
      <div>
        <img src={computer} alt="Computer" className="w-72 h-72" />
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-wrap justify-evenly items-center gap-y-6 text-3xl text-center font-bold">
          <p>Discover.</p>
          <p>Visualize.</p>
          <p>Develop.</p>
        </div>
        <div className="my-14 flex flex-col gap-y-6 text-center">
          <p className="text-small font-bold">Hi there,</p>
          <p className="text-2xl font-bold">I'm Kevin Morco.</p>
          <p className="text-2xl font-bold">Dedicated Web Developer</p>
          <div className="italic">
            <p>Passionate about Programming and Continuous Learning.</p>
          </div>
          <div className="my-2 flex justify-around items-center">
            <a className="w-1/3 p-2 bg-accent text-primary text-center">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a className="w-2/5 p-2 text-center border border-accent">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 text-center">
          <p className="text-3xl font-semibold">Personalize Theme</p>
          <p className="text-medium font-medium italic">
            Choose a theme that suits your preference.
          </p>
          <div className="flex justify-evenly">
            <div className="w-5 h-5 bg-black rounded-full border-2 border-accent"></div>
            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
            <div className="w-5 h-5 bg-orange-300 rounded-full"></div>
            <div className="w-5 h-5 bg-cyan-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
