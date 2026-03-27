import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Lenis from 'lenis';
import Layout from './components/Layout';
import CardNav from './components/CardNav';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import LiveSessions from './pages/LiveSessions';
import Community from './pages/Community';
import About from './pages/About';
import Contact from './pages/Contact';
import ClassDetails from './pages/ClassDetails';
import Profile from './pages/Profile';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="live-sessions" element={<LiveSessions />} />
          <Route path="live-sessions/:id" element={<ClassDetails />} />
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.0,
      smoothWheel: true,
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    return () => { lenis.destroy() };
  }, []);

  return (
    // @ts-expect-error vite injects import.meta.env
    <Router basename={import.meta.env.BASE_URL}>
      <Preloader />
      <CustomCursor />
      <div className="fixed inset-0 z-[-2] bg-slate-50 dark:bg-slate-950 transition-colors duration-300"></div>
      
      {/* Ambient Noise Overlay */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

      {/* Floating Ambient Orbs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none flex items-center justify-center opacity-40 dark:opacity-60">
        <motion.div 
          animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-blue-400/20 dark:bg-[#0f4c81]/30 blur-[100px] -translate-x-1/4 -translate-y-1/4"
        />
        <motion.div 
          animate={{ x: [0, -120, 80, 0], y: [0, 80, -120, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-400/20 dark:bg-purple-900/20 blur-[100px] translate-x-1/3 translate-y-1/3"
        />
      </div>

      <CardNav />
      <AnimatedRoutes />
    </Router>
  );
}
