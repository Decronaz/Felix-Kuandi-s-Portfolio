import { motion } from "framer-motion";
import { useState } from "react";
import { TextAnimation } from "../Effects/Text_Animation";
import { FaHandPointUp } from "react-icons/fa";

function MainTitle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsOpen(true);
      setIsClicked(true);
    }
  };

  return (
    <>
      <motion.div
        className="fixed left-0 z-50 flex h-full w-[50%] cursor-pointer flex-col items-end justify-center overflow-hidden bg-white"
        initial={{ x: 0, boxShadow: "50vw 0 0 50vw #000000" }}
        animate={{
          x: isOpen ? "-100%" : "0",
          boxShadow: isOpen
            ? "50vw 0 0 50vw #00000000"
            : "50vw 0 0 50vw #000000",
        }}
        transition={{
          duration: 1.5,
          ease: "circInOut",
          boxShadow: { duration: 2, delay: 1 },
        }}
        onClick={handleClick}
      >
        <li className="translate-x-[50%] select-none text-nowrap text-[10vw] uppercase leading-[1] text-black">
          <TextAnimation text="Felix Kuandi's" />
        </li>
        <li className="translate-x-[50%] select-none text-nowrap text-[10vw] uppercase leading-[1] text-black">
          <TextAnimation text="Portfolio" />
        </li>
      </motion.div>

      <motion.div
        className="fixed right-0 z-50 flex h-full w-[50%] cursor-pointer flex-col items-start justify-center overflow-hidden bg-white"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "100%" : "0" }}
        transition={{ duration: 1.5, ease: "circInOut" }}
        onClick={handleClick}
      >
        <li className="translate-x-[-50%] select-none text-nowrap text-[10vw] uppercase leading-[1] text-black">
          <TextAnimation text="Felix Kuandi's" />
        </li>
        <li className="translate-x-[-50%] select-none text-nowrap text-[10vw] uppercase leading-[1] text-black">
          <TextAnimation text="Portfolio" />
        </li>
      </motion.div>

      <motion.div
        className="fixed bottom-0 z-50 flex h-1/3 w-screen cursor-pointer flex-col items-center justify-center"
        style={{
          translateY: isOpen ? "100%" : "0%",
          opacity: isOpen ? "0" : "1",
          transition: "transform 1s ease-in-out, opacity 1s ease",
        }}
        onClick={handleClick}
      >
        <span className="text-sm">Click To Start</span>
        <FaHandPointUp className="text-2xl" />
      </motion.div>
    </>
  );
}

export default MainTitle;
