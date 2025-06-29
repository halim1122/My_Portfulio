import React from "react";

const Navbar = () => {

    	const links = <>
    <>
      <li><a href="#home" className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 bg-clip-text text-transparent"
            : "text-gray-500"
        }>Home</a></li>
      <li><a href="#about" className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 bg-clip-text text-transparent"
            : "text-gray-500"
        }>About</a></li>
      <li><a href="#skills" className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 bg-clip-text text-transparent"
            : "text-gray-500"
        }>Skills</a></li>
      <li><a href="#portfolio" className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 bg-clip-text text-transparent"
            : "text-gray-500"
        }>Portfolio</a></li>
      <li><a href="#education" className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 bg-clip-text text-transparent"
            : "text-gray-500"
        }>Education</a></li>
      <li><a href="#contact" className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 bg-clip-text text-transparent"
            : "text-gray-500"
        }>Contact</a></li>
    </>

</>

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
<a href="#home" className="text-xl font-bold bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
  Atik Hassan
</a>
      </div>
      <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
