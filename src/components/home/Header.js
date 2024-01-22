import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header(props) {
  return (
    <main className="sm:h-[90vh]">
      <div className="relative px-3 lg:px-8">
        <div className="mx-auto w-3/4 pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-4xl text-white font-bold tracking-tight sm:text-center sm:text-7xl">
                Encuentra{" "}
                <div
                  className="inline-flex text-4xl sm:text-7xl"
                  style={{ color: "#2a77d6", fontWeight: "bold" }}
                >
                  <Typewriter
                    words={[
                      "Servicios Web",
                      "Servicios Móviles",
                      "Servicios de Diseño",
                      "Servicios de Blockchain",
                      "Servicios de Frontend",
                      "Servicios de Backend",
                      "Inteligencia Artificial",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    delaySpeed={1000}
                    deleteSpeed={50}
                  />
                </div>
              </h1>
              <p className="mt-10 ml-auto mr-auto xl:w-2/4 center rounded-2xl bg-white-transparent text-lg leading-8 text-gray-900 font-bold sm:text-center">
                <ul className="flex flex-wrap xl:block">
                  <li className="inline-flex border-b-2 border-transparent hover:border-blue-900 m-3 transition duration-300 ease-in-out">
                    <Link to={"/servicios"}>Servicios Web</Link>
                  </li>
                  <li className="inline-flex border-b-2 border-transparent hover:border-blue-900 m-3 transition duration-300 ease-in-out">
                    <Link to={"/servicios"}>Servicios Móviles</Link>
                  </li>
                  <li className="inline-flex border-b-2 border-transparent hover:border-blue-900 m-3 transition duration-300 ease-in-out">
                    <Link to={"/servicios"}>Servicios de Blockchain</Link>
                  </li>
                  <li className="inline-flex border-b-2 border-transparent hover:border-blue-900 m-3 transition duration-300 ease-in-out">
                    <Link to={"/servicios"}>Inteligencia Artificial</Link>
                  </li>
                </ul>
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Empezar
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-white-transparent bg-white-transparent hover:ring-gray-900/20"
                >
                  Demo en vivo
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
            <div
              style={{ top: "-2rem" }}
              className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden sm:top-[calc(100%-30rem)]"
            >
              <img
                className=" h-screen  xl:w-full xl:h-full overflow-hidden object-cover"
                src="https://i.ibb.co/Wx4kBZ0/i-want-an-ai-generated-visual-representation-of-a.jpg"
                alt="fondo"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
