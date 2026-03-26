import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, Star, CheckCircle } from 'lucide-react';
import { LIVE_SESSIONS, MENTORS } from '../constants';

export default function LiveSessions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-6 py-12 w-full grid lg:grid-cols-3 gap-8"
    >
      {/* Left Column (2/3) */}
      <div className="lg:col-span-2 space-y-10">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Upcoming Live Sessions</h2>
            <button className="text-sm font-medium text-[#0f4c81] hover:text-[#0c3d68]">See All</button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {LIVE_SESSIONS.map((session, i) => (
              <motion.div 
                key={session.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                  <img src={session.thumbnail} alt={session.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <PlayCircle className="w-12 h-12 text-white opacity-90" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2">{session.title}</h4>
                  <p className="text-sm text-slate-500 mb-4 flex-1">{session.date} • {session.duration}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm font-semibold text-slate-700">{session.instructor}</span>
                    <span className="text-xs font-bold text-[#0f4c81] bg-blue-50 px-3 py-1 rounded-full">{session.attendees} attending</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column (1/3) */}
      <div className="space-y-8">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Top Mentors</h3>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <p className="text-sm text-slate-600 mb-6">Learn from experienced B.Tech seniors and alumni.</p>
            
            <div className="bg-slate-50 rounded-xl p-5 mb-6 border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <button className="flex-1 bg-white border border-slate-200 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-sm">Notes</button>
                <button className="flex-1 bg-white border border-slate-200 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-sm">Quiz</button>
              </div>
              <p className="text-sm font-semibold text-slate-800 mb-4">Need help with a specific topic?</p>
              <button className="w-full bg-[#0f4c81] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#0c3d68] transition-colors shadow-md">
                Ask a Mentor
              </button>
            </div>

            <div className="space-y-4">
              {MENTORS.map((mentor, i) => (
                <motion.div 
                  key={mentor.id} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img src={mentor.avatar} alt={mentor.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{mentor.name}</h4>
                      <p className="text-xs text-slate-500 mb-1">{mentor.university}</p>
                      <div className="flex items-center gap-1 text-xs text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-slate-600 ml-1 font-medium">{mentor.subject}</span>
                      </div>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-[#0f4c81]" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
