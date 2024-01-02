import { Typewriter } from "react-simple-typewriter";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header(props) {
  return (
    <main style={{ height: "90vh" }}>
      <div className="relative px-3 lg:px-8">
        <div className=" mx-auto w-3/4 pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-9xl text-white font-bold tracking-tight sm:text-9xl">
                Cases{" "}
                <span className="text-blue-600">
                  <Typewriter words={["Studies"]} loop={6} typeSpeed={70} />
                </span>
                <div
                  className="inline-flex"
                  style={{ color: "#2a77d6", fontWeight: "bold" }}
                ></div>
              </h1>
              <p className="text-2xl mt-10 mr-auto w-2/4 rounded-2xl p-4 bg-white-transparent  leading-8 text-gray-900 font-bold ">
                We transform challenges into solutions. Find out how Our
                experience and dedication have driven the success of our
                clients. Let's build together the path to business triumph
              </p>
              <div className="mt-8 flex gap-x-4 mr-auto">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Get started
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Live demo
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
            <div
              style={{ top: "-2rem" }}
              className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-sm sm:top-[calc(100%-30rem)]"
            >
              <img
                src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
