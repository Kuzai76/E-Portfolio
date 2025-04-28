import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Developing <span className="text-textGreen">Interview</span>and<span className="text-textGreen">Appraisal Skills.</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I participated in a role-play interview designed to simulate a real-world professional scenario. This exercise allowed me to practice structuring responses 
          clearly, presenting my experiences confidently, and applying active listening techniques during a formal conversation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The role-play interview went smoothly overall, strengthening my ability to maintain professionalism, stay composed under pressure, and communicate my strengths effectively. 
          Through feedback received during the session, I became more aware of areas for further improvement, such as refining the structure of my answers and enhancing my non-verbal communication.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Alongside the interview, performance appraisal activities provided additional insight into giving and receiving feedback in a workplace setting. These experiences taught me the value of 
          constructive criticism, critical self-evaluation, and setting specific goals for continuous improvement.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
