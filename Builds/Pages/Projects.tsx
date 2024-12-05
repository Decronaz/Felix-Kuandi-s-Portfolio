import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHandPointUp } from "react-icons/fa";

const images = [
  "../Visuals/Fontopia_1.png",
  "../Visuals/Fontopia_2.png",
  "../Visuals/Fontopia_3.png",
  "../Visuals/Fontopia_4.png",
];

function Projects() {
  const MainRef = useRef(null);
  const { scrollYProgress: MainScroll } = useScroll({
    target: MainRef,
    offset: ["start end", "end start"],
  });

  const PageRef = useRef(null);
  const { scrollYProgress: scrollPage } = useScroll({
    target: PageRef,
  });

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="flex h-[250vh] w-screen justify-center overflow-clip bg-black"
      ref={PageRef}
    >
      <motion.main
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-clip"
        ref={MainRef}
        style={{
          translateY: useTransform(
            MainScroll,
            [0, 0.5, 1],
            ["-100vh", "0vh", "0vh"],
          ),
        }}
      >
        <motion.div
          className="absolute z-20 flex h-screen w-screen items-center justify-center overflow-hidden bg-black"
          style={{
            translateY: useTransform(
              scrollPage,
              [0 / 250, 100 / 250, 200 / 250],
              ["0%", "0%", "-100%"],
            ),
          }}
        >
          <motion.li
            className="flex h-screen w-screen items-center justify-center text-[13vw] text-white"
            style={{
              translateY: useTransform(
                scrollPage,
                [0 / 250, 100 / 250, 200 / 250],
                ["0%", "0%", "100%"],
              ),
            }}
          >
            MY PROJECT
          </motion.li>
        </motion.div>
        <div className="z-10 flex h-screen w-screen items-center justify-center">
          {images.map((image, index) => (
            <motion.p
              key={index}
              className={`absolute aspect-[2/1] w-[90%] md:w-[80%] lg:w-[70%] ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                transition: "opacity 0.5s ease-in-out",
              }}
            ></motion.p>
          ))}

          {/* Clickable Overlay */}
          <p
            className="absolute flex h-screen w-screen cursor-pointer flex-col items-center justify-center bg-[#000000cc]"
            style={{
              backdropFilter: "blur(4px)",
              opacity: clicked ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
            onClick={handleClick}
          >
            <div className="flex flex-col items-center justify-center gap-4 px-4 text-white md:gap-[5vh]">
              <img
                src="../Visuals/Fontopia_Logo.png"
                alt="Fontopia Logo"
                className="w-3/4 invert md:w-1/3"
              />
              <a className="w-3/4 text-justify text-sm md:w-1/2 md:text-center md:text-base lg:text-[1rem]">
                A revolutionary web application that allows you to create your
                own custom font based on your handwriting. With just a few
                simple steps, you can turn your handwriting into a digital font
                that can be used in various projects.
              </a>
              <a className="text-gray-250 flex flex-col items-center justify-center gap-2">
                <span className="text-xs font-thin md:text-sm">
                  Click To View
                </span>
                <FaHandPointUp className="text-xl md:text-2xl" />
              </a>
            </div>
          </p>
        </div>

        {/* Mirror Images */}
        <div className="absolute flex aspect-[2/1] w-[90%] translate-y-[110%] scale-y-[-1] items-center justify-center md:w-[80%] lg:w-[70%]">
          {images.map((image, index) => (
            <motion.p
              key={index}
              className={`absolute size-full ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                transition: "opacity 0.5s ease-in-out",
              }}
            ></motion.p>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute flex aspect-[2/1] w-[90%] translate-y-[110%] scale-[1.1] items-center justify-center bg-[linear-gradient(to_top,_#000000_50%,_#00000078)] backdrop-blur-sm md:w-[80%] lg:w-[70%]"></div>
      </motion.main>
    </section>
  );
}

export const scrollToProjects = () => {
  setTimeout(() => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      const offset = 0.25 * window.innerHeight;
      const targetPosition =
        projectsElement.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: targetPosition, behavior: "auto" });
    }
  }, 1000);
};

export default Projects;
