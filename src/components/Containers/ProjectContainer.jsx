import React from "react";
import Card from "../Card";
import project from "../../projects/projects";
import useScrollEffect from "../../hooks/useScrollEffect";
import { useRef } from "react";

const ProjectContainer = () => {
  const { addRef } = useScrollEffect("animateSlideIn");
  return (
    <section className="flex flex-col gap-y-20" id="projects">
      <p className="mb-6 flex items-center gap-x-4 text-3xl font-bold before:h-[0.2rem] before:w-[3rem] before:bg-[var(--color-accent)] after:h-[0.2rem] after:w-[3rem] after:bg-[var(--color-accent)] md:text-4xl md:before:hidden md:after:w-[20rem] lg:mb-32 lg:after:w-[36rem] lg:text-5xl ">
        Projects
      </p>
      <div className="flex flex-col gap-y-20 md:flex-row flex-wrap md:justify-around xl:justify-between">
        {project.map(
          (
            { image, title, subtitle, information, liveRef, gitRef, stack },
            index
          ) => {
            return (
              <Card
                key={index}
                image={image}
                title={title}
                subTitle={subtitle}
                description={information}
                liveLink={liveRef}
                sourceLink={gitRef}
                projectStack={stack}
                ref={addRef}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default ProjectContainer;
