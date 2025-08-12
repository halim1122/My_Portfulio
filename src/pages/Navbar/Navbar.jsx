import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          activeClass="bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent"
          className="cursor-pointer transition-colors duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          activeClass="bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent"
          className="cursor-pointer transition-colors duration-300"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          activeClass="bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent"
          className="cursor-pointer transition-colors duration-300"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          activeClass="bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent"
          className="cursor-pointer transition-colors duration-300 "
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          activeClass="bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent"
          className="cursor-pointer transition-colors duration-300 "
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          activeClass="bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent"
          className="cursor-pointer transition-colors duration-300 "
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-10 bg-opacity-80 backdrop-blur ">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="home"
            className="text-xl font-bold bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text cursor-pointer text-transparent"
          >
            Abdul Halim
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
