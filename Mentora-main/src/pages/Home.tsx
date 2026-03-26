import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, FileText, PlayCircle, BookOpen, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ShinyText from '../components/ShinyText';
import Iridescence from '../components/Iridescence';
import CurvedLoop from '../components/CurvedLoop';

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
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <div className="bg-[#0f4c81] relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-auto">
          <Iridescence color={[0.6, 0.8, 1]} speed={0.8} amplitude={0.15} className="w-full h-full" />
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
            <div className="flex items-center gap-8 mt-4">
              <Link to="/subjects">
                <button className="bg-white text-[#0f4c81] px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg">
                  Get Started
                </button>
              </Link>
              <div className="opacity-80 hidden md:block">
                <CurvedLoop text="EXPLORE • LEARN • GROW • " radius={40} duration={12} className="text-blue-100" />
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] max-w-md mx-auto w-full relative"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              Welcome back <span className="text-2xl">👋</span>
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && <div className="text-red-500 text-sm bg-red-50 p-2 rounded">{error}</div>}
              <div>
                <p className="text-xs text-slate-500 mb-1">Demo: demo@mentora.com / password</p>
                <input 
                  type="email" 
                  placeholder="Email / College ID" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c81] transition-shadow bg-white/60"
                  required
                />
              </div>
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c81] transition-shadow bg-white/60"
                required
              />
              <button type="submit" className="w-full bg-[#0f4c81] text-white py-3 rounded-lg font-semibold hover:bg-[#0c3d68] transition-colors">
                Login
              </button>
              <div className="text-center">
                <Link to="/" className="text-sm text-slate-500 hover:text-[#0f4c81]">Forgot password?</Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Quick Access Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-12 w-full">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Quick Access</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/subjects" className="group">
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] hover:border-blue-200 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Subjects & Materials</h4>
              <p className="text-slate-500 text-sm">Access notes, previous year questions, and lab records.</p>
            </motion.div>
          </Link>

          <Link to="/live-sessions" className="group">
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)] hover:border-purple-200 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Live Sessions</h4>
              <p className="text-slate-500 text-sm">Join expert-led classes and interact with mentors.</p>
            </motion.div>
          </Link>

          <Link to="/community" className="group">
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.2)] hover:border-green-200 transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
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
