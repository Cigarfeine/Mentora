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
  const [selectedSubject, setSelectedSubject] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (SUBJECTS.length > 0) {
      setSelectedSubject(SUBJECTS[0].id);
    }
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className="flex flex-col items-center w-full min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-6 w-full mb-16 text-center pt-8">
        <motion.h1 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6"
        >
          Subjects & Modules
        </motion.h1>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light"
        >
          Select your current subject to access syllabus, previous year questions, and comprehensive notes.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* Subjects */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <BlurText text="All Subjects" className="text-3xl font-bold text-slate-900 dark:text-white" delay={0} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {SUBJECTS.map((subject) => {
                const Icon = IconMap[subject.icon] || BookOpen;
                return (
                  <motion.div 
                    key={subject.id}
                    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onClick={() => setSelectedSubject(subject.id)}
                  >
                    <SpotlightCard
                      className={`flex flex-col items-center text-center cursor-pointer transition-all duration-300 h-full p-8 ${
                        selectedSubject === subject.id 
                          ? 'ring-2 ring-[#0f4c81] dark:ring-blue-500 scale-105 shadow-xl glass-card' 
                          : 'bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1'
                      }`}
                      spotlightColor="rgba(15, 76, 129, 0.15)"
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                        selectedSubject === subject.id 
                          ? 'bg-[#0f4c81] text-white dark:bg-blue-600' 
                          : 'bg-[#0f4c81]/10 text-[#0f4c81] dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{subject.name}</h3>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{subject.code}</p>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Previous Year Questions */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Previous Year Questions</h3>
              <Link to="/subjects#syllabus">
                <button className="text-sm font-medium text-[#0f4c81] dark:text-blue-400 hover:text-[#0c3d68] dark:hover:text-blue-300 flex items-center gap-1">
                  See All <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
              >
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {['2022', '2021', '2020', '2019'].map((year, i) => (
                    <Link to="/subjects#syllabus" key={year} className="block">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="p-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                            <FileText className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                          </div>
                          <div>
                            <span className="font-bold text-slate-700 dark:text-slate-200 block text-lg">{year} Question Papers</span>
                            <span className="text-sm text-slate-500 dark:text-slate-400">Mid-term & End-term</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Lab Records */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Lab Records</h3>
            </div>
            <Link to="/subjects#syllabus" className="block">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
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
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Syllabus & Notes (2024)</h3>
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-[#0f4c81] dark:hover:border-blue-500 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 dark:bg-slate-800 p-2 rounded-lg text-[#0f4c81] dark:text-blue-400 group-hover:bg-[#0f4c81] dark:group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">{subject.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-[#0f4c81] dark:group-hover:text-blue-400" />
              </motion.a>
            ))}
          </div>
        </section>
      </div>
      </div>
    </motion.div>
  );
}
