import { Link, useParams } from "react-router";
import projectsData from "./projectsData";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) return <p>Project not found</p>;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <Link
        to="/"
        className="btn mb-6 gradient-to-r from-blue-500 via-purple-600 to-purple-500 border border-[#ab057d] drop-shadow-md drop-shadow-[#ab057d]"
        rel="noreferrer"
      >
        <IoCaretBackCircleOutline size={20} /> Go Back Home
      </Link>
<div className="image">
  
          <img src={project.image} className="rounded mb-4 w-full shadow-md shadow-purple-400" />
</div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: All except key features */}
        <div className="lg:w-2/3" data-aos="fade-right">
          {/* <img src={project.image} className="rounded mb-4 w-full" /> */}
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <h4 className="text-lg font-semibold text-purple-400 mb-1">Tech Used:</h4>
          <div className="flex gap-2 flex-wrap text-sm mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="badge badge-outline text-gray-400 border border-[#ab057d]"
              >
                {t}
              </span>
            ))}
          </div>

          <h4 className="text-lg font-semibold text-purple-400">Challenges Faced:</h4>
          <ul className="list-disc list-inside mb-4 text-gray-400">
            {project.challenges.map((chal, i) => (
              <li key={i}>{chal}</li>
            ))}
          </ul>

          <h4 className="text-lg font-semibold text-purple-400">Future Improvements:</h4>
          <ul className="list-disc list-inside mb-4 text-gray-400">
            {project.future.map((fut, i) => (
              <li key={i}>{fut}</li>
            ))}
          </ul>

          <div className="mt-3 space-x-3">
            <Link
              to={project.demoLink}
              target="_blank"
              className="btn gradient-to-r from-blue-500 via-purple-600 to-purple-500 border border-[#ab057d] drop-shadow-md drop-shadow-[#ab057d]"
              rel="noreferrer"
            >
              Live Site <GoArrowUpRight size={20} />
            </Link>
            <Link
              to={project.github}
              target="_blank"
              className="btn gradient-to-r from-blue-500 via-purple-600 to-purple-500 border border-[#ab057d] drop-shadow-md drop-shadow-[#ab057d]"
              rel="noreferrer"
            >
              <FaGithub size={20} /> GitHub
            </Link>
          </div>
        </div>

        {/* Right Side: Key Features Only */}
        <div className="lg:w-1/3 bg-[#1f2937] rounded-xl p-5 shadow-lg border border-[#ab057d] h-fit" data-aos="fade-left">
          <h4 className="text-xl font-semibold text-purple-400 mb-3">
            🔑 Key Features
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
