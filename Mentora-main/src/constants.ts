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
    instructor: 'AbuThahir F',
    duration: '30 mins',
    date: 'Today at 6:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    attendees: 160
  },
  {
    id: '2',
    title: 'Advanced Calculus',
    instructor: 'Mathew Joseph',
    duration: '45 mins',
    date: 'Tomorrow at 10:00 AM',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    attendees: 210
  },
  {
    id: '3',
    title: 'Data Structures & Algorithms',
    instructor: 'Aleesha CA',
    duration: '60 mins',
    date: 'Tomorrow at 4:30 PM',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800',
    attendees: 315
  },
  {
    id: '4',
    title: 'Introduction to AutoCad',
    instructor: 'Muhammad Azad CB',
    duration: '45 mins',
    date: 'Saturday at 11:00 AM',
    thumbnail: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800',
    attendees: 124
  },
  {
    id: '5',
    title: 'Physics for Engineers',
    instructor: 'Roshan C Joseph',
    duration: '90 mins',
    date: 'Sunday at 2:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26c8c60caa47?auto=format&fit=crop&q=80&w=800',
    attendees: 180
  }
];

// @ts-expect-error vite injects import.meta.env
const BASE = import.meta.env.BASE_URL;

export const MENTORS: Mentor[] = [
  {
    id: '1',
    name: 'Don joy',
    university: 'MBITS',
    rating: 4.8,
    subject: 'Programming',
    avatar: `${BASE}mentors/Don joy.jpeg`
  },
  {
    id: '2',
    name: 'Igno JOJO',
    university: 'MBITS',
    rating: 4.9,
    subject: 'Engineering Maths',
    avatar: `${BASE}mentors/Igno JOJO.jpeg`
  },
  {
    id: '3',
    name: 'Zayan',
    university: 'MBITS',
    rating: 4.7,
    subject: 'Data Structures',
    avatar: `${BASE}mentors/Zayan.JPG`
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: '1',
    author: 'Don joy',
    university: 'MBITS',
    avatar: `${BASE}mentors/Don joy.jpeg`,
    title: 'Study Materials for Engineering Maths',
    content: 'Where are materials study materials designed cross study materials?',
    likes: 150,
    comments: 23,
    timeAgo: '2h ago',
    type: 'material'
  },
  {
    id: '2',
    author: 'Igno JOJO',
    university: 'MBITS',
    avatar: `${BASE}mentors/Igno JOJO.jpeg`,
    content: 'How to solve this differential equation? dy/dx + y = e^x',
    likes: 45,
    comments: 12,
    timeAgo: '5h ago',
    type: 'question'
  }
];
