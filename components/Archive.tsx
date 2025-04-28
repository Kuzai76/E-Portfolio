import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-10">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Web Development (2024)"
          des="Designed and developed a responsive and user-friendly website, applying best practices in web development, UI/UX design, and 
          performance optimization. The project focused on creating an engaging interface, ensuring mobile responsiveness, and enhancing user 
          experience through clean layouts and intuitive navigation."
          listItem={[]}
          link="https://kuzai76.github.io/E-Commerce-Website/"
        />
        <ArchiveCard
          title="Payeon, a user-centered digital wallet"
          des=" Developed Payeon, a user-centered digital wallet app, applying UI/UX design, agile methodology, and HCI principles. 
          Focused on improving accessibility, simplicity, and enhancing user experience through iterative feedback-driven design."
          listItem={[""]}
          link="https://www.figma.com/proto/JNUHQbWXMxBRm6ODWHquP7/Finance-App?node-id=37-242&t=OvsDmvwKo01WrA0g-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=43%3A624"
        />
        <ArchiveCard
          title="Car Rental Management (Python)"
          des=" Built a Python-based car rental system with a GUI developed in Flet, applying OOP concepts for managing vehicles, 
          clients, rentals, and payments. Focused on error handling, text file data persistence, and improving operational efficiency 
          without a database."
          listItem={[""]}
          link="https://github.com/Kuzai76/Car-Rental"
        />
        <ArchiveCard
          title="Internship at SD Worx."
          des="Developed and enhanced event management features using Angular, .NET APIs, and SQL Server.
          Collaborated in an Agile team through Azure DevOps, contributed to frontend and backend integration, and gained real-world experience in manual and automation testing with Playwright"
          listItem={[""]}
          link="https://drive.google.com/file/d/13gmmZV6SSpV9t2KGA8-2LBuNlg3YdNrx/view?usp=drive_link"
        />
        <ArchiveCard
          title="Business Plan (2021)"
          des="Built a detailed business plan for a modern gaming lounge offering top-tier multiplayer experiences, events, and tournaments to create a social hub for gamers in Mauritius."
          listItem={[""]}
          link="https://drive.google.com/file/d/1sPJhp0so-r602ZuBB9p1CjUn9TK_MxDS/view?usp=drive_link"
        />
        <ArchiveCard
          title="Semester 1 Activities and Achievements"
          des="Participated in team-building activities, business planning, mock interviews, public speaking, and real-world communication exercises, strengthening both technical and interpersonal skills."
          listItem={[""]}
          link="https://docs.google.com/presentation/d/1IlFK6roTjTgD-v30Ba7h-8cjteTzQ37n/edit?usp=drive_link&ouid=113064619535983280034&rtpof=true&sd=true"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Web Development (2021)"
                des="Built a full-stack online audio store using HTML, CSS, PHP, JavaScript, AJAX, and MySQL. Developed features like user login, product browsing, cart management, and checkout with a responsive design and dark mode support."
                listItem={[]}
                link="https://drive.google.com/file/d/1-FW6Nb5k5Qgw76M3mJBfFg3Fyd1IEXtA/view?usp=drive_link"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Database Metro Project (2021)"
                des="Developed a database-driven Metro Ticket Reservation System featuring user registration, online booking, payment. Applied SQL Server fully normalized and ensured secure booking operations."
                listItem={[""]}
                link="https://drive.google.com/file/d/1iKX1AquNwJoAGTvj3X4SNlUd-syqqEXQ/view?usp=drive_link"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Game Development"
                des="Developed Science Smackdown, a 2.5D fighting game inspired by scientific legends. Players battle using powers based on real scientific discoveries, blending 
                action gameplay with educational themes to spark interest in science."
                listItem={[]}
                link="https://drive.google.com/file/d/1l_a4AM7gBrxnHimorkInLYZVh1qee7B4/view?usp=drive_link"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Solving NP-Hard Problems with Agents and Genetic Algorithms"
                des="Tackled the Traveling Salesman Problem: implemented, tested, and evaluated the solution through 
                Google Colab, optimizing scalability, robustness, and real-world application potential."
                listItem={[]}
                link="https://drive.google.com/file/d/1MRg3Za6Q4hCEb6Kz35yQqv2RvZrLrRiS/view?usp=drive_link"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
