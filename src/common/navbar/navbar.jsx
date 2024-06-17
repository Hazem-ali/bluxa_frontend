import React, { useState } from "react";
import cd_image from "../../images/cd.png";
import "./navbar.css";
import "../../styles/global/button.css";
import { Link, useNavigate } from "react-router-dom";
import Backdrop from "../backdrop";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="">
      <Backdrop show={isMenuOpen} onClick={toggleMenu} />
      <nav className="flex w-full h-16 fixed justify-between items-center py-2 px-6 bg-[#102C57] shadow-xl z-50">
        <div className="flex items-center justify-center">
          {/* hamburger menu */}
          <div className="md:hidden">
            <span
              className="flex flex-col justify-around mx-2 w-7 h-7 cursor-pointer"
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </span>
          </div>

          {/* icon */}
          <div>
            <a href="/login" className="w-7 inline">
              <img className="w-8 mx-2" src={cd_image} alt="icon" />
            </a>
          </div>
        </div>

        <div
          className={`bg-[#102C57] md:static absolute md:shadow-none shadow-xl md:h-fit h-[40vh] duration-300 md:w-fit w-full flex items-center justify-center z-10 left-0 ${
            isMenuOpen ? "top-[100%]" : "top-[-60vh]"
          }`}
        >
          <ul className="text-white flex md:flex-row flex-col items-center md:gap-9 gap-8 ">
            <li
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/register">Packages</Link>
            </li>
            <li
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/register">Customers</Link>
            </li>
            <li
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/register">Start Hosting</Link>
            </li>
          </ul>
        </div>
        <button
          className="text-black btn bg-comp"
          onClick={() => {
            setIsMenuOpen(false);
            navigate("/login");
          }}
        >
          Sign in
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
