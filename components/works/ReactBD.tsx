import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Understanding <span className="text-textGreen">Academic Reports</span> and <span className="text-textGreen">Referencing.</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
  
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I had the opportunity to practice academic report writing through structured assignments. This involved organizing information logically, 
          applying formal writing techniques, and ensuring clarity and professionalism in presenting ideas.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Through these exercises, I developed a stronger understanding of how to plan reports, structure content into clear sections, and present arguments supported by evidence. 
          Learning and applying proper referencing techniques, such as Harvard style, was a key aspect of this process. It helped me to acknowledge sources correctly and 
          strengthened my academic integrity by avoiding plagiarism.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
            Overall, the experience of writing academic reports has improved my ability to communicate ideas formally and ethically. It has also enhanced my 
            research skills, attention to detail, and understanding of the importance of transparency and credibility in professional and academic work.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
