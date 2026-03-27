import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide scrolling on the body while loading
    document.body.style.overflow = 'hidden';

    // Total animation time (2000ms = 2 seconds)
    const duration = 2000;
    const interval = 20; // 50 frames per second
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Calculate cubic easing for the progress number so it slows down nicely
      const progressRatio = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4);
      
      const newProgress = Math.min(Math.round(easeOutQuart * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Add a tiny artificial delay at 100% so the user actually registers it
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = 'auto';
        }, 400);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'auto'; // safety cleanup
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100vh' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col items-center justify-center overflow-hidden pointer-events-none"
        >
          {/* Central Branding Highlight */}
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 h-24 bg-[#0f4c81] dark:bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-900/20"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="overflow-hidden"
            >
              <h1 className="text-4xl md:text-5xl font-black text-[#0f4c81] dark:text-white tracking-[0.2em] uppercase">
                Mentora
              </h1>
            </motion.div>
          </div>

          {/* Clean Progress Indicator at Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-16 flex flex-col items-center gap-4 w-full max-w-[200px]"
          >
            <div className="flex w-full justify-between items-end px-1">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase">
                Loading
              </span>
              <span className="text-xl font-medium text-[#0f4c81] dark:text-white tabular-nums leading-none">
                {progress}%
              </span>
            </div>
            
            {/* Minimal Track Bar */}
            <div className="w-full h-[3px] bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#0f4c81] dark:bg-blue-500 rounded-full" 
                style={{ width: `${progress}%`, transition: 'width 0.1s linear' }} 
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
