import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface CurvedLoopProps {
  text: string;
  radius?: number;
  duration?: number;
  className?: string;
}

export default function CurvedLoop({ text, radius = 50, duration = 10, className = '' }: CurvedLoopProps) {
  const characters = text.split('');
  const angle = 360 / characters.length;

  return (
    <div className={`relative flex items-center justify-center pointer-events-none ${className}`} style={{ width: radius * 2 + 40, height: radius * 2 + 40 }}>
      <Sparkles className="absolute w-6 h-6 text-gray-400 opacity-50" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {characters.map((char, i) => (
          <span
            key={i}
            className="absolute flex items-center justify-center font-bold uppercase tracking-widest"
            style={{
              transform: `rotate(${i * angle}deg) translateY(-${radius}px)`,
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
