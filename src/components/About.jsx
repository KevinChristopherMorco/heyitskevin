import React from "react";
import author from "../images/author/grad-pic.png";

const About = () => {
  return (
    <section className="flex flex-col gap-y-12" id="about">
      <p className="text-3xl font-bold">Who am I?</p>
      <img src={author} alt="author" className="w-52 h-52 m-auto" />
      <p className="text-center">
        Hi!, I'm Kevin Christopher Morco a graduate at Laguna State Polytechnic
        University. I do love programming and creating web designs and their
        corresponding functionalities I have strong attention to details and
        willingly to collaborate for the success of every project, also willing
        to try new things especially on tech stacks to enhance my skills
        further.
      </p>
      <button className="p-2 bg-accent text-primary text-center font-bold">
        Get to know me more!
      </button>
    </section>
  );
};

export default About;
