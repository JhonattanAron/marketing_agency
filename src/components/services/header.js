import { Typewriter } from "react-simple-typewriter";

function Header(props) {
  return (
    <main style={{ height: "60vh" }}>
      <div className="relative px-3 lg:px-8">
        <div className="mx-auto w-3/4 pt-20 pb-32">
          <div>
            <div>
              <h1 className="xl:text-8xl text-5xl text-white font-bold tracking-tight">
                Software{" "}
                <span className="text-blue-600">
                  <Typewriter words={["Services"]} loop={6} typeSpeed={70} />
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
              className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden  sm:top-[calc(100%-30rem)]"
            >
              <img
                className="h-full w-screen overflow-hidden blur-md object-cover  "
                src="https://i.ibb.co/nbGtytn/programmer-with-8eca7631-5f4a-4156-ad12-7c8e9def1e99.png"
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
