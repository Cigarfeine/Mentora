import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { COMMUNITY_POSTS } from '../constants';

export default function Community() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto px-6 py-12 w-full"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Community</h2>
        <div className="flex gap-6 text-sm font-medium">
          <button className="text-[#0f4c81] border-b-2 border-[#0f4c81] pb-1">Study Groups</button>
          <button className="text-slate-500 hover:text-slate-700">Exam Tips</button>
          <button className="text-slate-500 hover:text-slate-700">Projects</button>
        </div>
      </div>
      
      <div className="space-y-6">
        {COMMUNITY_POSTS.map((post, i) => (
          <motion.div 
            key={post.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">{post.author}</h4>
                  <p className="text-xs text-slate-500">{post.university} • {post.timeAgo}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-50 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            {post.title && <h5 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h5>}
            <p className="text-slate-600 text-base leading-relaxed mb-6">{post.content}</p>
            <div className="flex items-center gap-8 text-sm font-medium text-slate-500 pt-4 border-t border-slate-100">
              <button className="flex items-center gap-2 hover:text-rose-500 transition-colors">
                <Heart className="w-5 h-5" /> {post.likes}
              </button>
              <button className="flex items-center gap-2 hover:text-[#0f4c81] transition-colors">
                <MessageCircle className="w-5 h-5" /> {post.comments}
              </button>
              <button className="flex items-center gap-2 hover:text-[#0f4c81] transition-colors">
                <Share2 className="w-5 h-5" /> Share
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
