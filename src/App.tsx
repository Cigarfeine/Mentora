import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import LiveSessions from './pages/LiveSessions';
import Community from './pages/Community';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="live-sessions" element={<LiveSessions />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="fixed inset-0 z-[-1] bg-slate-50"></div>
      <AnimatedRoutes />
    </Router>
  );
}
