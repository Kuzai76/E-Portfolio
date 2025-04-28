import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Esaie Moos.
        <span className="text-textDark mt-2 lgl:mt-4">
        Good design is silent until it’s unforgettable..
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        This collection captures a progressive development of communication and business competencies within the IT field. 
        Through various academic, professional, and reflective activities, it demonstrates the ability to adapt, collaborate, 
        and apply key principles essential for success in the technology industry. The work presented highlights a commitment 
        to continuous growth, ethical practice, and the pursuit of excellence in professional communication.{" "}
        <a href="https://github.com/Kuzai76?tab=repositories" target="_blank">
          {" "}
        </a>
      </motion.p>
      <a href="https://github.com/Kuzai76?tab=repositories" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
