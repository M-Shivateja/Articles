import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = () => setMenuOpen(!menuOpen);
  return (
    <nav className="sticky top-0 w-full flex flex-wrap justify-between justify-center items-center h-30 py-3 z-10 bg-primary backdrop-blur-md px-4 shadow-md">
      <div className="text-white font-bold flex items-center">
        <span className="text-white mb-1 sm:text-2xl">Google Alerts</span>
      </div>{" "}
      <div className="hidden md:flex flex wrap justify-between ">
        <ul class="flex gap-10 text-md text-white font-bold dark:text-white-100 rounded-full justify-around min-w-md ">
          <li class="hover:bg-highlight_background rounded-full hover:text-black px-3.5 py-1.5 duration-500 ">
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li class="hover:bg-highlight_background rounded-full hover:text-black px-3.5 py-1.5 duration-500 ">
            <Link to="/about">About</Link>
          </li>
          <li class="hover:bg-highlight_background rounded-full hover:text-black px-3.5 py-1.5 duration-500 ">
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden ">
        <button
          onClick={Menu}
          className=" ring-gray-300 px-1 py-1 focus:ring-1 rounded"
        >
          <img
            src="https://i.imghippo.com/files/sDag6137yTk.png"
            height={22}
            width={22}
          />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-1  bg-black/60 w-40 text-white rounded-md font-bold flex flex-col items-center  py-5">
          <Link to="/" className="hover:text-black py-2 px-2">
            Home
          </Link>
          <Link to="/about" className="hover:text-black px-2 py-2 ">
            About
          </Link>{" "}
          <Link to="/contact" className="hover:text-black px-2 py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
