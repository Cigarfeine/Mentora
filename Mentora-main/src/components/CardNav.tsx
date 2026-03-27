import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Bell, Home, Info, BookOpen, Video, Users, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: Home, reqLogin: false },
  { path: '/about', label: 'About', icon: Info, reqLogin: false },
  { path: '/subjects', label: 'Subjects', icon: BookOpen, reqLogin: true },
  { path: '/live-sessions', label: 'Classes', icon: Video, reqLogin: true },
  { path: '/community', label: 'Community', icon: Users, reqLogin: true },
];

export default function CardNav() {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const filteredNavItems = NAV_ITEMS.filter(item => !item.reqLogin || isLoggedIn);

  return (
    <>
      {/* Top Navbar (Desktop & Mobile header) */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 flex items-center justify-between w-max max-w-[95vw] gap-4 md:gap-8 px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-full z-50"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 pl-2">
          <div className="w-8 h-8 bg-[#0f4c81] rounded-full flex flex-shrink-0 items-center justify-center shadow-md transition-transform hover:scale-110">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-lg font-bold text-[#0f4c81] dark:text-blue-400 tracking-tight hidden lg:block">MENTORA</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {filteredNavItems.map(item => {
            const isActive = location.pathname === item.path;
            const isHovered = hoveredPath === item.path;
            
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors z-10 ${isActive ? 'text-[#0f4c81] dark:text-blue-400' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'}`}
              >
                {((isHovered) || (!hoveredPath && isActive)) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-3 pr-2">
          <ThemeToggle />
          {isLoggedIn ? (
            <>
              <button className="text-slate-400 hover:text-[#0f4c81] dark:hover:text-blue-400 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-800"></span>
              </button>
              <Link to="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity ml-1">
                <img src={'https://ui-avatars.com/api/?name=' + (localStorage.getItem('userName') || 'Demo User') + '&background=f8fafc&color=0f4c81'} alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm border-2 border-white dark:border-slate-700" />
              </Link>
            </>
          ) : (
             <Link to="/login" className="text-sm font-semibold text-[#0f4c81] dark:text-blue-400 px-4 py-1.5 rounded-full bg-[#0f4c81]/10 hover:bg-[#0f4c81]/20 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 transition-colors">Login</Link>
          )}
        </div>
      </motion.nav>

      {/* Mobile Bottom Dock (Appears only on small screens) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-[400px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 shadow-[0_20px_40px_-10px_rgba(15,76,129,0.3)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] rounded-full px-6 py-3 flex items-center justify-between z-50">
        {filteredNavItems.map(item => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`relative flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${isActive ? 'text-[#0f4c81] dark:text-blue-400 -translate-y-2' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              <div className={`absolute -top-1 w-1.5 h-1.5 rounded-full bg-[#0f4c81] dark:bg-blue-400 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              <item.icon className={`w-6 h-6 transition-all duration-300 ${isActive ? 'scale-110 drop-shadow-md' : 'scale-100'}`} />
            </Link>
          );
        })}
        {isLoggedIn && (
          <button 
            onClick={() => { localStorage.removeItem('isLoggedIn'); window.location.href='/'; }} 
            className="flex flex-col items-center gap-1 p-2 rounded-xl transition-all text-slate-400 hover:text-red-500 dark:hover:text-red-400"
          >
            <LogOut className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  );
}
