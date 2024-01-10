import { Typewriter } from "react-simple-typewriter";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header(props) {
  return (
    <main style={{ height: "30vh" }}>
      <div className="relative px-3 lg:px-8">
        <div className="mx-auto w-3/4 pt-20 pb-32">
          <div>
            <div>
              <h1 className="xl:text-9xl text-5xl text-center text-blue-600 font-bold tracking-tight">
                Contactanos
              </h1>
            </div>
            <div
              style={{ top: "-2rem" }}
              className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-sm sm:top-[calc(100%-30rem)]"
            >
              <img
                className="h-[100vh] xl:w-full xl:h-full overflow-hidden object-cover "
                src="https://i.ibb.co/tHLk9By/software-development-office-with-programmers-weari.jpg"
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
