import { Subject, LiveSession, Mentor, CommunityPost } from './types';

export const SUBJECTS: Subject[] = [
  { id: 'math', name: 'Engineering Maths', icon: 'Calculator', color: 'bg-blue-50 text-blue-600' },
  { id: 'programming', name: 'Programming', icon: 'Code', color: 'bg-indigo-50 text-indigo-600' },
  { id: 'data', name: 'Data Structures', icon: 'Database', color: 'bg-purple-50 text-purple-600' },
  { id: 'python', name: 'Python for Engineers', icon: 'Terminal', color: 'bg-emerald-50 text-emerald-600' },
];

export const LIVE_SESSIONS: LiveSession[] = [
  {
    id: '1',
    title: 'C Programming Basics',
    instructor: 'Anupya Jain',
    duration: '30 mins',
    date: 'Today at 6:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    attendees: 160
  },
  {
    id: '2',
    title: 'Advanced Calculus',
    instructor: 'Dr. Sarah Chen',
    duration: '45 mins',
    date: 'Tomorrow at 10:00 AM',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    attendees: 210
  }
];

export const MENTORS: Mentor[] = [
  {
    id: '1',
    name: 'Rahul',
    university: 'NITS',
    rating: 4.8,
    subject: 'Programming',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Meera',
    university: 'MIT',
    rating: 4.9,
    subject: 'Engineering Maths',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Khetra',
    university: 'MIT',
    rating: 4.7,
    subject: 'Data Structures',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: '1',
    author: 'Rahul',
    university: 'NITS',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150',
    title: 'Study Materials for Engineering Maths',
    content: 'Where are materials study materials designed cross study materials?',
    likes: 150,
    comments: 23,
    timeAgo: '2h ago',
    type: 'material'
  },
  {
    id: '2',
    author: 'Meera',
    university: 'MIT',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    content: 'How to solve this differential equation? dy/dx + y = e^x',
    likes: 45,
    comments: 12,
    timeAgo: '5h ago',
    type: 'question'
  }
];
