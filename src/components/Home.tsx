import { motion } from "framer-motion";
import { fadeVariant } from "../variants";
import ParticlesComponent from "../components/Particles";

const Home = () => {
  return (
    <div
      id="home"
      className="px-8 z-20 relative bg-no-repeat bg-cover bg-center bg-home bg-custom-black py-96 md:px-16"
    >
      <motion.div
        variants={fadeVariant("down", 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="z-10 text-center select-none text-8xl"
      >
        Calvin Bui
      </motion.div>
      <ParticlesComponent></ParticlesComponent>
    </div>
  );
};

export default Home;
