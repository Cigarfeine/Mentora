import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black text-[#0f4c81] dark:text-white tracking-tighter mb-6 relative">
            Let's Talk.
            <div className="absolute -bottom-4 left-0 w-24 h-2 bg-[#0f4c81] dark:bg-blue-600 rounded-full"></div>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-light">
            Whether you have a question about subjects, live sessions, or want to become a mentor—we're here to help.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-5 gap-12 lg:gap-24"
        >
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div variants={itemVariants} className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-[#0f4c81] dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0f4c81] group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4 font-light">Our team typically responds within 24 hours.</p>
              <a href="mailto:hello@mentora.com" className="text-[#0f4c81] dark:text-blue-400 font-semibold hover:underline">hello@mentora.com</a>
            </motion.div>

            <motion.div variants={itemVariants} className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Live Chat</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4 font-light">Join our community server for instant support.</p>
              <a href="#" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">Join Discord</a>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900 dark:text-slate-300">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] dark:focus:ring-blue-500 transition-all font-light text-slate-900 dark:text-white" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900 dark:text-slate-300">Email Address</label>
                  <input type="email" placeholder="john@university.edu" className="w-full px-5 py-4 bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] dark:focus:ring-blue-500 transition-all font-light text-slate-900 dark:text-white" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900 dark:text-slate-300">What is this regarding?</label>
                <select className="w-full px-5 py-4 bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] dark:focus:ring-blue-500 transition-all font-light text-slate-900 dark:text-white appearance-none">
                  <option>General Inquiry</option>
                  <option>Subject Materials Issue</option>
                  <option>Live Session Support</option>
                  <option>Mentorship Application</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900 dark:text-slate-300">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full px-5 py-4 bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] dark:focus:ring-blue-500 transition-all font-light resize-none text-slate-900 dark:text-white" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#0f4c81] hover:bg-[#0c3d68] dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
