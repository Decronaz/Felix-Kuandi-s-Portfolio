import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaHandPointUp } from "react-icons/fa";
import HTML from "../../Visuals/HTML_Icon.png";
import CSS from "../../Visuals/CSS_Icon.png";
import JS from "../../Visuals/JS_Icon.png";
import React from "../../Visuals/React_Icon.png";
import Tailwind from "../../Visuals/Tailwind_Icon.png";
import Word from "../../Visuals/Word_Icon.png";
import Excel from "../../Visuals/Excel_Icon.png";
import Figma from "../../Visuals/Figma_Icon.png";

function Skills() {
  const PageRef = useRef(null);
  const { scrollYProgress: scrollPage } = useScroll({
    target: PageRef,
    offset: ["start end", "end start"],
  });

  const MainRef = useRef(null);
  const { scrollYProgress: MainScroll } = useScroll({
    target: MainRef,
    offset: ["start end", "end start"],
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section
        id="skills"
        className="z-0 flex h-[300vh] w-full flex-col items-center bg-black"
        ref={PageRef}
      >
        <motion.main
          className="sticky top-0 flex h-screen w-screen flex-col items-center justify-center bg-black"
          ref={MainRef}
          style={{
            translateY: useTransform(
              MainScroll,
              [0, 0.5, 1],
              ["-100vh", "0vh", "100vh"],
            ),
            opacity: useTransform(MainScroll, [0, 0.5, 1], [0, 1, 0]),
          }}
        >
          <motion.div
            className="absolute flex h-[calc(100vh_+_100vw)] w-[calc(100vh_+_100vw)] items-center justify-center overflow-clip rounded-[50%] border-8 border-white bg-black text-white"
            style={{
              scale: useSpring(
                useTransform(
                  scrollPage,
                  [0 / 300, 100 / 300, 200 / 300, 300 / 300],
                  [0, 1, 1, 0],
                ),
                {
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                },
              ),
            }}
          >
            <li className="absolute z-0 text-[13vw] text-white">SKILLS</li>
            <motion.a
              className="absolute flex w-screen translate-y-[20vw] flex-col items-center gap-2 text-gray-300"
              style={{
                opacity: activeIndex === null ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            >
              <span className="text-sm font-thin">Click Any App To View</span>
              <FaHandPointUp className="text-2xl" />
            </motion.a>
            <motion.li
              className="relative flex h-1/2 w-1/2 items-center justify-center rounded-[50%] border-8 border-white"
              animate={{
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Array.from({ length: 8 }).map((_, index) => {
                const angle = (index / 8) * 2 * Math.PI;
                const x = 250 * Math.cos(angle);
                const y = 250 * Math.sin(angle);

                const AppsIcon = [
                  HTML,
                  CSS,
                  JS,
                  React,
                  Tailwind,
                  Word,
                  Excel,
                  Figma,
                ];
                const SkillsIcon = AppsIcon[index % AppsIcon.length];

                const AppsText = [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React TSX",
                  "Tailwind CSS",
                  "Microsoft Word",
                  "Microsoft Excel",
                  "Figma",
                ];
                const SkillsText = AppsText[index % AppsText.length];

                const AppsLevel = [
                  "Advanced",
                  "Advanced",
                  "Basic",
                  "Intermediate",
                  "Advanced",
                  "Advanced",
                  "Intermediate",
                  "Intermediate",
                ];
                const SkillsLevel = AppsLevel[index % AppsLevel.length];

                const isActive = activeIndex === index;

                return (
                  <motion.p
                    key={index}
                    className="absolute flex aspect-square w-[20%] items-center justify-center rounded-[50%]"
                    style={{
                      translateY: isActive ? "0%" : `${y}%`,
                      translateX: isActive ? "0%" : `${x}%`,
                      scale: isActive ? 1.75 : 1,
                      transition: "transform 1s ease-in-out",
                    }}
                  >
                    <motion.li
                      className="flex h-full w-full flex-col items-center justify-center shadow-2xl"
                      animate={{
                        rotateZ: [0, -360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <motion.a
                        className="z-20 aspect-square w-full cursor-pointer rounded-[20%] border-4 border-white"
                        style={{
                          translateY: isActive ? "-20%" : "0%",
                          background: `white url(${SkillsIcon})`,
                          backgroundSize: "60%",
                          backgroundPosition: "50% 50%",
                          backgroundRepeat: "no-repeat",
                          transition: "transform 1s ease-in-out",
                        }}
                        onClick={() => handleToggle(index)}
                      ></motion.a>
                      <motion.a
                        className="absolute z-10 flex aspect-square w-full flex-col items-center justify-end rounded-[20%] bg-white"
                        style={{
                          translateY: isActive ? "20%" : "0%",
                          transition:
                            "opacity 1s ease-in-out, transform 1s ease-in-out",
                        }}
                      >
                        <span className="flex h-[20%] w-[100%] items-center justify-center text-nowrap border-y-2 text-sm font-[450] tracking-[0.01em] text-black">
                          {SkillsText}
                        </span>
                        <span className="flex h-[20%] w-[100%] items-center justify-center text-nowrap text-xs font-[400] text-black">
                          {SkillsLevel}
                        </span>
                      </motion.a>
                    </motion.li>
                  </motion.p>
                );
              })}
            </motion.li>
          </motion.div>
        </motion.main>
      </section>
    </>
  );
}

export const scrollToSkills = () => {
  setTimeout(() => {
    const skillsElement = document.getElementById("skills");
    if (skillsElement) {
      const offset = window.innerHeight;
      const targetPosition =
        skillsElement.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: targetPosition, behavior: "auto" });
    }
  }, 1000);
};

export const scrollToSkillsRes = () => {
  const skillsElement = document.getElementById("skills");
  if (skillsElement) {
    const offset = window.innerHeight;
    const targetPosition =
      skillsElement.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: targetPosition, behavior: "auto" });
  }
};

export default Skills;
