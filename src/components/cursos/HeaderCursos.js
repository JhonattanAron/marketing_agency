import CuadrosBg from "components/utils/CuadrosBg";

export default function HeaderCursos(params) {
  let curso = params.cursoData;

  return (
    <section className={`py-8  bg-gradient  md:py-16 ${curso.bg}`}>
      <CuadrosBg fill={curso.fill} />
      <div className="max-w-5xl px-5 mx-auto">
        <div className="flex flex-col justify-between -mx-5 md:flex-row">
          <div
            className={`relative drop-shadow-2xl flex-shrink-0 max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg ${curso.bg}`}
          >
            <CuadrosBg fill={curso.fill} />
            <div class="relative flex items-center justify-center px-10 pt-10">
              <div class="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
              <img class="relative w-40" src={curso.portada} alt="shopping" />
            </div>
            <div class="relative px-6 pb-6 mt-6 text-white">
              <span class="block opacity-75">{curso.tipo}</span>
              <div class="flex justify-between">
                <span class="block text-xl font-semibold">{curso.nombre}</span>
                <span class="flex items-center px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">
                  {curso.precio}$
                </span>
              </div>
            </div>
          </div>
          <div className="w-full z-10 px-5 md:w-auto">
            <div className=" my-20">
              <h2 className="text-4xl text-center font-bold tracking-tight text-white">
                Inicio: <br /> Marzo del 2024
              </h2>
            </div>
            <div className="flex justify-center text-center text-white">
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>0</span>
                  <span>1</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75">Day</div>
              </div>
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>1</span>
                  <span>8</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
              </div>
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>5</span>
                  <span>0</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
              </div>
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>1</span>
                  <span>9</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Second</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
