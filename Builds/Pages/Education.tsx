import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Edu1 from "../../Visuals/SMP-GB.png";
import Edu2 from "../../Visuals/SMA-Petrus.jpg";
import Edu3 from "../../Visuals/BINUS.jpg";

function Education() {
  const MainRef = useRef(null);
  const { scrollYProgress: MainScroll } = useScroll({
    target: MainRef,
    offset: ["start end", "end start"],
  });

  const PageRef = useRef(null);
  const { scrollYProgress: scrollPage } = useScroll({
    target: PageRef,
  });

  return (
    <>
      <section
        id="education"
        className="flex h-[900vh] w-full justify-center overflow-clip bg-black"
        ref={PageRef}
      >
        <motion.main
          className="sticky top-0 flex h-screen w-screen items-center justify-center bg-black"
          ref={MainRef}
          style={{
            translateY: useTransform(
              MainScroll,
              [0, 0.5, 1],
              ["-200vh", "0vh", "100vh"],
            ),
          }}
        >
          <p className="relative flex h-full w-full items-end justify-center overflow-hidden">
            <motion.li
              className="absolute top-1/2 flex h-screen w-screen -translate-y-1/2 items-center justify-center text-white"
              style={{
                translateY: useTransform(
                  MainScroll,
                  [0, 0.5, 1],
                  ["50%", "-50%", "-50%"],
                ),
                fontSize: useTransform(
                  useSpring(
                    useTransform(
                      scrollPage,
                      [0 / 900, 50 / 900, 100 / 900],
                      [13, 13, 20],
                    ),
                    {
                      stiffness: 100,
                      damping: 30,
                      restDelta: 0.001,
                    },
                  ),
                  (value) => `${value}vw`,
                ),
                opacity: useSpring(
                  useTransform(scrollPage, [50 / 900, 100 / 900], ["1", "0"]),
                  {
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                ),
              }}
            >
              EDUCATION
            </motion.li>
            <motion.p
              className="absolute h-full w-full"
              style={{
                backgroundImage: `radial-gradient(#00000033, #000000cc), url(${Edu1})`,
                backgroundPosition: "60% 10%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: useSpring(
                  useTransform(
                    scrollPage,
                    [200 / 900, 300 / 900, 400 / 900, 500 / 900],
                    [0, 1, 1, 0],
                  ),
                  {
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                ),
                scale: useSpring(
                  useTransform(
                    scrollPage,
                    [200 / 900, 300 / 900, 400 / 900, 500 / 900],
                    [2, 1, 1, 2],
                  ),
                  {
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                ),
              }}
            ></motion.p>

            <motion.p
              className="absolute h-full w-full"
              style={{
                backgroundImage: `radial-gradient(#00000033, #000000cc), url(${Edu2})`,
                backgroundPosition: "50% 0%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: useSpring(
                  useTransform(
                    scrollPage,
                    [400 / 900, 500 / 900, 600 / 900, 700 / 900],
                    [0, 1, 1, 0],
                  ),
                  {
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                ),
                scale: useSpring(
                  useTransform(
                    scrollPage,
                    [400 / 900, 500 / 900, 600 / 900, 700 / 900],
                    [2, 1, 1, 2],
                  ),
                  {
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                ),
              }}
            ></motion.p>

            <motion.p
              className="absolute h-full w-full"
              style={{
                backgroundImage: `radial-gradient(#00000033, #000000cc), url(${Edu3})`,
                backgroundPosition: "52% 30%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: useSpring(
                  useTransform(
                    scrollPage,
                    [600 / 900, 700 / 900, 800 / 900, 900 / 900],
                    [0, 1, 1, 0],
                  ),
                  {
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                ),
                scale: useSpring(
                  useTransform(
                    scrollPage,
                    [600 / 900, 700 / 900, 800 / 900, 900 / 900],
                    [2, 1, 1, 2],
                  ),
                  {
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                ),
              }}
            ></motion.p>
            <motion.li
              className="flex w-screen justify-center text-white"
              style={{
                transformPerspective: "200vh",
                rotateX: "62deg",
                transformOrigin: "bottom",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.p
                className="relative flex h-[5000vh] w-[1vw] flex-col items-center justify-end bg-white"
                style={{
                  translateY: useTransform(
                    useSpring(
                      useTransform(
                        scrollPage,
                        [
                          100 / 900,
                          300 / 900,
                          400 / 900,
                          500 / 900,
                          600 / 900,
                          700 / 900,
                          800 / 900,
                          900 / 900,
                        ],
                        [-100, 0, 0, 50, 50, 100, 100, 150],
                      ),
                      {
                        stiffness: 100,
                        damping: 30,
                        restDelta: 0.001,
                      },
                    ),
                    (value) => `${value}%`,
                  ),
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute bottom-full h-[20vw] w-[100vw] translate-y-1/2 rounded-[100%] bg-white"></div>
                <div className="absolute bottom-1/2 h-[20vw] w-[100vw] translate-y-1/2 rounded-[100%] bg-white"></div>
                <div className="absolute bottom-0 h-[20vw] w-[100vw] translate-y-1/2 rounded-[100%] bg-white"></div>
                <motion.div
                  className="absolute bottom-full flex flex-col items-center"
                  style={{
                    rotateX: "-62deg",
                    translateZ: "15vw",
                    textShadow: "0vw 0.75vw 0.75vw black",
                  }}
                >
                  <a className="text-nowrap text-[6vw] font-[500]">
                    Business Creation
                  </a>
                  <a className="text-nowrap text-[5vw] font-[400]">
                    Binus University
                  </a>
                  <a className="flex items-center gap-[1rem] text-nowrap text-[4vw] font-[300]">
                    <FaCalendarAlt /> 2022 - Present
                  </a>
                </motion.div>
                <motion.div
                  className="absolute bottom-1/2 flex flex-col items-center"
                  style={{
                    rotateX: "-62deg",
                    translateZ: "15vw",
                    textShadow: "0vw 0.75vw 0.75vw black",
                  }}
                >
                  <a className="text-nowrap text-[6vw] font-[500]">
                    School of Mathematics and Science
                  </a>
                  <a className="text-nowrap text-[5vw] font-[400]">
                    Santu Petrus - Senior High School
                  </a>
                  <a className="flex items-center gap-[1vw] text-nowrap text-[4vw] font-[300]">
                    <FaCalendarAlt /> 2019 - 2022
                  </a>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 flex flex-col items-center text-nowrap"
                  style={{
                    rotateX: "-62deg",
                    translateZ: "15vw",
                    textShadow: "0vw 0.75vw 0.75vw black",
                  }}
                >
                  <a className="text-nowrap text-[6vw] font-[500]">
                    School of Science, Bilingual
                  </a>
                  <a className="text-nowrap text-[5vw] font-[400]">
                    Gembala Baik - Junior High School
                  </a>
                  <a className="flex items-center gap-[1vw] text-nowrap text-[4vw] font-[300]">
                    <FaCalendarAlt /> 2016 - 2019
                  </a>
                </motion.div>
              </motion.p>
            </motion.li>
          </p>
        </motion.main>
      </section>
    </>
  );
}

export const scrollToEducation = () => {
  setTimeout(() => {
    const element = document.getElementById("education");
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  }, 1000);
};

export default Education;
