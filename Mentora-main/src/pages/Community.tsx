import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMMUNITY_POSTS } from '../constants';
import BlurText from '../components/BlurText';

export default function Community() {
  const [posts, setPosts] = useState(COMMUNITY_POSTS);
  const [newPostContent, setNewPostContent] = useState('');

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: Date.now().toString(),
      author: localStorage.getItem('userName') || 'Demo User',
      university: 'Mentora User',
      avatar: 'https://ui-avatars.com/api/?name=' + (localStorage.getItem('userName') || 'Demo User') + '&background=0f4c81&color=fff',
      content: newPostContent,
      likes: 0,
      comments: 0,
      timeAgo: 'Just now',
      type: 'discussion' as const
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setPosts(posts.map(p => {
      if (p.id === id) {
        return { ...p, likes: p.likes + 1 };
      }
      return p;
    }));
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 1.05 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className="max-w-4xl mx-auto px-6 py-12 w-full"
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-between mb-8">
        <BlurText text="Community Hub" className="text-3xl font-bold text-slate-900 dark:text-white" delay={0.1} />
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/community"><button className="text-[#0f4c81] dark:text-blue-400 border-b-2 border-[#0f4c81] dark:border-blue-400 pb-1">Study Groups</button></Link>
          <Link to="/community"><button className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300">Exam Tips</button></Link>
          <Link to="/community"><button className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300">Projects</button></Link>
        </div>
      </motion.div>
      
      <motion.form 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        onSubmit={handlePost} 
        className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8 flex gap-4 items-center focus-within:ring-2 focus-within:ring-[#0f4c81]/20 dark:focus-within:ring-blue-500/20 transition-all font-sans"
      >
        <img 
          src={'https://ui-avatars.com/api/?name=' + (localStorage.getItem('userName') || 'Demo User') + '&background=f8fafc&color=0f4c81'} 
          alt="Avatar" 
          className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-700" 
        />
        <input 
          type="text" 
          placeholder="Got a question or material to share?" 
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium" 
        />
        <button 
          type="submit" 
          disabled={!newPostContent.trim()}
          className="bg-[#0f4c81] dark:bg-blue-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed hover:bg-[#0c3d68] dark:hover:bg-blue-500 text-white p-3 rounded-xl transition-colors shadow-sm"
        >
          <Send className="w-4 h-4" />
        </button>
      </motion.form>

      <div className="space-y-6">
        <AnimatePresence>
          {posts.map((post, i) => (
            <motion.div 
              key={post.id} 
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-lg dark:hover:shadow-none transition-all relative font-sans"
            >
              <div className="flex items-center justify-between mb-4">
                <Link to="/community" className="flex items-center gap-4 hover:opacity-80">
                  <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full object-cover shadow-sm border border-slate-100 dark:border-slate-700" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{post.author}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{post.university} • {post.timeAgo}</p>
                  </div>
                </Link>
                <button className="text-slate-400 dark:text-slate-500 hover:text-[#0f4c81] dark:hover:text-blue-400 p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <Link to="/community" className="block group mb-6">
                {post.title && <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#0f4c81] dark:group-hover:text-blue-400 transition-colors">{post.title}</h5>}
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">{post.content}</p>
              </Link>
              <div className="flex items-center gap-8 text-sm font-semibold text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button onClick={(e) => handleLike(post.id, e)} className="flex items-center gap-2 hover:text-rose-500 transition-colors active:scale-95">
                  <Heart className={`w-5 h-5 ${post.likes > 40 ? 'fill-rose-500 text-rose-500' : ''}`} /> {post.likes}
                </button>
                <button className="flex items-center gap-2 hover:text-[#0f4c81] dark:hover:text-blue-400 transition-colors">
                  <MessageCircle className="w-5 h-5" /> {post.comments}
                </button>
                <button className="flex items-center gap-2 hover:text-[#0f4c81] dark:hover:text-blue-400 transition-colors">
                  <Share2 className="w-5 h-5" /> Share
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
