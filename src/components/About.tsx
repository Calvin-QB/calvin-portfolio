import { motion } from "framer-motion";
import { fadeVariant, staggerVariant, shadowVariant } from "../variants";

function About() {
  const skillArray: string[] = [
    "Python",
    "Java",
    "C#",
    "Git/GitHub",
    "Database Management (SQL/NoSQL)",
    "Machine Learning",
    "Front/Backend WebDev",
    "Data structures and Algorithms",
    "React",
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
          <h1 className="text-3xl  font-bold mb-8">About Me</h1>
          <div className="border w-3/4 border-white mb-16"></div>

          <motion.p
            variants={fadeVariant("up", 0.1)}
            className="text-lg leading-relaxed md:text-xl md:leading-loose"
          >
            Hi, I'm Calvin! I am currently studying Computer Science that is
            attending university. During my time at university, I've explored
            various facets of computer science: from general programming, data
            structures, and machine learning to web development, graph/network
            algorithms, informatics, database management, and information
            retrieval. My ambition is to become a software engineer, dedicated
            to contribute and craft impactful and valuable products. Continually
            motivated to improve and discover new technologies and techniques, I
            am always open to learning new things. I'm eager to contribute to
            projects that make a positive difference in the world, ensuring
            growth both personally and professionally.
          </motion.p>
        </div>
        <motion.div variants={shadowVariant("up", 0.1)} className="md:w-1/2">
          <div className="md:text-center text-3xl font-bold mb-8">Skills</div>
          <div className="border w-1/4 mx-auto  border-white mb-20"></div>

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
