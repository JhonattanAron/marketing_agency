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
                Transformamos desafíos en soluciones. Descubra cómo Nuestro La
                experiencia y la dedicación han impulsado el éxito de nuestra
                clientela. Construyamos juntos el camino hacia el triunfo
                empresarial
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
