// @ts-ignore
import { ReactLenis } from "lenis/dist/lenis-react";
import { useState, useEffect } from "react";

let setLerpValue: (value: number) => void;

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const [lerp, setLerp] = useState(0.05);
  setLerpValue = setLerp;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLerp(0.05);
    }, 1000);

    return () => clearTimeout(timer);
  }, [lerp]);

  return (
    <ReactLenis
      root
      options={{
        lerp,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export const changeLerpValue = (value: number) => {
  if (setLerpValue) {
    setTimeout(() => {
      setLerpValue(value);
      setTimeout(() => {
        setLerpValue(0.05);
      }, 1000);
    }, 500);
  }
};

export const changeLerpValueRes = (value: number) => {
  if (setLerpValue) {
    setLerpValue(value);
    setTimeout(() => {
      setLerpValue(0.05);
    }, 1000);
  }
};

export default SmoothScroll;
