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
          initial={{ filter: "blur(10px)", opacity: 0, y: 15 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mr-2 last:mr-0 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
