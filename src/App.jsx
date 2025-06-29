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
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';

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
      <div className="max-w-7xl mx-auto scroll-smooth">
        <ScrollToTop />
        {/* Routing setup */}
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Navbar />
                <Home />
                <About />
                <SkillsSection />
                <Education />
                <Projects />
                <Contact />
                <Footer />
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
