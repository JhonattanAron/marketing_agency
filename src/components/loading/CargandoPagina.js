import { LinearProgress } from "@mui/material";

export default function CargandoPagina(param) {
  return (
    <div className="relative z-20 flex items-center text-center overflow-hidden bg-white ">
      <div className="container relative flex justify-center px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 ">
          <span className="w-20 h-2 mb-12 bg-gray-800 "></span>
          <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl ">
            {param.title}
            <span className="text-5xl sm:text-7xl">.....</span>
          </h1>

          <div className="relative mt-32">
            <LinearProgress />
          </div>
        </div>
      </div>
    </div>
  );
}
