import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Track continuous mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Apply a tighter, more responsive spring to the motion values for the geometric arrow
  const springConfig = { stiffness: 800, damping: 35, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on desktop environments
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      // We offset by 2px to align the SVG's actual 0,0 tip tightly under the invisible cursor core
      cursorX.set(e.clientX - 2); 
      cursorY.set(e.clientY - 2); 
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the current hovered element is interactive
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
        
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide default cursor globally on desktop
  useEffect(() => {
    if (!window.matchMedia("(pointer: coarse)").matches) {
      document.body.style.cursor = 'none';
      
      // Inject CSS rule to remove cursor on all interactive elements
      const style = document.createElement('style');
      style.innerHTML = `* { cursor: none !important; }`;
      document.head.appendChild(style);
      
      return () => {
        document.body.style.cursor = 'auto';
        document.head.removeChild(style);
      }
    }
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.svg 
        width="32" 
        height="32" 
        viewBox="-2 -2 24 24" 
        className="origin-top-left"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }}
        animate={{ 
          scale: isHovering ? 0.85 : 1,
          rotate: isHovering ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <motion.path 
         d="M0 0 L18 6.5 L10.5 10.5 L6.5 18 Z" 
         animate={{
           fill: isHovering ? "#0f4c81" : "#ffffff",
           stroke: isHovering ? "#ffffff" : "#0f4c81",
         }}
         transition={{ duration: 0.2 }}
         strokeWidth="1.5" 
         strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}
