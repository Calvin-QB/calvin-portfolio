import ProjectCard from "./ProjectCard";
import projects from "../projectsData.jsx";
import { motion } from "framer-motion";
import { fadeVariant } from "../variants";

const Projects = () => {
  return (
    <div className="px-8 bg-custom-black py-40 bg-gradiant1 bg-no-repeat bg-cover bg-left-bottom md:px-16">
      <motion.h2
        id="projects"
        variants={fadeVariant("down", 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-3 text-3xl font-bold mb-16"
      >
        My Projects
      </motion.h2>
      <div className="flex justify-center flex-col md:flex-row md:flex-wrap md:justify-around gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
