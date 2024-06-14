import React, { useState } from "react";
import cd_image from "../../images/cd.png";
import "./navbar.css";
import "../../styles/global/button.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <div className="">
      <header className="flex w-full fixed justify-between items-center py-2 bg-blue-600 z-50">
        <div className="flex ">
          {/* hamburger menu */}
          <div className="sm:hidden">
            <span className="hamburger-menu mx-2" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </span>
          </div>

          {/* icon */}
          <div className="icon-div">
            <a href="/login" className="w-7 inline">
              <img src={cd_image} alt="icon" />
            </a>
          </div>
        </div>

        <nav className={` ${isMenuOpen ? "active" : ""}`}>
          <ul className="text-white from-neutral-100">
            <li className="main-nav__item sm:inline-block">
              <a href="packages/index.html">Packages</a>
            </li>
            <li className="main-nav__item sm:inline-block">
              <a href="customers/index.html">Customers</a>
            </li>
            <li className="main-nav__item sm:inline-block">
              <a href="start-hosting/index.html">Start Hosting</a>
            </li>
          </ul>
        </nav>

        {/* mobile nav */}
        <nav className="sm:hidden ">

          <ul className=" top-0 left-0 fixed bg-white w-3/4 h-full">
            <li className="main-nav__item">
              <a href="packages/index.html">Packages</a>
            </li>
            <li className="main-nav__item">
              <a href="customers/index.html">Customers</a>
            </li>
            <li className="main-nav__item">
              <a href="start-hosting/index.html">Start Hosting</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
