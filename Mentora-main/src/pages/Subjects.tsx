import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Code, Database, Terminal, ChevronRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUBJECTS } from '../constants';
import SpotlightCard from '../components/SpotlightCard';
import BlurText from '../components/BlurText';

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
            <BlurText text="All Subjects" className="text-3xl font-bold text-slate-900" delay={0} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {SUBJECTS.map((subject, i) => {
              const Icon = IconMap[subject.icon] || BookOpen;
              return (
                <Link to="/subjects#syllabus" key={subject.id} className="block h-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="h-full block shadow-sm cursor-pointer hover:shadow-md transition-all rounded-xl"
                  >
                    <SpotlightCard className="bg-white p-6 h-full border border-slate-200">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${subject.color} relative z-10`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1 relative z-10">{subject.name}</h4>
                      <p className="text-sm text-slate-500 relative z-10">Explore basics & advanced</p>
                    </SpotlightCard>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Previous Year Questions */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Previous Year Questions</h3>
            <Link to="/subjects#syllabus">
              <button className="text-sm font-medium text-[#0f4c81] hover:text-[#0c3d68] flex items-center gap-1">
                See All <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100">
            {['2022', '2021', '2020', '2019'].map((year, i) => (
              <Link to="/subjects#syllabus" key={year} className="block">
                <motion.div 
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
              </Link>
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
          <Link to="/subjects#syllabus" className="block">
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
          </Link>
        </section>

        {/* Syllabus & Notes */}
        <section id="syllabus" className="pt-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-900">Syllabus & Notes (2024)</h3>
          </div>
          <div className="space-y-3">
            {[
              { name: "Algorithmic Thinking With Python", file: "KTU S1 Algorithmic Thinking With Python Syllabus (2024 Scheme) - Go Learnerz.pdf" },
              { name: "Basic Electrical & Electronics", file: "KTU S1 Basic Electrical And Electronics Engineering Syllabus (2024 Scheme) - Go Learnerz.pdf" },
              { name: "Engineering Graphics & CAD", file: "KTU S1 Engineering Graphics And Computer Aided Drawing Syllabus (2024 Scheme) - Go Learnerz.pdf" },
              { name: "Intro to Electrical & Electronics", file: "KTU S1 Introduction To Electrical And Electronics Syllabus (2024 Scheme) - Go Learnerz.pdf" },
              { name: "Life Skills & Comm.", file: "KTU S1 Life Skills And Professional Communication Syllabus (2024 Scheme) - Go Learnerz.pdf" },
              { name: "Math for Info Science – 1", file: "KTU S1 Mathematics For Information Science – 1 Syllabus (2024 Scheme) - Go Learnerz.pdf" },
              { name: "Physics for Info Science", file: "KTU S1 Physics For Information Science Syllabus (2024 Scheme) - Go Learnerz.pdf" },
            ].map((subject, idx) => (
              <motion.a
                key={idx}
                href={`/sylabus/${encodeURI(subject.file)}`}
                download
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-[#0f4c81] hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg text-[#0f4c81] group-hover:bg-[#0f4c81] group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm text-slate-700">{subject.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0f4c81]" />
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
