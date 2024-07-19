import React from "react";
import Card from "../Card";
import project from "../../projects/projects";

const ProjectContainer = () => {
  return (
    <section className="flex flex-col gap-y-12" id="projects">
      <p className="text-3xl font-bold">Projects</p>
      <div className="flex flex-col gap-y-20">
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
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectContainer;
