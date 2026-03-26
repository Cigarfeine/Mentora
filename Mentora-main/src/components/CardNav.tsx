import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Home, Info, BookOpen, Video, Users, LogOut } from 'lucide-react';
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

  const filteredNavItems = NAV_ITEMS.filter(item => !item.reqLogin || isLoggedIn);

  return (
    <>
      {/* Top Navbar (Desktop & Mobile header) */}
      <nav className="card-nav flex items-center justify-between w-max max-w-[95vw] gap-4 md:gap-6 pr-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0f4c81] rounded-full flex flex-shrink-0 items-center justify-center shadow-md transition-transform hover:scale-110">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-lg font-bold text-[#0f4c81] tracking-tight hidden lg:block">MENTORA</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 mx-2">
          {filteredNavItems.map(item => (
            <Link key={item.path} to={item.path} className={`card-nav-link ${location.pathname === item.path ? 'active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <button className="text-slate-400 hover:text-[#0f4c81] transition-colors relative">
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
      </nav>

      {/* Mobile Bottom Dock (Appears only on small screens) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-[400px] bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_40px_-10px_rgba(15,76,129,0.3)] rounded-full px-6 py-3 flex items-center justify-between z-50">
        {filteredNavItems.map(item => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`relative flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${isActive ? 'text-[#0f4c81] -translate-y-2' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <div className={`absolute -top-1 w-1.5 h-1.5 rounded-full bg-[#0f4c81] transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              <item.icon className={`w-6 h-6 transition-all duration-300 ${isActive ? 'scale-110 drop-shadow-md' : 'scale-100'}`} />
            </Link>
          );
        })}
        {isLoggedIn && (
          <button 
            onClick={() => { localStorage.removeItem('isLoggedIn'); window.location.href='/'; }} 
            className="flex flex-col items-center gap-1 p-2 rounded-xl transition-all text-slate-400 hover:text-red-500"
          >
            <LogOut className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  );
}
