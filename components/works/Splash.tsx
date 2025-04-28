import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Applying <span className="text-textGreen">CRM Principles</span>and<span className="text-textGreen">Negotiation Skills</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">

      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I engaged in activities that focused on understanding customer relationship management (CRM) strategies and developing negotiation skills through role-play exercises.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I learned how important it is to maintain positive, professional relationships with clients by practicing active listening, responding empathetically, and clearly addressing customer needs. 
          Through different scenarios, I practiced managing client expectations, resolving complaints, and maintaining a focus on customer satisfaction while protecting business interests.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Negotiation role-plays challenged me to balance assertiveness with flexibility. I learned techniques such as identifying common ground, proposing win-win solutions, and communicating persuasively
          while remaining respectful and professional. These activities helped build my confidence in handling real-world negotiation situations and taught me how to manage conversations that involve compromise,
          decision-making, and conflict resolution.
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
