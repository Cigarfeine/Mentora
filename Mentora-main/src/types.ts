export interface Subject {
  id: string;
  name: string;
  icon: string;
  color?: string;
}

export interface LiveSession {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  date: string;
  thumbnail: string;
  attendees: number;
}

export interface Mentor {
  id: string;
  name: string;
  university: string;
  rating: number;
  subject: string;
  avatar: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  university: string;
  avatar: string;
  title?: string;
  content: string;
  likes: number;
  comments: number;
  timeAgo: string;
  type: 'question' | 'material' | 'discussion';
}
