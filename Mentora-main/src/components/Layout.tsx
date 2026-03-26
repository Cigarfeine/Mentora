import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import CardNav from './CardNav';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pt-12 md:pt-0">
      <CardNav />
      <main className="pt-24 md:pt-32 pb-12 flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-[#0f4c81]">Home</Link></li>
              <li><Link to="/subjects" className="hover:text-[#0f4c81]">Subjects</Link></li>
              <li><Link to="/live-sessions" className="hover:text-[#0f4c81]">Live Sessions</Link></li>
              <li><Link to="/community" className="hover:text-[#0f4c81]">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-[#0f4c81]">About Us</Link></li>
              <li><Link to="/" className="hover:text-[#0f4c81]">Blog</Link></li>
              <li><Link to="/" className="hover:text-[#0f4c81]">Careers</Link></li>
              <li><Link to="/" className="hover:text-[#0f4c81]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-[#0f4c81]">Help Center</Link></li>
              <li><Link to="/" className="hover:text-[#0f4c81]">FAQ</Link></li>
              <li><Link to="/" className="hover:text-[#0f4c81]">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-[#0f4c81]">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#0f4c81] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-white" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-bold text-slate-900">MENTORA</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">
              Empowering students through peer learning and expert mentorship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-[#0f4c81]"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
              <a href="#" className="text-slate-400 hover:text-[#0f4c81]"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          © 2026 Mentora. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
