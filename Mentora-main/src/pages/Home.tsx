import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, FileText, PlayCircle, BookOpen, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ShinyText from '../components/ShinyText';
import Iridescence from '../components/Iridescence';
import CurvedLoop from '../components/CurvedLoop';
import BlurText from '../components/BlurText';

export default function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'demo@mentora.com' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/subjects');
    } else {
      setError('Invalid demo credentials. Use demo@mentora.com / password');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full -mt-28 md:-mt-32"
    >
      {/* Hero Section */}
      <div className="bg-[#0f4c81] relative overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-auto">
          <Iridescence color={[0.6, 0.8, 1]} speed={0.8} amplitude={0.15} className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-16 pt-8 md:pb-24 md:pt-16 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="text-white"
          >
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
            >
              <ShinyText color="#e2e8f0" shineColor="#ffffff" speed={3} className="block">
                Learn from those<br />who've been there.
              </ShinyText>
            </motion.h1>
            <div className="mb-10 max-w-lg">
              <BlurText 
                text="Join the largest community of B.Tech students. Access study materials, live sessions, and expert mentorship." 
                delay={0.5} 
                className="text-blue-100/90 text-lg md:text-xl font-light leading-relaxed" 
              />
            </div>
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-8"
            >
              <Link to="/subjects">
                <button className="bg-white text-[#0f4c81] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                  Get Started
                </button>
              </Link>
              <div className="opacity-80 hidden md:block">
                <CurvedLoop text="EXPLORE • LEARN • GROW • " radius={40} duration={12} className="text-blue-100 font-semibold tracking-widest" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] max-w-md mx-auto w-full relative"
          >
            {localStorage.getItem('isLoggedIn') === 'true' ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Ready to learn?</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 flex-1">Jump right back into your subjects and sessions.</p>
                <Link to="/subjects">
                  <button className="w-full bg-[#0f4c81] text-white py-3 rounded-lg font-semibold hover:bg-[#0c3d68] transition-colors shadow-sm">
                    Go to Dashboard
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  Welcome back <span className="text-2xl">👋</span>
                </h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && <div className="text-red-500 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/50 p-2 rounded">{error}</div>}
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Demo: demo@mentora.com / password</p>
                    <input 
                      type="email" 
                      placeholder="Email / College ID" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0f4c81] dark:focus:ring-blue-500 transition-shadow bg-white/60 dark:bg-slate-800/60 dark:text-white"
                      required
                    />
                  </div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0f4c81] dark:focus:ring-blue-500 transition-shadow bg-white/60 dark:bg-slate-800/60 dark:text-white"
                    required
                  />
                  <button type="submit" className="w-full bg-[#0f4c81] dark:bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-[#0c3d68] dark:hover:bg-blue-500 transition-colors">
                    Login
                  </button>
                  <div className="text-center">
                    <Link to="/" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#0f4c81] dark:hover:text-blue-400">Forgot password?</Link>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Quick Access Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-12 w-full">
        <BlurText 
          text="Quick Access Dashboard" 
          className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight" 
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/subjects" className="group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }} 
              className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] hover:border-blue-200 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:tracking-wide transition-all duration-300">Subjects & Materials</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Access notes, previous year questions, and lab records.</p>
            </motion.div>
          </Link>

          <Link to="/live-sessions" className="group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }} 
              className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.1)] hover:border-purple-200 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:tracking-wide transition-all duration-300">Live Sessions</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Join expert-led classes and interact with mentors.</p>
            </motion.div>
          </Link>

          <Link to="/community" className="group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }} 
              className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.1)] hover:border-green-200 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:tracking-wide transition-all duration-300">Community</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Discuss topics, share projects, and get exam tips.</p>
            </motion.div>
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
