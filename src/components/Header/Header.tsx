import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdMessage } from "react-icons/md";

import { LuPencilRuler } from "react-icons/lu";
import { RiTakeawayFill } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";

import { RiAdminFill } from "react-icons/ri";
import Hamburger from "hamburger-react";

function Header() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "სერვისები" },
    { id: 2, text: "ბლოგი" },
    { id: 3, text: "ჩვენს შესახებ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const __textcolors = ["text-black", "text-white"];
  const __backcolors = ["bg-black", "bg-transparent", "bg-white"];
  return (
    <>
      <div
        className={`bg-${
          !scrolled ? "transparent" : "white"
        } w-full flex flex-row justify-center items-center transition-all duration-150 ease-in h-24 px-4 text-white fixed z-50`}
      >
        <div className="wrapper lg:w-11/12 flex flex-row justify-between items-center transition-all duration-300 ease-in">
          {/* Logo */}
          <Link to={"/"}>
            {!scrolled ? (
              <img
                src={process.env.PUBLIC_URL + "/images/Logo-black-Text.png"}
                alt="Ghost Logo"
                className="h-16 transition-all duration-300 ease-in"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/images/Logo-Black-Text.png"}
                alt="Ghost Logo"
                className="h-16 transition-all duration-300 ease-in"
              />
            )}
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex">
            <Link to={"/services"}>
              <li
                className={`relative p-4 rounded-xl m-2 cursor-pointer duration-300 
                 sm:text-sm font-bold
                ${scrolled ? "text-black" : "text-black"}
                group`}
              >
                <span>{"სერვისები"}</span>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-${
                    !scrolled ? "black" : "black"
                  } scale-x-0 
                    origin-left transition-transform duration-300 transform group-hover:scale-x-100`}
                ></div>
              </li>
            </Link>
            <Link to={"/projects"}>
              <li
                className={`relative p-4 rounded-xl m-2 cursor-pointer duration-300 
                  sm:text-sm font-bold
                  ${scrolled ? "text-black" : "text-black"}
                  group`}
              >
                <span>{"პროექტები"}</span>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-${
                    !scrolled ? "black" : "black"
                  } scale-x-0 
                      origin-left transition-transform duration-300 transform group-hover:scale-x-100`}
                ></div>
              </li>
            </Link>
            <li
              className={`relative p-4 rounded-xl m-2 cursor-pointer duration-300 
                 sm:text-sm font-bold
                ${scrolled ? "text-black" : "text-black"}
                group`}
            >
              <span>{"კარიერა"}</span>
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-${
                  !scrolled ? "black" : "black"
                } scale-x-0 
                    origin-left transition-transform duration-300 transform group-hover:scale-x-100`}
              ></div>
            </li>
            <Link to={'/about'}>
              <li
                className={`relative p-4 rounded-xl m-2 cursor-pointer duration-300 
                 sm:text-sm font-bold
                ${scrolled ? "text-black" : "text-black"}
                group`}
              >
                <span>{"ჩვენ შესახებ"}</span>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-${
                    !scrolled ? "black" : "black"
                  } scale-x-0 
                    origin-left transition-transform duration-300 transform group-hover:scale-x-100`}
                ></div>
              </li>
            </Link>
          </ul>
          <div className="hidden lg:flex flex-row justify-center align-middle text-center items-center">
            <button
              className={`btn btn-outline my-4 w-8/12 text-xs mr-4 p-2
            text-black
             hover:bg-main-blue hover:text-white`}
            >
              <MdMessage></MdMessage>
              დაგვეკონტაქტეთ
            </button>
            <button
              className={`btn btn-outline w-5/12 text-xs p-2 
               text-white
               bg-main-blue
               hover:bg-black
              `}
            >
              <LuPencilRuler></LuPencilRuler>
              შესვლა
            </button>
          </div>
        </div>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block lg:hidden z-50">
          {/* {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />} */}
          <Hamburger
            toggled={nav}
            color={!scrolled || nav ? "#4a154b" : "black"}
            toggle={setNav}
            duration={0.5}
            size={30}
          />
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed lg:hidden left-0 flex flex-col top-0 w-screen h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] flex flex-col"
          }
        >
          {/* Mobile Logo */}
          <img
            src={process.env.PUBLIC_URL + "/images/Logo-Black-Text.png"}
            alt="Ghostwriter"
            className="h-16 w-fit m-2"
          />

          {/* Mobile Navigation Items */}
          <div className="flex-1 flex flex-col">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-6 border-b rounded-xl
                text-black font-bold 
                            duration-300 hover:bg-black hover:text-white cursor-pointer border-black
                            text-center"
              >
                {item.text}
              </li>
            ))}
          </div>
          <div className="flex flex-col justify-center align-middle text-center items-center">
            <div className="flex flex-col mb-4 gap-1 w-full justify-center align-middle text-center items-center">
              <button
                className={`btn btn-outline w-[90%] text-xs
            text-black
             hover:bg-main-red hover:text-white`}
                onClick={() => {
                  if (document) {
                    (
                      document.getElementById("order_modal") as HTMLFormElement
                    ).showModal();
                  }
                }}
              >
                <MdMessage></MdMessage>
                შეუკვეთე ახლავე
              </button>
              <button
                className={`btn btn-outline w-[90%] text-xs 
               text-white
               bg-black
               hover:bg-main-red
              `}
                onClick={() => {
                  if (document) {
                    (
                      document.getElementById("login_modal") as HTMLFormElement
                    ).showModal();
                  }
                }}
              >
                <LuPencilRuler></LuPencilRuler>
                შესვლა
              </button>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Header;
