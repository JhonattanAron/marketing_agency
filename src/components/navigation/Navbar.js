import React from "react";
import PopoverNav from "./Popover";
import { NavLink } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { useState } from "react";
import logo from "../../assets/img/logo.webp";

function Navbar() {
  const [loading] = useState(true);

  return (
    <>
      <div className="z-1 flex flex-wrap">
        <section className="">
          <nav
            style={{ width: "100%", position: "fixed", top: 0, zIndex: 1000 }}
            className="flex justify-between text-white bg-black"
          >
            <div className="py-6 flex w-full items-center">
              <a
                className="text-3xl flex xl:mx-auto ml-3 font-bold font-heading"
                href="/"
              >
                <img className=" h-14 mr-4" src={logo} alt="logo" />
                <span className="mt-2 text-blue-500">Adapt</span>
                <span className="mt-2">Leap</span>
              </a>
              <div className="xl:block hidden">
                <NavLink
                  to="/casos"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
                >
                  Cases
                </NavLink>
                <NavLink
                  to="/servicios"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
                >
                  Services
                </NavLink>
                <NavLink
                  to="/nosotros"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/carreras"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
                >
                  Carrers
                </NavLink>
                <NavLink
                  to="/blog"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/contacto"
                  className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
                >
                  Contact
                </NavLink>
              </div>

              <div className="hidden mx-auto xl:flex space-x-5 ml-auto items-center">
                <button
                  type="button"
                  className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-md font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-blue-dark duration-300"
                >
                  Create new job
                  <DotLoader
                    className="ml-3"
                    loading={loading}
                    size={25}
                    color="#ffffff"
                  />
                </button>
              </div>
            </div>

            <a
              className="relative navbar-burger self-center mr-12 xl:hidden"
              href="/#"
            >
              <PopoverNav />
            </a>
          </nav>
        </section>
      </div>
    </>
  );
}

export default Navbar;
