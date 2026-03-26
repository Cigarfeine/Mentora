import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
import './CardNav.css';

export default function CardNav() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="card-nav">
      <Link to="/" className="flex items-center gap-2 pr-4 border-r border-slate-200">
        <div className="w-8 h-8 bg-[#0f4c81] rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <span className="text-lg font-bold text-[#0f4c81] tracking-tight hidden sm:block">MENTORA</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-1">
        <Link to="/" className={`card-nav-link ${isActive('/')}`}>Home</Link>
        <Link to="/about" className={`card-nav-link ${isActive('/about')}`}>About</Link>
        {isLoggedIn && (
          <>
            <Link to="/subjects" className={`card-nav-link ${isActive('/subjects')}`}>Subjects</Link>
            <Link to="/live-sessions" className={`card-nav-link ${isActive('/live-sessions')}`}>Classes</Link>
            <Link to="/community" className={`card-nav-link ${isActive('/community')}`}>Community</Link>
          </>
        )}
      </div>

      {isLoggedIn && (
        <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
          <button className="text-slate-400 hover:text-[#0f4c81] transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <Link to="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={'https://ui-avatars.com/api/?name=' + (localStorage.getItem('userName') || 'Demo User') + '&background=f8fafc&color=0f4c81'} alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm border-2 border-white" />
            <span className="text-sm font-medium text-slate-700 hidden sm:block">{localStorage.getItem('userName') || 'User'}</span>
          </Link>
          <button 
            onClick={() => { localStorage.removeItem('isLoggedIn'); window.location.href='/'; }} 
            className="text-xs font-semibold text-slate-400 hover:text-red-500 ml-1 px-2 py-1 rounded-md hover:bg-slate-100 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
