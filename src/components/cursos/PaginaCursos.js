import { useParams } from "react-router-dom";
import HeaderCursos from "./HeaderCursos";
import AprenderasCursos from "./Aprenderas";

export default function PaginaCursos() {
  let data = [
    {
      nombre: "JavaScript",
      portada:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      tipo: "Fronted Developer",
      precio: "25.00",
      fill: "#f3c06b",
      bg: "bg-yellow-500",
    },
    {
      nombre: "React",
      portada: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      tipo: "Fronted Developer",
      precio: "30.00",
      fill: "#669ae8",
      bg: "bg-blue-500",
    },
    {
      nombre: "Angular",
      portada:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png",
      tipo: "Fronted Developer",
      precio: "30.00",
      fill: "#cb66e8",
      bg: "bg-purple-500",
    },
    {
      nombre: "Spring Boot",
      portada:
        "https://miro.medium.com/v2/resize:fit:1400/1*CIHazLUXhBCxiho2mE2glQ.png",
      tipo: "Bakend Developer",
      precio: "30.00",
      fill: "#5bd86f",
      bg: "bg-green-400",
    },
  ];

  let { cursoParam } = useParams();
  let cursoEncontrado = null;

  data.forEach((cursoData) => {
    if (cursoParam.toLowerCase() === cursoData.nombre.toLowerCase()) {
      cursoEncontrado = cursoData;
    }
  });

  return (
    <div>
      <HeaderCursos cursoData={cursoEncontrado} />
      <AprenderasCursos cursoData={cursoEncontrado} />
    </div>
  );
}
