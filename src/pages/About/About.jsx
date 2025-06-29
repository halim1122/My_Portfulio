import React from 'react';
import { PiBracketsAngleBold } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 text-center max-w-4xl mx-auto"
      data-aos="zoom-in-up"
    >
      <h1
        className="text-4xl font-bold mb-6"
        data-aos="flip-left"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 bg-clip-text text-transparent">
          About Me
        </span>
      </h1>

      <p
        className="text-lg text-gray-300 leading-relaxed"
        data-aos="fade-up"
      >
        Hello, I'm <span className="text-white font-semibold">Md. Atik Hassan</span>, a passionate frontend developer who loves to build smart, responsive, and scalable web applications.
        <br /><br />
        My programming journey began with curiosity and turned into a focused path when I completed a Frontend Development course. I enjoy working with technologies like <span className="text-purple-400">React</span>, <span className="text-purple-400">Tailwind</span>, and <span className="text-purple-400">JavaScript</span>.
        <br /><br />
        I thrive when building user-friendly UIs, solving design challenges, and learning new tools every day. My dream is to break into the tech industry by <span className="text-white font-medium">2027</span> and eventually transition into <span className="text-purple-400">AI & Data Science</span>.
        <br /><br />
        Outside of coding, I enjoy watching movies, following football matches, playing football with friends, and staying consistent in my learning journey — as I always say:
        <span className="italic text-teal-400">"You have to challenge yourself to be consistent."</span>
      </p>

      <div
        className="mt-10 flex flex-col md:flex-row justify-center gap-4"
        data-aos="zoom-out-up"
      >
        <a href="/AtikHassan_CV.pdf" download>
          <button className="btn bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 text-white">
            <IoDocumentTextOutline /> Download CV
          </button>
        </a>
        <a href="#portfolio">
          <button className="btn btn-outline text-white border-purple-500 hover:bg-purple-600 hover:text-white transition">
            <PiBracketsAngleBold /> View Projects
          </button>
        </a>
      </div>

    </section>
  );
};

export default About;
