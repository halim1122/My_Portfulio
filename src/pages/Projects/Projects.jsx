import React from "react";
import projectsData from "./projectsData";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { Element } from "react-scroll";
const Projects = () => {
  return (
    <Element name="portfolio">
    <section className="py-20 my-5 px-4 bg-[#0f0f1a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent" data-aos="zoom-in">
          My Projects
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {projectsData.map((project, idx) => (
            <div data-aos={
                project.side ==="left"? "fade-right"
                : project.side ==="right"? "fade-left"
                : project.side ==="up" ? "fade-up" 
                : "fade-in"
            }
            data-aos-delay="100"
              key={idx}
className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-5 shadow-lg hover:shadow-purple-600/30 transition duration-300"
            >
<div className="overflow-hidden rounded-lg mb-4">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
  />
</div>
              <h3 className="text-xl font-semibold text-[#b76efa] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <Link
                  to={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ab057d] hover:underline"
                >
                  Live Demo ↗
                </Link>
                 <Link to={`/projects/${project.id}`}
                  className="flex items-center gap-1 bg-slate-700 px-3 py-1 rounded text-indigo-300 hover:bg-slate-600 transition"
                >
                  Details <FaArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Element>
  );
};

export default Projects;
