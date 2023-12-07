import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { DotLoader } from "react-spinners";
import logo from "assets/img/logo.png";
import { useState } from "react";

function Navbar() {
  const [loading] = useState(true);

  window.onscroll = function () {
    scrollFucntion();
  };

  function scrollFucntion() {
    if (document.getElementById("navbar")) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("navbar").classList.add("bg-black-transparent");
        document.getElementById("navbar").classList.add("navbar-top");
      } else {
        document.getElementById("navbar").classList.remove("h-20");
        document.getElementById("navbar").classList.remove("navbar-top");
        document
          .getElementById("navbar")
          .classList.remove("bg-black-transparent");
      }
    }
  }

  return (
    <nav
      id="navbar"
      className="bg-black w-full shadow-navigationbar transition duration-1000 ease-in-out top-0 fixed shadow-navbar z-40"
    >
      <div className=" px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <div className="mt-2">
            <Link to={"/"}>
              <img
                src={logo}
                width={50}
                height={70}
                className="inline-flex"
                alt="LogoNav"
              />

              <h3 className="ml-4 inline-flex font-black text-xl">
                <span className="text-blue-600">Adapt</span>
                <span className="text-white">Leap</span>
              </h3>
            </Link>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/casos"
              className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
            >
              Casos
            </NavLink>
            <NavLink
              to="/servicios"
              className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
            >
              Servicios
            </NavLink>
            <NavLink
              to="/nosotros"
              className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/carreras"
              className="text-lg inline-flex font-medium border-b-2 border-transparent hover:border-blue-500 m-3 transition duration-300 ease-in-out text-white hover:text-blue-500 "
            >
              Carreras
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
              Contacto
            </NavLink>
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
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, {})(Navbar);
