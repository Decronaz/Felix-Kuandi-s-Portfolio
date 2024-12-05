import { useEffect, useState } from "react";
import {
  FaAddressCard,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaDownload,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaBars,
} from "react-icons/fa";
import { scrollToProfile } from "../Pages/Profile";
import { scrollToSkills } from "../Pages/Skills";
import { scrollToEducation } from "../Pages/Education";
import { scrollToProjects } from "../Pages/Projects";
import { changeLerpValue } from "../Effects/Smooth_Scroll";
import { motion } from "framer-motion";

function Overlay() {
  const sections = [
    {
      id: "profile",
      label: "Profile",
      scrollFunction: () => {
        changeLerpValue(1);
        scrollToProfile();
      },
    },
    {
      id: "profileresponsive",
      label: "Profile",
      scrollFunction: () => {
        changeLerpValue(1);
        scrollToProfile();
      },
    },
    {
      id: "skills",
      label: "Skills",
      scrollFunction: () => {
        changeLerpValue(1);
        scrollToSkills();
      },
    },
    {
      id: "education",
      label: "Education",
      scrollFunction: () => {
        changeLerpValue(1);
        scrollToEducation();
      },
    },
    {
      id: "projects",
      label: "Projects",
      scrollFunction: () => {
        changeLerpValue(1);
        scrollToProjects();
      },
    },
  ];

  const tabs = [
    { icon: <FaAddressCard />, label: "Profile" },
    { icon: <FaTools />, label: "Skills" },
    { icon: <FaGraduationCap />, label: "Education" },
    { icon: <FaProjectDiagram />, label: "Projects" },
  ];

  const [selected, setSelected] = useState(tabs[0].label);
  const [animatedStage, setAnimatedStage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find(
              (section) => section.id === entry.target.id,
            );
            if (match) setSelected(match.label);
          }
        });
      },
      { threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabSelect = (label: string) => {
    setSelected(label);
    const section = sections.find((s) => s.label === label);
    if (section) {
      changeLerpValue(1);
      section.scrollFunction();
    }

    setAnimatedStage(1);
    setTimeout(() => setAnimatedStage(2), 500 + 500);
    setTimeout(() => setAnimatedStage(3), 500 + 500 + 500 + 500);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <header className="fixed top-0 z-40 flex h-[4.5rem] w-full items-center justify-between px-6 text-[#ffffff] mix-blend-difference">
        <p className="text-md">Felix Kuandi | Portfolio</p>
        <p className="text-md flex items-center gap-2 lg:gap-5">
          <a
            className="group relative flex cursor-pointer items-center justify-center overflow-hidden text-nowrap rounded-lg border-2 border-[#ffffff] px-2 py-2 lg:px-2 lg:py-1"
            href="../Visuals/Felix_Kuandi's_CV.pdf"
            download
          >
            <span className="absolute aspect-square w-[0%] rounded-full bg-white transition-all duration-500 group-hover:w-[140%] lg:group-hover:w-[120%]"></span>
            <span className="flex items-center gap-2 mix-blend-difference">
              <span className="hidden lg:flex">Download CV</span>
              <FaDownload className="text-sm" />
            </span>
          </a>
          <a
            className="group relative flex cursor-pointer items-center justify-center overflow-hidden text-nowrap rounded-lg border-2 border-[#ffffff] px-2 py-2 lg:px-2 lg:py-1"
            href="https://www.instagram.com/direct/t/108237127239796/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute aspect-square w-[0%] rounded-full bg-white transition-all duration-500 group-hover:w-[140%] lg:group-hover:w-[120%]"></span>
            <span className="flex items-center gap-2 mix-blend-difference">
              <span className="hidden lg:flex">Contact Me</span>
              <FaPaperPlane className="text-sm" />
            </span>
          </a>
          <FaBars
            className="flex cursor-pointer text-2xl lg:hidden"
            onClick={handleClick}
          />
        </p>
      </header>

      <motion.div
        className={`fixed bottom-[unset] right-6 top-[4.5rem] z-40 h-fit flex-col items-center gap-1 overflow-clip rounded-lg text-lg mix-blend-difference backdrop-blur-sm backdrop-brightness-50 transition duration-500 ease-in-out lg:bottom-6 lg:top-[unset] lg:flex lg:translate-x-0 lg:opacity-100 lg:backdrop-blur-[unset] lg:backdrop-brightness-[unset] lg:transition-[unset] ${isVisible ? "translate-x-0 opacity-100" : "translate-x-[150%] opacity-0"}`}
      >
        {tabs.map(({ icon, label }) => (
          <TabButton
            key={label}
            icon={icon}
            label={label}
            selected={selected === label}
            onClick={() => handleTabSelect(label)}
          />
        ))}
      </motion.div>

      <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-5 text-white mix-blend-difference lg:flex">
        <SocialLink
          icon={<FaInstagram />}
          href="https://www.instagram.com/felix_kuandi/"
        />
        <SocialLink
          icon={<FaFacebook />}
          href="https://www.facebook.com/in/felix-kuandi/"
        />
        <SocialLink
          icon={<FaLinkedin />}
          href="https://www.linkedin.com/in/felix-kuandi/"
        />
        <SocialLink icon={<FaGithub />} href="https://github.com/Decronaz" />
      </div>

      <div className="fixed z-50 flex w-screen translate-y-full bg-[#ffffff33]">
        {[...Array(5)].map((_, index) => {
          let transform = "translateY(0%)";
          let transition = `transform 0.5s ${index * 0.1}s`;

          if (animatedStage === 1) {
            transform = "translateY(-100%)";
          } else if (animatedStage === 2) {
            transform = "translateY(-200%)";
          } else if (animatedStage === 3) {
            transition = "none";
          }

          return (
            <a
              className="h-screen flex-1 bg-white"
              key={index}
              style={{
                transform,
                transition,
              }}
            ></a>
          );
        })}
      </div>
    </>
  );
}

const TabButton = ({
  icon,
  selected,
  onClick,
}: {
  icon: JSX.Element;
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`${
      selected
        ? "text-[#000000]"
        : "text-[#ffffff] hover:bg-[#ffffff22] hover:text-[#ffffffcc]"
    } rounded:unset lg-rounded-lg relative flex h-10 w-[6.8rem] items-center justify-center lg:w-16`}
  >
    <span className="relative z-10">{icon}</span>
    {selected && (
      <motion.span
        layoutId="pill-tab"
        className="absolute inset-0 z-0 rounded-[unset] bg-[#ffffff] lg:rounded-md"
        transition={{ type: "spring", duration: 0.5 }}
      ></motion.span>
    )}
  </button>
);

const SocialLink = ({ icon, href }: { icon: JSX.Element; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer text-2xl"
  >
    {icon}
  </a>
);

export default Overlay;
