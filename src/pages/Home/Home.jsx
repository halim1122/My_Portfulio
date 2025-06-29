import React from 'react';
import { RiGeminiLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import atik from '../../assets/atik.png'
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router';

const Home = () => {
    return (
<div id='home' className='overflow-hidden'>
    {/* img */}
  <div className=" hero-content justify-between px-15 flex-col lg:flex-row-reverse">
    <div data-aos="fade-left">  
       <img
      src={atik}
      alt="Atik Hassan"
      className=" rounded-lg w-96 shadow-2xl"
    /></div>
    <div>
        {/* home */}
        <div data-aos="fade-right">
            <div className="badge badge-outline bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 bg-clip-text text-transparent flex shadow-md drop-shadow-lg border-indigo-500 shadow-indigo-600"><RiGeminiLine fill='skyblue' />Ready to Innovate</div>
      <h1 className="text-6xl font-bold leading-18">Frontend <br /><span className='bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 bg-clip-text text-transparent'>Developer</span></h1>
      <TypeAnimation
  sequence={['Computer Science & Engg. Student', 2000, 'Tech Enthusiast', 2000,]}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
      <p className="py-6 text-xl text-gray-300">
Enhancing digital experiences that are smooth, scalable, and made to impress.
      </p>
      <div className='flex gap-5 mb-5'>
      <div className="badge badge-outline bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 border bg-clip-text text-transparent border-indigo-500">React</div>
      <div className="badge badge-outline bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 bg-clip-text text-transparent border border-indigo-500">Javascript</div>
      <div className="badge  badge-outline bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 bg-clip-text text-transparent border border-indigo-500">Node.js</div>
      <div className="badge badge-outline bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 bg-clip-text text-transparent border border-indigo-500">MongoDB</div>
      </div>
      </div>
      <div data-aos="fade-up">
      <Link className="btn gradient-to-r from-blue-500 via-purple-600 to-purple-500 border border-indigo-500 drop-shadow-md drop-shadow-indigo-500 ">Resume<IoArrowDownCircleOutline size={20}/></Link>
      <a href="#contact" className="btn gradient-to-r from-blue-500 via-purple-600 to-purple-500 border border-indigo-500 drop-shadow-md drop-shadow-indigo-500 ms-4">Contact Me<MdOutlineMail size={20}/></a>
</div>
{/* social icon */}
    <div className="flex gap-6 items-center py-8" data-aos="fade-up">
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <div className="text-white text-2xl bg-[#0f0f1a] rounded-xl p-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
          <FaGithub />
        </div>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
      <div className="text-white text-2xl bg-[#0f0f1a] rounded-xl p-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
          <FaLinkedinIn />
        </div>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <div className="text-white text-2xl bg-[#0f0f1a] rounded-xl p-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
          <FaInstagram />
        </div>
      </a>
    </div> 
       </div>
  </div>
</div>
    );
};

export default Home;