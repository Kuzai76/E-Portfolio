import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="font-medium text-xl font-titleFont">
      Understanding <span className="text-textGreen">Ethics, Professionalism </span>and <span className="text-textGreen">Digital Responsibility.</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">

      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Throughout the Communication and Business Skills for IT module, I explored the importance of maintaining high ethical standards and professional conduct within the 
          technology industry. Through case studies and discussions, I gained a deeper understanding of the need for honesty, confidentiality, respect, and accountability when working with information, clients, and colleagues.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          These sessions reinforced the idea that technical expertise must be matched with ethical awareness. I realized that professionalism is not limited to technical skill, but also includes behavior, decision-making, 
          and the way one represents themselves and their organization. The lessons learned will be critical to ensuring that my future work in IT upholds ethical standards, promotes trust, and addresses the evolving challenges of the digital world responsibly.
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
