import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LIVE_SESSIONS, MENTORS } from '../constants';
import SpotlightCard from '../components/SpotlightCard';
import BlurText from '../components/BlurText';

export default function LiveSessions() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className="max-w-7xl mx-auto px-6 py-12 w-full grid lg:grid-cols-3 gap-8"
    >
      {/* Left Column (2/3) */}
      <div className="lg:col-span-2 space-y-10">
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="pt-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">Live Classes</h1>
        </motion.div>
        <section>
          <div className="flex items-center justify-between mb-6">
            <BlurText text="Upcoming Live Sessions" className="text-3xl font-bold text-slate-900 dark:text-white" delay={0.1} />
            <Link to="/live-sessions"><button className="text-sm font-medium text-[#0f4c81] dark:text-blue-400 hover:text-[#0c3d68] dark:hover:text-blue-300">See All</button></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {LIVE_SESSIONS.map((session, i) => (
              <motion.div 
                key={session.id}
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/live-sessions/${session.id}`} className="block h-full">
                  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-5 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col hover:border-blue-200 dark:hover:border-[#0f4c81] transition-all cursor-pointer h-full">
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                    <img src={session.thumbnail} alt={session.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <PlayCircle className="w-12 h-12 text-white opacity-90" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2 line-clamp-2">{session.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">{session.date} • {session.duration}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{session.instructor}</span>
                      <span className="text-xs font-bold text-[#0f4c81] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">{session.attendees} attending</span>
                    </div>
                  </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column (1/3) */}
      <div className="space-y-8">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Top Mentors</h3>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Learn from experienced B.Tech seniors and alumni.</p>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 mb-6 border border-slate-100 dark:border-slate-700">
              <div className="flex flex-col xl:flex-row items-center gap-4 mb-4">
                <Link to="/subjects#syllabus" className="w-full xl:flex-1">
                  <button className="w-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 shadow-sm">Notes & Syllabus</button>
                </Link>
                <button className="w-full xl:flex-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 shadow-sm">Quiz</button>
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4">Need help with a specific topic?</p>
              <Link to="/community" className="block w-full">
                <button className="w-full bg-[#0f4c81] dark:bg-blue-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-[#0c3d68] dark:hover:bg-blue-500 transition-colors shadow-md">
                  Ask a Mentor
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              {MENTORS.map((mentor, i) => (
                <motion.div 
                  key={mentor.id}
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Link to="/community" className="block">
                    <div className="shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors cursor-pointer rounded-2xl overflow-hidden hover:scale-[1.02] transform transition-transform duration-300">
                    <SpotlightCard className="flex items-center justify-between p-4" spotlightColor="rgba(15, 76, 129, 0.08)">
                      <div className="flex items-center gap-4 relative z-10 w-full">
                        <img src={mentor.avatar} alt={mentor.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">{mentor.name}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{mentor.university}</p>
                          <div className="flex items-center gap-1 text-xs text-amber-500 dark:text-amber-400">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span className="text-slate-600 dark:text-slate-400 ml-1 font-medium">{mentor.subject}</span>
                          </div>
                        </div>
                        <CheckCircle className="w-6 h-6 text-[#0f4c81] dark:text-blue-400" />
                      </div>
                    </SpotlightCard>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
