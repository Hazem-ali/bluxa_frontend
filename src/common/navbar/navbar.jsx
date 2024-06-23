import React, { useEffect, useState } from "react";
import cd_image from "../../images/cd.png";
import "./navbar.css";
import "../../styles/global/button.css";
import { Link, useNavigate } from "react-router-dom";
import Backdrop from "../backdrop";
import useScrollPosition from "../../components/hooks/useScrollPosition";

const SCROLL_THRESHOLD = 300;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navScrollTheme, setNavScrollTheme] = useState();
  const [navHeight, setNavHeight] = useState("h-20");
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isScrolledOverThreshold = (threshold) => {
    return scrollPosition > threshold;
  };

  const modifyNavOnScroll = () => {
    if (isScrolledOverThreshold(SCROLL_THRESHOLD)) {
      // Add your action here
      setNavScrollTheme("bg-white text-black");
      setNavHeight("h-16");
    } else {
      setNavScrollTheme("bg-[#4a261b] text-white");
      setNavHeight("h-20");
    }
    return;
  };

  useEffect(() => {
    modifyNavOnScroll();
  }, [scrollPosition]);

  return (
    <header className="">
      <Backdrop show={isMenuOpen} onClick={toggleMenu} />
      <nav
        className={`${navScrollTheme} flex w-full ${navHeight} fixed justify-between items-center py-2 px-6 duration-300 shadow-xl z-50 transition-all`}
      >
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
          className={`${navScrollTheme} transition-all duration-300 md:static absolute md:shadow-none shadow-xl md:h-fit h-[40vh] md:w-fit w-full flex items-center justify-center z-10 left-0 ${
            isMenuOpen ? "top-[99%] " : "top-[-60vh]"
          }`}
        >
          <ul
            className={`  flex md:flex-row flex-col items-center md:gap-9 gap-8 `}
          >
            <li
              className={` hover:scale-105 transition-transform `}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={` hover:scale-105 transition-transform `}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/register">Customers</Link>
            </li>
            <li
              className={` hover:scale-105 transition-transform `}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/register">Start Hosting</Link>
            </li>
          </ul>
        </div>

        <button
          className="text-black btn bg-comp-brown"
          onClick={() => {
            setIsMenuOpen(false);
            navigate("/login");
          }}
        >
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
