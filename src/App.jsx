import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/pages/HeroSection';
import HamburgerMenu from './components/HamburgerMenu';
import Sidebar from './components/Sidebar';
import DarkModeToggle from './components/DarkModeToggle';
import ExperiencePage from './components/pages/ExperiencePage';
import SkillsPage from './components/pages/SkillsPage';
import ContactPage from './components/pages/ContactPage';

import ProjectPage from './components/pages/ProjectsPage';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(true);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setSidebarOpen(false);
      setTimeout(() => {
        setShowHamburgerMenu(true);
      }, 150);
    } else {
      setShowHamburgerMenu(false);
      setSidebarOpen(true);
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex relative">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="flex-1 relative lg:ml-64">
          {showHamburgerMenu && !isSidebarOpen && (
            <HamburgerMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          )}
          <div className="fixed top-4 right-4 z-50">
            <DarkModeToggle />
          </div>

          <main>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/skills" element={<SkillsPage/>} />
              <Route path="/projects" element={<ProjectPage/>} />
              <Route path="/contact" element={<ContactPage/>} />
              
            </Routes>
          </main>
        </div>
      </div>
      
    
    </Router>
  );
}

export default App;
