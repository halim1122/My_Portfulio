import React from 'react';
import { PiBracketsAngleBold } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Element, Link } from 'react-scroll';

const About = () => {
  return (
    <Element name="about">
      <section
        className="py-8 px-4 text-center max-w-6xl mx-auto overflow-hidden"
        data-aos="zoom-in-up"
      >
        <h1
          className="text-4xl font-bold mb-6"
          data-aos="flip-left"
        >
          <span className="bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent">
            About Me
          </span>
        </h1>

        <p
          className="text-lg text-gray-300 text-justify leading-relaxed"
          data-aos="fade-up"
        >
          Hello, My mame is <span className="text-white font-semibold">Md. Abdul Halim</span>, a passionate Full-Stack developer who loves to build smart, responsive, and scalable web applications.
          <br /><br />
          My programming journey began with curiosity and turned into a focused path when I completed a Full-Stack Development course. I enjoy working with technologies like <span className="text-[#b76efa]">React</span>, <span className="text-[#b76efa]">Tailwind</span>, and <span className="text-[#b76efa]">JavaScript</span>.
          <br /><br />
          I thrive when building user-friendly UIs, solving design challenges, and learning new tools every day. My dream is to break into the tech industry by <span className="text-white font-medium">2027</span> and eventually transition into <span className="text-[#b76efa]">AI & Data Science</span>.
          <br /><br />
          Outside of coding, I enjoy watching movies, I like to travel, playing eny game with friends, and staying consistent in my learning journey — as I always say:
          <span className="italic text-[#f82b81]">"You have to challenge yourself to be consistent."</span>
        </p>

        <div
          className="mt-10 flex flex-col md:flex-row justify-center gap-4"
          data-aos="zoom-out-up"
        >

          <button className="btn bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] text-white">
            <IoDocumentTextOutline /> Download CV
          </button>

          {/* <a href="/Abdul Halim_CV.pdf" download>
          <button className="btn bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] text-white">
            <IoDocumentTextOutline /> Download CV
          </button>
        </a> */}
          {/* eta thak jkhn CV banano hoye jabe..eta diye try korbo */}


          <Link to="portfolio">
            <button className="btn btn-outline text-white border-[#ab057d] hover:bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] hover:text-white transition">
              <PiBracketsAngleBold /> View Projects
            </button>
          </Link>
        </div>

      </section>
    </Element>
  );
};

export default About;
