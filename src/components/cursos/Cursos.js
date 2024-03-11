import CuadrosBg from "components/utils/CuadrosBg";
import { capitalizarPrimerasLetras } from "components/utils/CuadrosBg";

export default function CursosComponent() {
  let data = [
    {
      nombre: "javascript",
      portada:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      tipo: "Fronted Developer",
      precio: "25.00",
      fill: "#f3c06b",
      bg: "bg-yellow-500",
    },
    {
      nombre: "react",
      portada: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      tipo: "Fronted Developer",
      precio: "30.00",
      fill: "#669ae8",
      bg: "bg-blue-500",
    },
    {
      nombre: "angular",
      portada:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png",
      tipo: "Fronted Developer",
      precio: "30.00",
      fill: "#cb66e8",
      bg: "bg-purple-500",
    },
    {
      nombre: "spring boot",
      portada:
        "https://miro.medium.com/v2/resize:fit:1400/1*CIHazLUXhBCxiho2mE2glQ.png",
      tipo: "Bakend Developer",
      precio: "30.00",
      fill: "#c9b3b3",
      bg: "bg-gray-500",
    },
  ];
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white">
        Estas Listo Para Impulsar Tu Carrera como Programador?
      </h2>
      <div className=" w-[20vw] h-1 mx-auto  bg-green-300 my-3"></div>
      <h2 className="text-4xl font-bold tracking-tight mb-10 text-white">
        Cursos:
      </h2>
      <div className="flex flex-wrap items-center justify-around">
        {data.map((key, index) => {
          let style = `relative flex-shrink-0 max-w-xs m-2 overflow-hidden rounded-lg shadow-lg ${key.bg} `;
          return (
            <a href={`cursos/${key.nombre}`} className={style} key={index}>
              <CuadrosBg fill={key.fill} />
              <div className="relative flex items-center justify-center px-10 pt-10">
                <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
                <img
                  className="relative w-40"
                  src={key.portada}
                  alt="shopping"
                />
              </div>
              <div className="relative px-6 pb-6 mt-6 text-white">
                <span className="block opacity-75">{key.tipo}</span>
                <div className="flex justify-between">
                  <span className="block text-xl font-semibold">
                    {capitalizarPrimerasLetras(key.nombre)}
                  </span>
                  <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">
                    {key.precio}$
                  </span>
                </div>
              </div>
            </a>
          );
        })}

        {/*Fin Curso */}
      </div>
    </div>
  );
}
