"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

export function TextAnimation({ text = "Text" }: { text: string }) {
  const ref = React.useRef(null);

  return (
    <AnimatePresence>
      {text.split("").map((char, i) => (
        <motion.span
          ref={ref}
          key={i}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          exit="hidden"
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.span>
      ))}
    </AnimatePresence>
  );
}
