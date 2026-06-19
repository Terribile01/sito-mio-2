import { motion } from "motion/react";

export const GlowCircle = ({ color, size, top, left, delay }: { color: string, size: string, top: string, left: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    transition={{ duration: 2, delay }}
    className={`absolute rounded-full blur-[120px] animate-pulse-glow z-0 pointer-events-none`}
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      top,
      left,
    }}
  />
);

export const renderSplitTitle = (title: string, primaryColor: string = "#FFFFFF", secondaryColor: string = "#9B5CFF") => {
  const words = title.split(" ");
  return words.map((word, i) => (
    <span key={i} style={{ color: i % 2 === 0 ? primaryColor : secondaryColor }} className="mr-[0.2em]">
      {word}
    </span>
  ));
};
