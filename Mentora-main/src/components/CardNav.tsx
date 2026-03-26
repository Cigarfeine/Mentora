import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Home, Info, BookOpen, Video, Users, ChevronDown, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './CardNav.css';

const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: Home, reqLogin: false },
  { path: '/about', label: 'About', icon: Info, reqLogin: false },
  { path: '/subjects', label: 'Subjects', icon: BookOpen, reqLogin: true },
  { path: '/live-sessions', label: 'Classes', icon: Video, reqLogin: true },
  { path: '/community', label: 'Community', icon: Users, reqLogin: true },
];

export default function CardNav() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [isExpanded, setIsExpanded] = useState(false);

  // Close island on route change
  useEffect(() => {
    setIsExpanded(false);
  }, [location.pathname]);

  const activeItem = NAV_ITEMS.find(item => item.path === location.pathname) || NAV_ITEMS[0];
  const filteredNavItems = NAV_ITEMS.filter(item => !item.reqLogin || isLoggedIn);

  return (
    <motion.nav 
      className="card-nav flex flex-col overflow-hidden p-2"
      animate={{ 
        width: isExpanded ? '90vw' : 'max-content',
        borderRadius: isExpanded ? '32px' : '9999px',
        maxWidth: '600px'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
        {/* Top/Main Row */}
        <div className="flex items-center justify-between w-full h-10 px-2 gap-4">
           {/* Mobile trigger / Logo */}
           <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsExpanded(false)}>
                <div className="w-8 h-8 bg-[#0f4c81] rounded-full flex flex-shrink-0 items-center justify-center shadow-md transition-transform hover:scale-110">
                 <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
               </div>
               <span className="text-lg font-bold text-[#0f4c81] tracking-tight hidden lg:block">MENTORA</span>
              </Link>
           </div>
           
           {/* Desktop Links */}
           <div className="hidden md:flex items-center gap-1">
             {filteredNavItems.map(item => (
                <Link key={item.path} to={item.path} className={`card-nav-link ${location.pathname === item.path ? 'active' : ''}`}>
                  {item.label}
                </Link>
             ))}
           </div>
           
           {/* Mobile Active Icon (clickable to expand) */}
           <button 
             className="md:hidden flex items-center justify-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
             onClick={() => setIsExpanded(!isExpanded)}
           >
              <activeItem.icon className="w-4 h-4 text-[#0f4c81]" />
              <span className="text-sm font-semibold text-[#0f4c81]">{activeItem.label}</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
           </button>
           
           {/* Right Actions */}
           <div className="flex items-center gap-3">
             {isLoggedIn ? (
               <>
                 <button className="text-slate-400 hover:text-[#0f4c81] transition-colors relative hidden sm:block">
                   <Bell className="w-5 h-5" />
                   <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                 </button>
                 <Link to="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                   <img src={'https://ui-avatars.com/api/?name=' + (localStorage.getItem('userName') || 'Demo User') + '&background=f8fafc&color=0f4c81'} alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm border-2 border-white" />
                   <span className="text-sm font-medium text-slate-700 hidden lg:block">{localStorage.getItem('userName') || 'User'}</span>
                 </Link>
                 <button 
                  onClick={() => { localStorage.removeItem('isLoggedIn'); window.location.href='/'; }} 
                  className="hidden md:block text-xs font-semibold text-slate-400 hover:text-red-500 ml-1 px-2 py-1 rounded-md hover:bg-slate-100 transition-colors"
                >
                  Logout
                </button>
               </>
             ) : (
                <Link to="/login" className="text-sm font-semibold text-[#0f4c81] px-4 py-1.5 rounded-full bg-[#0f4c81]/10 hover:bg-[#0f4c81]/20 transition-colors">Login</Link>
             )}
           </div>
        </div>

        {/* Mobile Expanded Menu */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full md:hidden overflow-hidden"
            >
              <div className="flex flex-col px-2 pt-3 pb-2 border-t border-slate-100 mt-2 gap-1 min-w-[250px] whitespace-nowrap">
                {filteredNavItems.map(item => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    onClick={() => setIsExpanded(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${location.pathname === item.path ? 'bg-[#0f4c81]/10 text-[#0f4c81] scale-[0.98]' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    <item.icon className={`w-5 h-5 ${location.pathname === item.path ? 'text-[#0f4c81]' : 'text-slate-400'}`} />
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                ))}
                {isLoggedIn && (
                  <button 
                    onClick={() => { localStorage.removeItem('isLoggedIn'); window.location.href='/'; }} 
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors text-red-500 hover:bg-red-50 mt-1 w-full text-left"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-semibold">Logout</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.nav>
  );
}
