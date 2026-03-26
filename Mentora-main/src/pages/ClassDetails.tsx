import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Calendar, Clock, Users, PlayCircle, FileText } from 'lucide-react';
import { LIVE_SESSIONS } from '../constants';

export default function ClassDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const session = LIVE_SESSIONS.find(s => s.id === id);

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Class not found</h2>
        <button onClick={() => navigate(-1)} className="text-[#0f4c81] font-bold">Go Back</button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto px-6 w-full"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-sm font-semibold text-slate-500 hover:text-[#0f4c81] mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Classes
      </button>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
        <div className="relative h-64 md:h-80 w-full group overflow-hidden">
          <img src={session.thumbnail} alt={session.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-sm transition-all shadow-lg group-hover:scale-110">
              <PlayCircle className="w-16 h-16 text-white" />
            </button>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Live Session
                </span>
                <span className="text-sm font-medium text-slate-500">{session.instructor}</span>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{session.title}</h1>
              <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                Join {session.instructor} for an in-depth exploration of {session.title}. This interactive session will cover key concepts, practical applications, and allow time for Q&A.
              </p>
            </div>

            <div className="shrink-0 bg-slate-50 p-6 rounded-2xl border border-slate-100 min-w-[280px]">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-slate-700">
                  <Calendar className="w-5 h-5 text-[#0f4c81]" />
                  <span className="font-semibold">{session.date}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="w-5 h-5 text-[#0f4c81]" />
                  <span className="font-semibold">{session.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Users className="w-5 h-5 text-[#0f4c81]" />
                  <span className="font-semibold">{session.attendees} Attending</span>
                </div>
              </div>
              <button className="w-full bg-[#0f4c81] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#0c3d68] shadow-md transition-colors flex items-center justify-center gap-2">
                Register Now
              </button>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 mt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Class Materials</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-between p-4 bg-blue-50/50 hover:bg-blue-50 rounded-xl border border-blue-100 transition-colors group">
                <div className="flex items-center gap-3 text-[#0f4c81]">
                  <FileText className="w-6 h-6" />
                  <span className="font-bold text-sm">Session Slides</span>
                </div>
                <span className="text-xs font-semibold text-blue-500 bg-white px-2 py-1 rounded shadow-sm">Download</span>
              </button>
              <button className="flex items-center justify-between p-4 bg-blue-50/50 hover:bg-blue-50 rounded-xl border border-blue-100 transition-colors group">
                <div className="flex items-center gap-3 text-[#0f4c81]">
                  <FileText className="w-6 h-6" />
                  <span className="font-bold text-sm">Practice Problems</span>
                </div>
                <span className="text-xs font-semibold text-blue-500 bg-white px-2 py-1 rounded shadow-sm">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
