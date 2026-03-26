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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full min-h-screen"
    >
      <div className="bg-[#0f4c81] relative overflow-hidden py-32 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <ShinyText color="#e2e8f0" shineColor="#ffffff" speed={3}>
            About Mentora
          </ShinyText>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-blue-100">
          Mentora is a peer-to-peer learning platform designed to bridge the gap between students and expert mentorship. We believe in collaborative studying and finding success together.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <BlurText text="Our Mission" className="text-3xl font-bold text-slate-800 mb-12 text-center justify-center flex w-full" delay={0.1} />
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-500/5 border border-slate-100">
            <h3 className="text-2xl font-bold text-[#0f4c81] mb-4">Empower Students</h3>
            <p className="text-slate-600 leading-relaxed">
              We provide access to top-notch study materials, previous year questions, and comprehensive notes all in one place. No more endless searching, just focus on what really matters: understanding the core concepts and acing your exams.
            </p>
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-lg shadow-purple-500/5 border border-slate-100">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Expert Mentorship</h3>
            <p className="text-slate-600 leading-relaxed">
              By connecting students directly with verified mentors, we allow for real-time guidance, career advice, and live interactive classes. Whether you are stuck on a bug or need architecture advice, our community helps you grow.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-slate-100/50 py-24 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <BlurText text="Meet The Team" className="text-5xl font-extrabold text-slate-900 mb-16 text-center justify-center flex w-full" delay={0.2} />
          
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
