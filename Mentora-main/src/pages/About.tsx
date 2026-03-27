import React from 'react';
import { motion } from 'motion/react';
import ShinyText from '../components/ShinyText';
import BlurText from '../components/BlurText';
import ProfileCard from '../components/ProfileCard';

// @ts-expect-error vite injects import.meta.env
const BASE = import.meta.env.BASE_URL;

const TEAM_MEMBERS = [
  { name: 'Muhammad Sinan', role: 'Chief Executive Officer', image: `${BASE}members/Muhammad Sinan.jpeg` },
  { name: 'Joe mani', role: 'Co-Founder', image: `${BASE}members/Joe mani.jpeg` },
  { name: 'Mathew Joseph', role: 'Tech Lead', image: `${BASE}members/Mathew Joseph.jpeg` },
  { name: 'Kezia sarah', role: 'Design Lead', image: `${BASE}members/Kezia sarah.jpeg` },
  { name: 'Mathson Biju', role: 'Community Manager', image: `${BASE}members/Mathson Biju.jpeg` },
  { name: 'Muhammed Azad CB', role: 'Operations Head', image: `${BASE}members/Muhammed Azad CB.jpeg` },
];

export default function About() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
      }}
      className="flex flex-col w-full min-h-screen relative z-10"
    >
      <div className="relative overflow-hidden pt-40 pb-20 px-6 text-center">
        <motion.h1 
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-6"
        >
          About Mentora
        </motion.h1>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed"
        >
          Mentora is a peer-to-peer learning platform designed to bridge the gap between students and expert mentorship. We believe in collaborative studying and finding success together.
        </motion.p>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-12 w-full">
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-20"
        />
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <BlurText text="Our Mission" className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-16 text-center justify-center flex w-full" delay={0.1} />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }} 
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg shadow-blue-500/5 dark:shadow-none border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold text-[#0f4c81] dark:text-blue-400 mb-4">Empower Students</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We provide access to top-notch study materials, previous year questions, and comprehensive notes all in one place. No more endless searching, just focus on what really matters: understanding the core concepts and acing your exams.
            </p>
          </motion.div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }} 
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg shadow-purple-500/5 dark:shadow-none border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">Expert Mentorship</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              By connecting students directly with verified mentors, we allow for real-time guidance, career advice, and live interactive classes. Whether you are stuck on a bug or need architecture advice, our community helps you grow.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <BlurText text="Meet The Team" className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-20 text-center justify-center flex w-full" delay={0.2} />
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {TEAM_MEMBERS.map((member, i) => (
              <ProfileCard 
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
