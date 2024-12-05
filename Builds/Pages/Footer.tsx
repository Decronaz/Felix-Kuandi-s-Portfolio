import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { scrollToProfile } from "../Pages/Profile";
import { scrollToSkills } from "../Pages/Skills";
import { scrollToEducation } from "../Pages/Education";
import { scrollToProjects } from "../Pages/Projects";
import { changeLerpValue } from "../Effects/Smooth_Scroll";
import FontopiaLogo from "../../Visuals/Fontopia_Logo.png";

const SocialLink: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => (
  <a
    className="group relative my-1 flex h-[5%] w-fit cursor-pointer flex-col overflow-hidden py-1 font-light leading-[1] tracking-[0.01rem] hover:underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="absolute -translate-y-0 transition-all duration-500 group-hover:-translate-y-[200%]">
      {label}
    </span>
    <span className="relative translate-y-[200%] transition-all duration-500 group-hover:-translate-y-0">
      {label}
    </span>
  </a>
);

const sections: Record<string, () => void> = {
  "About Me": () => {
    changeLerpValue(1);
    scrollToProfile();
  },
  Skills: () => {
    changeLerpValue(1);
    scrollToSkills();
  },
  Education: () => {
    changeLerpValue(1);
    scrollToEducation();
  },
  Projects: () => {
    changeLerpValue(1);
    scrollToProjects();
  },
};

function Skills() {
  const MainRef = useRef(null);
  const { scrollYProgress: MainScroll } = useScroll({
    target: MainRef,
    offset: ["start end", "start start"],
  });

  const handleClick = (label: string) => {
    sections[label]();
  };

  return (
    <>
      <footer className="z-0 flex h-[50vh] w-full flex-col items-center overflow-clip border-t-[0.1vh] border-gray-300 bg-black">
        <motion.main
          className="flex h-full w-screen flex-col items-center justify-center"
          ref={MainRef}
          style={{
            translateY: useTransform(MainScroll, [0, 0.5], ["-100%", "0%"]),
          }}
        >
          <div className="flex h-[85%] w-[75%] flex-col-reverse items-center justify-between text-base text-white lg:flex-row">
            <p className="flex h-[20%] flex-col justify-between lg:h-[65%]">
              <a className="hidden items-center gap-2 lg:flex">
                <img src={FontopiaLogo} className="h-12"></img>
                <a className="flex flex-col">
                  <span className="text-4xl leading-[1]">Portfolio</span>
                  <span className="text-base">Felix Kuandi</span>
                </a>
              </a>
              <p className="gap flex flex-col items-center lg:flex-row lg:gap-10">
                <a className="flex items-center gap-2">
                  <FaPhone />
                  <span>+62 857-5443-3931</span>
                </a>
                <a className="flex items-center gap-2">
                  <FaEnvelope />
                  <span>@felixkuandi23@gmail.com</span>
                </a>
              </p>
            </p>
            <p className="flex h-[80%] items-center gap-[5vw] lg:h-[60%] lg:items-start">
              <p className="flex flex-col">
                <span className="mb-4 text-nowrap font-normal leading-[1] tracking-[0.01rem]">
                  Get To Know Me
                </span>
                {Object.keys(sections).map((label) => (
                  <a
                    key={label}
                    className="group relative my-1 flex h-[5%] w-fit cursor-pointer flex-col overflow-hidden py-1 font-light leading-[1] tracking-[0.01rem] hover:underline"
                    onClick={() => handleClick(label)}
                  >
                    <span className="absolute -translate-y-0 transition-all duration-500 group-hover:-translate-y-[200%]">
                      {label}
                    </span>
                    <span className="relative translate-y-[200%] transition-all duration-500 group-hover:-translate-y-0">
                      {label}
                    </span>
                  </a>
                ))}
              </p>
              <p className="flex flex-col">
                <span className="mb-4 text-nowrap font-normal leading-[1] tracking-[0.01rem]">
                  Get In Touch
                </span>
                <SocialLink
                  href="https://www.instagram.com/felix_kuandi/"
                  label="Instagram"
                />
                <SocialLink
                  href="https://www.facebook.com/felix.kuandi"
                  label="Facebook"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/felix-kuandi/"
                  label="LinkedIn"
                />
                <SocialLink href="https://github.com/Decronaz" label="GitHub" />
              </p>
            </p>
          </div>
          <div className="flex h-[15%] w-[80%] items-center justify-center text-nowrap border-t-[0.1vh] font-sans text-base font-thin tracking-[0.01rem] text-white">
            © 2024 Felix Kuandi. All rights reserved.
          </div>
        </motion.main>
      </footer>
    </>
  );
}

export default Skills;
