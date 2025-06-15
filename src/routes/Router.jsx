import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TechStack from '../pages/TechStack';
import Projects from '../pages/Projects';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
