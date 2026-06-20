import { motion } from "motion/react";
import React from "react";

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
  if (!title) return null;

  // Split by '|' to define color groups.
  // If no '|' is present, the whole title will be in the primary color.
  const parts = title.split("|");

  return parts.map((part, index) => {
    const color = index % 2 === 0 ? primaryColor : secondaryColor;

    // Split by '<br />' for manual line breaks
    const lines = part.split("<br />");

    return (
      <span key={index} style={{ color }}>
        {lines.map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    );
  });
};
