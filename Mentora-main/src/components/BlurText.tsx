import React from 'react';
import { motion } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function BlurText({ text, className = "", delay = 0 }: BlurTextProps) {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: "easeOut",
          }}
          className="mr-2 last:mr-0 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
