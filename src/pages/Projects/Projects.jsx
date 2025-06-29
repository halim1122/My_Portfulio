import React from "react";
import projectsData from "./projectsData";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0f0f1a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div
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
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
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
                  className="text-blue-400 hover:underline"
                >
                  Live Demo ↗
                </Link>
                 <Link to={`/projects/${project.id}`}
                  className="flex items-center gap-1 bg-slate-700 px-3 py-1 rounded text-gray-200 hover:bg-slate-600 transition"
                >
                  Details <FaArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
