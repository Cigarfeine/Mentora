import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Clock, Download, Edit3, Settings, LogOut, FileText, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BlurText from '../components/BlurText';

export default function Profile() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) setUserName(storedName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    window.location.href = '/';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl mx-auto px-6 w-full"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-tr from-[#0f4c81] to-blue-400 rounded-full flex items-center justify-center text-white text-4xl font-extrabold shadow-lg">
              {userName.charAt(0).toUpperCase()}
            </div>
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md text-slate-600 hover:text-[#0f4c81] transition-colors border border-slate-100">
              <Edit3 className="w-4 h-4" />
            </button>
          </div>
          <div>
            <BlurText text={`Hello, ${userName}!`} className="text-4xl font-extrabold text-slate-900 mb-2" delay={0.1} />
            <p className="text-slate-500 font-medium flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" /> B.Tech 1st Year (2024 Scheme)
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
            <Settings className="w-4 h-4" /> Settings
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-100 transition-colors shadow-sm">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-50 text-[#0f4c81] rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-slate-500 text-sm font-medium">Active Classes</h4>
            <p className="text-2xl font-bold text-slate-900">3</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-slate-500 text-sm font-medium">Hours Studied</h4>
            <p className="text-2xl font-bold text-slate-900">24.5</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <Download className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-slate-500 text-sm font-medium">Notes Downloaded</h4>
            <p className="text-2xl font-bold text-slate-900">12</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-6">Recent Activity</h3>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm divide-y divide-slate-100">
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Downloaded Engineering Maths Notes</p>
              <p className="text-sm text-slate-500">2 hours ago</p>
            </div>
          </div>
        </div>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
              <PlayCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Attended C Programming Basics</p>
              <p className="text-sm text-slate-500">Yesterday at 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
