import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowDown,
  FaArrowUp,
  FaAward,
  FaHandPointUp,
  FaProjectDiagram,
} from "react-icons/fa";

const Profile = () => {
  const PageRef = useRef(null);
  const { scrollYProgress: scrollPage } = useScroll({
    target: PageRef,
  });

  const MainRef = useRef(null);
  const { scrollYProgress: MainScroll } = useScroll({
    target: MainRef,
    offset: ["end start", "start start"],
  });

  return (
    <>
      <motion.section
        ref={PageRef}
        id="profile"
        className="hidden h-[1000vh] w-full justify-center bg-black lg:flex"
      >
        <motion.main
          className="sticky top-0 flex h-screen w-screen flex-col items-center justify-center"
          ref={MainRef}
          style={{
            translateY: useTransform(MainScroll, [0, 1], ["100vh", "0vh"]),
            scale: useTransform(
              scrollPage,
              [
                0 / 1000,
                500 / 1000,
                600 / 1000,
                700 / 1000,
                750 / 1000,
                850 / 1000,
                950 / 1000,
                1000 / 1000,
              ],
              [1, 1, 0.5, 1, 1, 0.5, 1, 1],
            ),
          }}
        >
          <motion.div
            className="relative flex aspect-[2/1] w-[70%] items-center justify-center overflow-hidden rounded-[3vw] bg-black shadow-[0_0_0_0.5vw_black,_0_0_0_1vw_gray]"
            style={{
              transformPerspective: "200vh",
              rotateY: useTransform(
                scrollPage,
                [
                  0 / 1000,
                  500 / 1000,
                  600 / 1000,
                  700 / 1000,
                  750 / 1000,
                  850 / 1000,
                  950 / 1000,
                  1000 / 1000,
                ],
                [0, 0, -90, -180, -180, -270, -360, -360],
              ),
            }}
          >
            <motion.p
              className="flex h-[80%] flex-col items-center justify-between text-gray-300"
              style={{
                opacity: useSpring(
                  useTransform(scrollPage, [0 / 1000, 1 / 1000], [1, 0]),
                  {
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                ),
              }}
            >
              <a className="flex flex-col items-center gap-5 text-center font-light">
                <motion.span
                  animate={{ translateY: ["-50%", "50%"] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <FaArrowUp className="text-3xl" />
                </motion.span>
                Scroll Up to Reveal Navigation
              </a>
              <FaHandPointUp className="text-8xl" />
              <a className="flex flex-col items-center gap-5 text-center font-light">
                Scroll Down to Reveal Content
                <motion.span
                  animate={{ translateY: ["-50%", "50%"] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <FaArrowDown className="text-3xl" />
                </motion.span>
              </a>
            </motion.p>
            <motion.li
              className="absolute flex items-center justify-center overflow-hidden rounded-[5vw] text-[10vw] text-white"
              style={{
                width: useTransform(
                  scrollPage,
                  [0 / 1000, 100 / 1000, 200 / 1000, 300 / 1000],
                  ["0%", "10%", "100%", "100%"],
                ),
                height: useTransform(
                  scrollPage,
                  [0 / 1000, 100 / 1000, 200 / 1000, 300 / 1000],
                  ["0%", "5%", "5%", "100%"],
                ),
                opacity: useTransform(
                  scrollPage,
                  [300 / 1000, 400 / 1000],
                  [1, 0],
                ),
              }}
            >
              INTRODUCTION
            </motion.li>
            {/* Part2 */}
            <motion.p
              className="absolute flex h-full w-full items-center"
              style={{
                backgroundColor: "#000000",
                backgroundImage:
                  "linear-gradient(to right, #000000 20%, transparent 70%), url(../Visuals/Profile_Image.jpeg)",
                backgroundPosition: "-150% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: useTransform(
                  scrollPage,
                  [0 / 1000, 300 / 1000, 300 / 1000, 600 / 1000, 600 / 1000],
                  ["none", "none", "flex", "flex", "none"],
                ),
                opacity: useTransform(
                  scrollPage,
                  [300 / 1000, 400 / 1000],
                  [0, 1],
                ),
              }}
            >
              <motion.a
                className="relative left-[10%] flex h-full w-[40%] flex-col justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <motion.h1
                  className="text-[1.5vw] font-[400] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  Hello, I'm
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  <TypeAnimation
                    sequence={["Felix Kuandi", 3000, "An Entrepreneur", 3000]}
                    wrapper="a"
                    cursor={true}
                    repeat={Infinity}
                    className="mt-2 text-[3vw] font-[500] text-white"
                    speed={1}
                  />
                </motion.h2>
                <motion.h3
                  className="mt-4 text-justify text-[1.25vw] font-[300] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  Hello! I am an entrepreneur with a passion for innovation and
                  a vision for the future. Currently, I am embarking on an
                  exciting journey to establish my own start-up business.
                </motion.h3>
              </motion.a>
            </motion.p>
            {/* Part3 */}
            <motion.p
              className="absolute flex h-full w-full items-center"
              style={{
                backgroundColor: "#000000",
                backgroundImage:
                  "linear-gradient(to right, #000000 0%, transparent 50%), url(../Visuals/Programmer_BG.png)",
                backgroundPosition: "20vw 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                rotateY: "-180deg",
                display: useTransform(
                  scrollPage,
                  [0 / 1000, 600 / 1000, 600 / 1000, 850 / 1000, 850 / 1000],
                  ["none", "none", "flex", "flex", "none"],
                ),
              }}
            >
              <motion.a
                className="relative left-[10%] flex h-full w-[42%] flex-col justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <motion.h1
                  className="text-[1.5vw] font-[400] leading-[1] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  I'm Also An
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="flex flex-col"
                >
                  <span className="text-[3vw] font-[500] text-white">
                    UI/UX Designer
                  </span>
                  <span className="mt-2 text-[1.5vw] font-[400] leading-[1] text-white">
                    And A
                  </span>
                  <span className="text-[3vw] font-[500] text-white">
                    Front-End Developer
                  </span>
                </motion.h2>
                <motion.h3
                  className="mt-4 text-justify text-[1.25vw] font-[300] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  As a UI/UX Designer and Front-End Developer, I create
                  intuitive and engaging user experiences while leveraging my
                  coding skills to bring innovative web solutions to life. My
                  passion lies in merging design with functionality to build
                  visually appealing and user-friendly platforms.
                </motion.h3>
              </motion.a>
            </motion.p>
            {/* Part4 */}
            <motion.p
              className="absolute flex h-full w-full items-center"
              style={{
                backgroundColor: "#000000",
                backgroundImage:
                  "linear-gradient(to right, transparent 30%, #000000 75%), url(../Visuals/About_Me.jpg)",
                backgroundPosition: "0% 50%",
                backgroundSize: "auto 225%",
                backgroundRepeat: "no-repeat",
                display: useTransform(
                  scrollPage,
                  [0 / 1000, 850 / 1000, 850 / 1000],
                  ["none", "none", "flex"],
                ),
              }}
            >
              <motion.li
                className="relative left-[55%] flex h-full w-full max-w-[40%] flex-col justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <div className="flex justify-between">
                  <motion.a
                    className="flex aspect-square w-full max-w-[45%] flex-col items-center justify-center rounded-[2vw] border-[0.4vw] border-b-[0.8vw] border-r-[0.8vw] border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    <FaAward className="text-[3vw] text-white" />
                    <h1 className="mt-1 text-[1.5vw] text-white">Experience</h1>
                    <h2 className="text-[1.25vw] font-thin text-white">
                      1 Year
                    </h2>
                  </motion.a>
                  <motion.a
                    className="flex aspect-square w-full max-w-[45%] flex-col items-center justify-center rounded-[2vw] border-[0.4vw] border-b-[0.8vw] border-r-[0.8vw] border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    <FaProjectDiagram className="text-[3vw] text-white" />
                    <h1 className="mt-1 text-[1.5vw] text-white">Projects</h1>
                    <h2 className="text-[1.25vw] font-thin text-white">
                      1 Project
                    </h2>
                  </motion.a>
                </div>
                <motion.a
                  className="mt-[2vw] w-full text-justify text-[1.25vw] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  For the past year, I have been on an exciting journey to
                  launch my own start-up business. My vision centers around
                  creating a website-based platform that I believe has great
                  potential. Throughout this time, I have dedicated myself to
                  learning both front-end and back-end programming, equipping
                  myself with the skills necessary to bring my vision to life.
                </motion.a>
              </motion.li>
            </motion.p>
          </motion.div>

          <motion.div
            className="absolute flex aspect-[2/1] w-[70%] items-center justify-center overflow-hidden rounded-[3vw] bg-black shadow-[0_0_0_0.5vw_black,_0_0_0_1vw_gray]"
            style={{
              transformPerspective: "200vh",
              rotateY: useTransform(
                scrollPage,
                [
                  0 / 1000,
                  500 / 1000,
                  600 / 1000,
                  700 / 1000,
                  750 / 1000,
                  850 / 1000,
                  950 / 1000,
                  1000 / 1000,
                ],
                [0, 0, -90, -180, -180, -270, -360, -360],
              ),
              translateY: "110%",
              scaleY: "-1",
            }}
          >
            <motion.p
              className="flex h-[80%] flex-col items-center justify-between text-gray-300"
              style={{
                opacity: useSpring(
                  useTransform(scrollPage, [0 / 1000, 1 / 1000], [1, 0]),
                  {
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  },
                ),
              }}
            >
              <a className="flex flex-col items-center gap-5 text-center font-light">
                <motion.span
                  animate={{ translateY: ["-50%", "50%"] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <FaArrowUp className="text-3xl" />
                </motion.span>
                Scroll Up to Reveal Navigation
              </a>
              <FaHandPointUp className="text-8xl" />
              <a className="flex flex-col items-center gap-5 text-center font-light">
                Scroll Down to Reveal Content
                <motion.span
                  animate={{ translateY: ["-50%", "50%"] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <FaArrowDown className="text-3xl" />
                </motion.span>
              </a>
            </motion.p>
            <motion.li
              className="absolute flex items-center justify-center overflow-hidden rounded-[5vw] text-[10vw] text-white"
              style={{
                width: useTransform(
                  scrollPage,
                  [0 / 1000, 100 / 1000, 200 / 1000, 300 / 1000],
                  ["0%", "10%", "100%", "100%"],
                ),
                height: useTransform(
                  scrollPage,
                  [0 / 1000, 100 / 1000, 200 / 1000, 300 / 1000],
                  ["0%", "5%", "5%", "100%"],
                ),
                opacity: useTransform(
                  scrollPage,
                  [300 / 1000, 400 / 1000],
                  [1, 0],
                ),
              }}
            >
              INTRODUCTION
            </motion.li>
            {/* Part2 */}
            <motion.p
              className="absolute flex h-full w-full items-center"
              style={{
                backgroundColor: "#000000",
                backgroundImage:
                  "linear-gradient(to right, #000000 20%, transparent 70%), url(../Visuals/Profile_Image.jpeg)",
                backgroundPosition: "-150% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: useTransform(
                  scrollPage,
                  [0 / 1000, 300 / 1000, 300 / 1000, 600 / 1000, 600 / 1000],
                  ["none", "none", "flex", "flex", "none"],
                ),
                opacity: useTransform(
                  scrollPage,
                  [300 / 1000, 400 / 1000],
                  [0, 1],
                ),
              }}
            >
              <motion.a
                className="relative left-[10%] flex h-full w-[40%] flex-col justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <motion.h1
                  className="text-[1.5vw] font-[400] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  Hello, I'm
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  <TypeAnimation
                    sequence={["Felix Kuandi", 3000, "An Entrepreneur", 3000]}
                    wrapper="a"
                    cursor={true}
                    repeat={Infinity}
                    className="mt-2 text-[3vw] font-[500] text-white"
                    speed={1}
                  />
                </motion.h2>
                <motion.h3
                  className="mt-4 text-justify text-[1.25vw] font-[300] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  Hello! I am an entrepreneur with a passion for innovation and
                  a vision for the future. Currently, I am embarking on an
                  exciting journey to establish my own start-up business.
                </motion.h3>
              </motion.a>
            </motion.p>
            {/* Part3 */}
            <motion.p
              className="absolute flex h-full w-full items-center"
              style={{
                backgroundColor: "#000000",
                backgroundImage:
                  "linear-gradient(to right, #000000 0%, transparent 50%), url(../Visuals/Programmer_BG.png)",
                backgroundPosition: "20vw 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                rotateY: "-180deg",
                display: useTransform(
                  scrollPage,
                  [0 / 1000, 600 / 1000, 600 / 1000, 850 / 1000, 850 / 1000],
                  ["none", "none", "flex", "flex", "none"],
                ),
              }}
            >
              <motion.a
                className="relative left-[10%] flex h-full w-[42%] flex-col justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <motion.h1
                  className="text-[1.5vw] font-[400] leading-[1] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  I'm Also An
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="flex flex-col"
                >
                  <span className="text-[3vw] font-[500] text-white">
                    UI/UX Designer
                  </span>
                  <span className="mt-2 text-[1.5vw] font-[400] leading-[1] text-white">
                    And A
                  </span>
                  <span className="text-[3vw] font-[500] text-white">
                    Front-End Developer
                  </span>
                </motion.h2>
                <motion.h3
                  className="mt-4 text-justify text-[1.25vw] font-[300] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  As a UI/UX Designer and Front-End Developer, I create
                  intuitive and engaging user experiences while leveraging my
                  coding skills to bring innovative web solutions to life. My
                  passion lies in merging design with functionality to build
                  visually appealing and user-friendly platforms.
                </motion.h3>
              </motion.a>
            </motion.p>
            {/* Part4 */}
            <motion.p
              className="absolute flex h-full w-full items-center"
              style={{
                backgroundColor: "#000000",
                backgroundImage:
                  "linear-gradient(to right, transparent 30%, #000000 75%), url(../Visuals/About_Me.jpg)",
                backgroundPosition: "0% 50%",
                backgroundSize: "auto 225%",
                backgroundRepeat: "no-repeat",
                display: useTransform(
                  scrollPage,
                  [0 / 1000, 850 / 1000, 850 / 1000],
                  ["none", "none", "flex"],
                ),
              }}
            >
              <motion.li
                className="relative left-[55%] flex h-full w-full max-w-[40%] flex-col justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <div className="flex justify-between">
                  <motion.a
                    className="flex aspect-square w-full max-w-[45%] flex-col items-center justify-center rounded-[2vw] border-[0.4vw] border-b-[0.8vw] border-r-[0.8vw] border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    <FaAward className="text-[3vw] text-white" />
                    <h1 className="mt-1 text-[1.5vw] text-white">Experience</h1>
                    <h2 className="text-[1.25vw] font-thin text-white">
                      1 Year
                    </h2>
                  </motion.a>
                  <motion.a
                    className="flex aspect-square w-full max-w-[45%] flex-col items-center justify-center rounded-[2vw] border-[0.4vw] border-b-[0.8vw] border-r-[0.8vw] border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    <FaProjectDiagram className="text-[3vw] text-white" />
                    <h1 className="mt-1 text-[1.5vw] text-white">Projects</h1>
                    <h2 className="text-[1.25vw] font-thin text-white">
                      1 Project
                    </h2>
                  </motion.a>
                </div>
                <motion.a
                  className="mt-[2vw] w-full text-justify text-[1.25vw] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  For the past year, I have been on an exciting journey to
                  launch my own start-up business. My vision centers around
                  creating a website-based platform that I believe has great
                  potential. Throughout this time, I have dedicated myself to
                  learning both front-end and back-end programming, equipping
                  myself with the skills necessary to bring my vision to life.
                </motion.a>
              </motion.li>
            </motion.p>
          </motion.div>

          <motion.div
            className="absolute flex aspect-[2/1] w-[70%] items-center justify-center bg-[linear-gradient(to_top,_#000000_50%,_transparent)] backdrop-blur-sm"
            style={{
              transformPerspective: "200vh",
              rotateY: useTransform(
                scrollPage,
                [
                  0 / 1000,
                  500 / 1000,
                  600 / 1000,
                  700 / 1000,
                  750 / 1000,
                  850 / 1000,
                  950 / 1000,
                  1000 / 1000,
                ],
                [0, 0, -90, -180, -180, -270, -360, -360],
              ),
              translateY: "110%",
              scale: "1.15",
            }}
          ></motion.div>
        </motion.main>
      </motion.section>

      <section
        className="relative flex w-screen flex-col items-center justify-start bg-black pb-[33rem] lg:hidden"
        id="profileresponsive"
      >
        <p className="absolute z-0 h-full">
          <li className="sticky top-0 flex h-screen items-center justify-center text-[16.5vw] leading-[1] text-white">
            INTRODUCTION
          </li>
        </p>
        <motion.p
          className="z-10 mt-20 flex aspect-[2/1] w-[90%] items-center justify-center overflow-hidden rounded-[5vw] border-[0.2rem] border-black bg-black shadow-[0_0_0_0.2rem_gray] backdrop-brightness-[25%]"
          style={{
            backgroundImage: "url(../Visuals/Profile_Image.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "60% 50%",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        ></motion.p>
        <motion.h1
          className="z-10 mt-10 w-[90%] text-xl font-[400] text-white shadow-[0_0_1rem_1rem_rgba(0,_0,_0,_0.8)] backdrop-brightness-[25%]"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Hello, I'm
        </motion.h1>
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="z-10 mt-2 w-[90%] text-4xl font-[500] text-white shadow-[0_0_1rem_1rem_rgba(0,_0,_0,_0.8)] backdrop-brightness-[25%]"
        >
          <TypeAnimation
            sequence={["Felix Kuandi", 3000, "An Entrepreneur", 3000]}
            wrapper="a"
            cursor={true}
            repeat={Infinity}
            speed={1}
          />
        </motion.h2>
        <motion.h3
          className="z-10 mt-5 w-[90%] text-justify text-lg font-[300] text-white shadow-[0_0_1rem_1rem_rgba(0,_0,_0,_0.8)] backdrop-brightness-[25%]"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Hello! I am an entrepreneur with a passion for innovation and a vision
          for the future. Currently, I am embarking on an exciting journey to
          establish my own start-up business.
        </motion.h3>
        <motion.p
          className="z-10 mt-10 flex aspect-[2/1] w-[90%] items-center justify-center overflow-hidden rounded-[5vw] border-[0.2rem] border-black bg-black shadow-[0_0_0_0.2rem_gray] backdrop-brightness-[25%]"
          style={{
            backgroundImage: "url(../Visuals/Programmer_BG.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        ></motion.p>
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="z-10 mt-10 flex w-[90%] flex-col text-white shadow-[0_0_1rem_1rem_rgba(0,_0,_0,_0.8)] backdrop-brightness-[25%]"
        >
          <span className="z-10 mt-5 text-xl font-[400] leading-[1] text-white backdrop-brightness-[25%]">
            I'm Also An
          </span>
          <span className="z-10 text-3xl font-[500] backdrop-brightness-[25%]">
            UI/UX Designer
          </span>
          <span className="z-10 mt-5 text-xl font-[400] leading-[1] text-white backdrop-brightness-[25%]">
            And A
          </span>
          <span className="z-10 text-3xl font-[500] backdrop-brightness-[25%]">
            Front-End Developer
          </span>
        </motion.h1>
        <motion.h2
          className="z-10 mt-5 w-[90%] text-justify text-lg font-[300] text-white shadow-[0_0_1rem_1rem_rgba(0,_0,_0,_0.8)] backdrop-brightness-[25%]"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          As a UI/UX Designer and Front-End Developer, I create intuitive and
          engaging user experiences while leveraging my coding skills to bring
          innovative web solutions to life. My passion lies in merging design
          with functionality to build visually appealing and user-friendly
          platforms.
        </motion.h2>
        <motion.p
          className="z-10 mt-10 flex aspect-[2/1] w-[90%] items-center justify-center overflow-hidden rounded-[5vw] border-[0.2rem] border-black bg-black shadow-[0_0_0_0.2rem_gray] backdrop-brightness-[25%]"
          style={{
            backgroundImage: "url(../Visuals/About_Me.jpg)",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        ></motion.p>
        <div className="z-10 mt-10 flex w-[90%] justify-between shadow-[0_0_1rem_1rem_rgba(0,_0,_0,_0.8)] backdrop-brightness-[25%]">
          <motion.a
            className="z-10 flex aspect-square w-full max-w-[45%] flex-col items-center justify-center rounded-[2vw] border-[0.4vw] border-b-[0.9vw] border-r-[0.9vw] border-gray-100 shadow-[0_0_1rem_1rem_rgba(0,_0,_0,_0.8)]"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <FaAward className="z-10 text-4xl text-white backdrop-brightness-[25%]" />
            <h1 className="z-10 mt-3 text-xl text-white backdrop-brightness-[25%]">
              Experience
            </h1>
            <h2 className="z-10 text-base font-thin text-white backdrop-brightness-[25%]">
              1 Year
            </h2>
          </motion.a>
          <motion.a
            className="z-10 flex aspect-square w-full max-w-[45%] flex-col items-center justify-center rounded-[2vw] border-[0.4vw] border-b-[0.9vw] border-r-[0.9vw] border-gray-100 shadow-[0_0_1rem_1rem_rgba(0,_0,_0,_0.8)] backdrop-brightness-[25%]"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <FaProjectDiagram className="z-10 text-4xl text-white backdrop-brightness-[25%]" />
            <h1 className="z-10 mt-3 text-xl text-white backdrop-brightness-[25%]">
              Projects
            </h1>
            <h2 className="z-10 text-base font-thin text-white backdrop-brightness-[25%]">
              1 Project
            </h2>
          </motion.a>
        </div>
        <motion.a
          className="z-10 mt-5 w-[90%] text-justify text-lg text-white shadow-[0_0_1rem_1rem_rgba(0,_0,_0,_0.8)] backdrop-brightness-[25%]"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          For the past year, I have been on an exciting journey to launch my own
          start-up business. My vision centers around creating a website-based
          platform that I believe has great potential. Throughout this time, I
          have dedicated myself to learning both front-end and back-end
          programming, equipping myself with the skills necessary to bring my
          vision to life.
        </motion.a>
      </section>
    </>
  );
};

export const scrollToProfile = () => {
  setTimeout(() => {
    const profileElement = document.getElementById("profile");
    if (profileElement) {
      const offset = 2 * window.innerHeight;
      const targetPosition =
        profileElement.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: targetPosition, behavior: "auto" });
    }
  }, 1000);

  setTimeout(() => {
    const profileElement = document.getElementById("profileresponsive");
    if (profileElement) {
      const offset = -1 * window.innerHeight;
      const targetPosition =
        profileElement.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: targetPosition, behavior: "auto" });
    }
  }, 1000);
};

export default Profile;
