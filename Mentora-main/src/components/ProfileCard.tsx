import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

export default function ProfileCard({ name, role, image, delay = 0 }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

      {/* Content Container (Slides up on hover) */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{name}</h3>
        <p className="text-blue-200 font-medium mb-4 drop-shadow-sm">{role}</p>
        
        {/* Social Links (Fades and slides in on hover) */}
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 border-t border-white/20 pt-4 mt-auto md:mt-0">
          <a href="#" onClick={(e) => e.preventDefault()} className="text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
