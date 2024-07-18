import React from "react";

const Skills = () => {
  return (
    <section className="flex flex-col gap-y-12">
      <p className="text-3xl font-bold">Skills</p>
      <ul className="flex flex-col items-center gap-y-10 text-2xl">
        <li className="flex">Javascript</li>
        <li className="flex">CSS</li>
        <li className="flex">HTML</li>
        <li className="flex">React</li>
        <li className="flex">Tailwind</li>
        <li className="flex">Bootstrap</li>
        <li className="flex">Git</li>
      </ul>
    </section>
  );
};

export default Skills;
