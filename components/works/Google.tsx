import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Applying <span className="text-textGreen">Business Communication Skills</span> in Projects
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I participated in a variety of business communication activities that strengthened both my collaborative and professional skills. One notable experience was the scavenger 
          hunt exercise, which required effective teamwork, quick decision-making, and clear communication under time pressure. Working closely with teammates helped me develop 
          strategies for task delegation, active listening, and conflict resolution.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I took part in the development of a Startup Business Plan as part of a group project. This experience allowed me to practice formal business writing, structure proposals clearly, 
          and deliver oral presentations with confidence. Preparing the business plan taught me how to analyze business opportunities, define objectives, and present persuasive arguments professionally.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          These activities not only enhanced my ability to communicate professionally in group settings but also taught me how to approach challenges collaboratively and maintain clarity and professionalism 
          even under pressure. The skills gained during these projects will be essential as I continue to grow within the IT and business fields.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
