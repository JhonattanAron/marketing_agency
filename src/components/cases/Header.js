import { Typewriter } from "react-simple-typewriter";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header(props) {
  return (
    <main style={{ height: "90vh" }}>
      <div className="relative px-3 lg:px-8">
        <div className="mx-auto w-3/4 pt-20 pb-32">
          <div>
            <div>
              <h1 className="xl:text-9xl text-5xl text-white font-bold tracking-tight">
                Cases{" "}
                <span className="text-blue-600">
                  <Typewriter words={["Studies"]} loop={6} typeSpeed={70} />
                </span>
              </h1>
              <p className="text-2xl mt-10 mr-auto w-full xl:w-2/4 rounded-2xl p-4 bg-white-transparent  leading-8 text-gray-900 font-bold ">
                We transform challenges into solutions. Find out how Our
                experience and dedication have driven the success of our
                clients. Let's build together the path to business triumph
              </p>
            </div>
            <div
              style={{ top: "-2rem" }}
              className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-sm sm:top-[calc(100%-30rem)]"
            >
              <img
                className=" w-full h-full overflow-hidden object-cover xl:h-auto "
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
