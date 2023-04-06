import { motion } from "framer-motion";
import { fadeVariant, staggerVariant, shadowVariant } from "../variants";

function About() {
  const skillArray: string[] = [
    "JavaScript",
    "Python",
    "React",
    "Databases",
    "Responsive Design",
    "TypeScript",
    "Data structures and Algorithms",
    "Node.js",
  ];

  return (
    <div className="px-8 bg-custom-black py-48 bg-gradiant1 bg-no-repeat bg-cover bg-top md:px-16">
      <motion.div
        variants={staggerVariant("down", 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" pt-12 flex-col flex md:flex-row gap-10"
        id="about"
      >
        <div className="text-lg md:w-1/2">
          <h1 className="text-3xl font-bold mb-16">About Me</h1>
          <motion.p
            variants={fadeVariant("up", 0.1)}
            className="text-lg leading-relaxed md:text-2xl md:leading-loose
"
          >
            Hi, I'm Calvin Bui! I'm a college student studying Computer Science,
            aiming to become a software engineer who creates valuable and
            impactful products. I'm always motivated to improve my skills and
            explore new technologies and techniques. With a strong dedication to
            learning and a real passion for software development, I'm eager to
            contribute to projects that can make a positive impact on the world,
            while growing both personally and professionally.
          </motion.p>
        </div>
        <motion.div variants={shadowVariant("up", 0.1)} className="md:w-1/2 ">
          <div className="md:text-center text-3xl font-bold mb-20">Skills</div>
          <motion.div
            variants={fadeVariant("up", 0.5)}
            className=" flex flex-row justify-between flex-wrap gap-y-16"
          >
            {skillArray.map((stringSkill, index) => (
              <div key={index} className="w-1/2 text-center text-xl">
                {stringSkill}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
