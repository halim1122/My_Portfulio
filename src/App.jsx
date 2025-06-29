import './index.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillsSection from './pages/About/SkillsSection';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import { Route, Routes } from 'react-router';
import ProjectDetails from './pages/Projects/ProjectDetails';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   
      once: false,
      offset: 100,         
    });
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />

        {/* Routing setup */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <SkillsSection />
                <Education />
                <Projects />
              </>
            }
          />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App
