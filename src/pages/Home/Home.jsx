import { RiGeminiLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Halim from '../../assets/WhatsApp_Image_2025-08-08_at_16_LE_upscale_balanced_x4__1_-removebg-preview.png'
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedinIn,FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { Link,Element } from 'react-scroll';

const Home = () => {
    return (
<Element name='home'>
<div className='overflow-hidden'>
    {/* img */}
  <div className=" hero-content justify-between px-15 flex-col lg:flex-row-reverse">
    <div data-aos="fade-left">  
       <img
      src={Halim}
      alt="Abdul Halim"
      className=" rounded-lg w-96 max-w-[450px] shadow-lg shadow-gray-500"
    /></div>
    <div>
        {/* home */}
        <div data-aos="fade-right">
            <div className="badge badge-outline bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent flex shadow-md drop-shadow-lg border-[#b76efa] shadow-indigo-600"><RiGeminiLine fill='#b76efa' />Ready to Innovate</div>
      <h1 className="text-6xl font-bold leading-18">Hi, I am <br /><span className='bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent'>Abdul Halim</span></h1>
      <TypeAnimation
  sequence={['A Frontend Developer',2000 ,'A Web Developer', 2000, 'A Full Stack Developer', 2000,'Computer Science & Engg. Student', 2000,]}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
      <p className="py-6 text-xl text-gray-300">
Enhancing digital experiences that are smooth, scalable, and made to impress.
      </p>
      <div className='flex gap-5 mb-5'>
      <div className="badge badge-outline bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] border bg-clip-text text-transparent border-[#b76efa]">React</div>
      <div className="badge badge-outline bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent border border-[#b76efa]">Javascript</div>
      <div className="badge  badge-outline bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent border border-[#b76efa]">Node.js</div>
      <div className="badge badge-outline bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent border border-[#b76efa]">MongoDB</div>
      <div className="badge badge-outline bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent border border-[#b76efa]">CSS-3</div>
      <div className="badge badge-outline bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent border border-[#b76efa]">HTML-5</div>
      </div>
      </div>
      <div data-aos="fade-up">
      <Link className="btn gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] border border-[#b76efa] drop-shadow-md drop-shadow-[#b76efa] ">Resume<IoArrowDownCircleOutline size={20}/></Link>
      <Link to="contact" className="btn gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] border border-[#b76efa] drop-shadow-md drop-shadow-[#b76efa] ms-4">Contact Me<MdOutlineMail size={20}/></Link>
</div>
{/* social icon */}
    <div className="flex gap-6 items-center py-8" data-aos="fade-up">
      <a href="https://github.com/halim1122" target="_blank" rel="noreferrer">
        <div className="text-white text-2xl bg-[#0f0f1a] rounded-xl p-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
          <FaGithub />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/abdul-halim8/" target="_blank" rel="noreferrer">
      <div className="text-white text-2xl bg-[#0f0f1a] rounded-xl p-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
          <FaLinkedinIn />
        </div>
      </a>
      <a href="https://x.com/md_halim32127" target="_blank" rel="noreferrer">
      <div className="text-white text-2xl bg-[#0f0f1a] rounded-xl p-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
          <FaTwitterSquare />
        </div>
      </a>
      <a href="https://www.facebook.com/rjah.king" target="_blank" rel="noreferrer">
      <div className="text-white text-2xl bg-[#0f0f1a] rounded-xl p-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
          <FaFacebookSquare />
        </div>
      </a>
    </div> 
       </div>
  </div>
</div>
    </Element>
    );
};

export default Home;