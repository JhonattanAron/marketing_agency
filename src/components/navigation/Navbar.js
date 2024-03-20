import React from "react";
import PopoverNav from "./Popover";
import { NavLink } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.webp";

function Navbar() {
  const [loading] = useState(true);

  const detectarScroll = () => {
    const navbar = document.getElementById("navbar");
    const link = document.getElementById("links");
    const bground = document.getElementById("bground");
    const popover = document.getElementById("popover");
    if (window.scrollY > navbar.offsetTop) {
      popover.classList.add("text-black");
      popover.classList.remove("text-white");
      bground.classList.remove("bg-black");
      bground.classList.add("bg-white");
      navbar.classList.remove("py-6");
      navbar.classList.add("py-2");
      navbar.classList.add("text-black");
      link.classList.add("text-black");
      link.classList.remove("text-white");
    } else {
      popover.classList.add("text-white");
      popover.classList.remove("text-black");
      navbar.classList.add("py-6");
      bground.classList.add("bg-black");
      bground.classList.remove("bg-white");
      navbar.classList.remove("text-black");
      link.classList.remove("text-black");
      link.classList.add("text-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", detectarScroll);
    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, []);

  return (
    <>
      <div className={"z-1 flex flex-wrap"}>
        <section className="">
          <nav
            id="bground"
            style={{ width: "100%", position: "fixed", top: 0, zIndex: 1000 }}
            className="flex justify-between text-white bg-black"
          >
            <div
              id="navbar"
              className=" duration-500  py-6 flex w-full items-center"
            >
              <a
                className="text-3xl flex xl:mx-auto ml-3 font-bold font-heading"
                href="/"
              >
                <img className="h-14 mr-4" src={logo} alt="logo" />
                <span className="mt-2 text-blue-500">Adapt</span>
                <span className="mt-2">Leap</span>
              </a>
              <div id="links" className="xl:block hidden text-white">
                <NavLink
                  to="/casos"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out  hover:text-blue-500 "
                >
                  Casos
                </NavLink>
                <NavLink
                  to="/servicios"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out  hover:text-blue-500 "
                >
                  Servicios
                </NavLink>
                <NavLink
                  to="/nosotros"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out  hover:text-blue-500 "
                >
                  Acerca De
                </NavLink>
                {/*<NavLink
                  to="/carreras"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out  hover:text-blue-500 "
                >
                  
                  Carrers
                </NavLink>
                <NavLink
                  to="/blog"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out  hover:text-blue-500 "
                >
                  Blog
                </NavLink>
                  >*/}
                <NavLink
                  to="/contacto"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out  hover:text-blue-500 "
                >
                  Contacto
                </NavLink>
                <NavLink
                  to="/cursos"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out  hover:text-blue-500 "
                >
                  Cursos
                </NavLink>
              </div>

              <div className="hidden mx-auto xl:flex space-x-5 ml-auto items-center">
                <a
                  href="https://learning.adaptleap.com/"
                  type="button"
                  className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-md font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-blue-dark duration-300"
                >
                  Plataforma elearning
                  <DotLoader
                    className="ml-3"
                    loading={loading}
                    size={25}
                    color="#ffffff"
                  />
                </a>
              </div>
            </div>

            <a
              className="relative navbar-burger self-center mr-12 xl:hidden"
              href="/#"
            >
              <span id="popover" className="text-white">
                <PopoverNav />
              </span>
            </a>
          </nav>
        </section>
      </div>
    </>
  );
}

export default Navbar;
