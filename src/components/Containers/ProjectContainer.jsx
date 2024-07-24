import React, { useEffect } from "react";
import Card from "../Card";
import project from "../../projects/projects";
import { useRef } from "react";

const ProjectContainer = () => {
  const cardRef = useRef([]);

  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("animateSlideIn", entry.isIntersecting)
      );
    });
    cardRef.current.forEach((cardRef) => observe.observe(cardRef));
  });
  const addCardRef = (card) => cardRef.current.push(card);

  return (
    <section className="flex flex-col gap-y-20" id="projects">
      <p className="mb-6 flex items-center gap-x-4 text-3xl font-bold before:h-[0.2rem] before:w-[3rem] before:bg-[var(--color-accent)] after:h-[0.2rem] after:w-[3rem] after:bg-[var(--color-accent)] md:text-4xl md:before:hidden md:after:w-[20rem] lg:mb-32 lg:after:w-[36rem] lg:text-5xl ">
        Projects
      </p>
      <div className="flex flex-col gap-y-20 md:flex-row flex-wrap md:justify-around xl:justify-between">
        {project.map((project, index) => {
          return (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              subTitle={project.subtitle}
              description={project.information}
              liveLink={project.liveRef}
              sourceLink={project.gitRef}
              projectStack={project.stack}
              ref={addCardRef}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectContainer;
