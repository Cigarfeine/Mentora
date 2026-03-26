import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Code, Database, Terminal, ChevronRight, FileText } from 'lucide-react';
import { SUBJECTS } from '../constants';

const IconMap: Record<string, React.ElementType> = {
  Calculator: BookOpen,
  Code: Code,
  Database: Database,
  Terminal: Terminal,
};

export default function Subjects() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-6 py-12 w-full grid lg:grid-cols-3 gap-8"
    >
      <div className="lg:col-span-2 space-y-10">
        {/* Subjects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-slate-900">All Subjects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {SUBJECTS.map((subject, i) => {
              const Icon = IconMap[subject.icon] || BookOpen;
              return (
                <motion.div 
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${subject.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{subject.name}</h4>
                  <p className="text-sm text-slate-500">Explore basics & advanced</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Previous Year Questions */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Previous Year Questions</h3>
            <button className="text-sm font-medium text-[#0f4c81] hover:text-[#0c3d68] flex items-center gap-1">
              See All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100">
            {['2022', '2021', '2020', '2019'].map((year, i) => (
              <motion.div 
                key={year} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <FileText className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block text-lg">{year} Question Papers</span>
                    <span className="text-sm text-slate-500">Mid-term & End-term</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="space-y-8">
        {/* Lab Records */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-900">Lab Records</h3>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#0f4c81] rounded-xl p-6 text-white relative overflow-hidden cursor-pointer hover:bg-[#0c3d68] transition-colors shadow-lg"
          >
            <div className="relative z-10 flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Experiment Templates & Guides</h4>
                <p className="text-sm text-blue-100 leading-relaxed">Download templates & guides for all your practical sessions.</p>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <FileText className="w-40 h-40" />
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
