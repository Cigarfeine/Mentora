import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, FileText, PlayCircle, BookOpen, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShinyText from '../components/ShinyText';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <div className="bg-[#0f4c81] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50 L100,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M0,70 Q25,45 50,70 T100,70 L100,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <ShinyText color="#e2e8f0" shineColor="#ffffff" speed={3} className="block">
                Learn from those<br />who've been there.
              </ShinyText>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-md">
              Join the largest community of B.Tech students. Access study materials, live sessions, and expert mentorship.
            </p>
            <button className="bg-white text-[#0f4c81] px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg">
              Get Started
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto w-full"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              Good morning, Abu <span className="text-2xl">👋</span>
            </h2>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email / College ID" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c81] transition-shadow"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c81] transition-shadow"
              />
              <button className="w-full bg-[#0f4c81] text-white py-3 rounded-lg font-semibold hover:bg-[#0c3d68] transition-colors">
                Login
              </button>
              <div className="text-center">
                <a href="#" className="text-sm text-slate-500 hover:text-[#0f4c81]">Forgot password?</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Access Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-12 w-full">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Quick Access</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/subjects">
            <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Subjects & Materials</h4>
              <p className="text-slate-500 text-sm">Access notes, previous year questions, and lab records.</p>
            </motion.div>
          </Link>

          <Link to="/live-sessions">
            <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Live Sessions</h4>
              <p className="text-slate-500 text-sm">Join expert-led classes and interact with mentors.</p>
            </motion.div>
          </Link>

          <Link to="/community">
            <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Community</h4>
              <p className="text-slate-500 text-sm">Discuss topics, share projects, and get exam tips.</p>
            </motion.div>
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
