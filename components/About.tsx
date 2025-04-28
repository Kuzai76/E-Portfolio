import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is <span className="text-textGreen">Esaie Moos</span> and I am a motivated 1st Year University student, studying <span className="text-textGreen">Mobile and Smart Technologies. </span>
            I am an aspiring IT professional with a passion for developing innovative and user-centered digital solutions. My experience includes&nbsp;  
            <u>building games</u>, &nbsp;<u>designing human-computer interaction (HCI) user interfaces</u>, <u>creating database systems</u>, <u>developing Python-based 
            applications</u> to simplify processes, and <u>designing functional, responsive websites</u>. These projects have strengthened both my technical 
            proficiency and my ability to approach problems creatively and practically.
          </p>
          <p>
            Alongside technical development, I have enhanced critical professional skills such as <u>teamwork</u>, <u>conflict management</u>, <u>business 
            communication</u>, <u>customer relationship management</u>, and <u>professional presentation</u> through a range of <u>academic activities</u> and <u>collaborative 
            projects</u>.
          </p>
          <p>
            I am committed to continuous learning, ethical practice, and applying both technical and interpersonal skills to create impactful 
            solutions in the IT industry. My focus moving forward is to further develop my expertise while contributing meaningfully to dynamic, innovative teams.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              HTML5 & CSS3
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Git & GitHub
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Figma 
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src="/assets/images/Profile.png"
                alt="Profile Image"
                width={500}
                height={500}
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
