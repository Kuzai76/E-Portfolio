import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Key Projects and Activities" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6 items-center">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://drive.google.com/file/d/1-atRvd2CWgq3gaWtx-ghyC2UfyI0HHB5/view?usp=drive_link"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div ></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Business Plan
              </p>
              <h3 className="text-2xl font-bold">Aether Aura</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            A comprehensive business plan developed as part of a group project, focused on creating a new startup concept. 
            The project involved market research, business strategy development, financial planning, and preparing a formal written report 
            supported by a professional oral presentation.
            </p>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://drive.google.com/file/d/1-atRvd2CWgq3gaWtx-ghyC2UfyI0HHB5/view?usp=drive_link"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            target="_blank"
          >
            <div className="w-full h-auto relative group overflow-hidden rounded-lg">
              <video
                src="/assets/Esaie.mp4" // <- replace this with your actual video path
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Interview and Appraisal Skills
              </p>
              <h3 className="text-2xl font-bold">Interview Roleplay Session</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 text-justify rounded-md xl:-mr-16">
              A mock interview session conducted to strengthen professional communication, strategic thinking, and adaptability under pressure. 
              The exercise focused on delivering structured responses using formal techniques, managing unexpected questions confidently, and 
              applying feedback to improve future interview performance and overall presentation skills.
            </p>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6 items-center">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://drive.google.com/file/d/13hHQvVVmZjzKCKtN80qEXXlVwDo_aECG/view?usp=drive_link"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="noorShop"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Ice Breaking
              </p>
              <h3 className="text-2xl font-bold">Scavenger Hunt Team Challenge</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              The scavenger hunt served as an engaging team-building activity, helping to strengthen teamwork, leadership, and communication skills. 
              Acting as an effective icebreaker, it allowed participants to bond, collaborate, and build trust in a fun and energetic environment which also
              encouraged quick decision-making and creative problem-solving. 
              Overall, the experience highlighted the value of adaptability, clear coordination, and positive group dynamics in professional settings.
            </p>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://drive.google.com/file/d/13hHQvVVmZjzKCKtN80qEXXlVwDo_aECG/view?usp=drive_link"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
