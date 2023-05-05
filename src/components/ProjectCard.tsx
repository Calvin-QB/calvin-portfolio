import { motion } from "framer-motion";
import { fadeVariant } from "../variants";

type Project = {
  name: string;
  image: string;
  description: string;
};

type ProjectProp = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectProp) => {
  return (
    <motion.div
      variants={fadeVariant("up", 0)}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className=" border md:w-1/4 mb-7"
      viewport={{ once: true, amount: 0.3 }}
    >
      <img
        className=" object-cover border rounded mb-4 z-0 w-full h-52"
        src={project.image}
        alt={project.name}
      />
      <h3 className=" text-xl font-semibold mb-2">{project.name}</h3>
      <p className=" break-words">{project.description}</p>
    </motion.div>
  );
};

export default ProjectCard;
