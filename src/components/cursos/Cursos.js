import CargandoPagina from "components/loading/CargandoPagina";
import ProgreesLoader from "components/loading/ProgressLoading";
import CuadrosBg from "components/utils/CuadrosBg";
import { capitalizarPrimerasLetras } from "components/utils/CuadrosBg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCursos } from "redux/reducers/cursosSlice";

export default function CursosComponent() {
  const cursosRedux = useSelector((state) => state.cursos.cursos);
  const cursosLoading = useSelector((state) => state.cursos.loading);
  const cursosError = useSelector((state) => state.cursos.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCursos());
  }, [dispatch]);

  if (cursosError) {
    return <CargandoPagina title={`Error con el Servidor ${cursosError}`} />;
  }

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white">
        Estas Listo Para Impulsar Tu Carrera como Programador?
      </h2>
      <div className=" w-[20vw] h-1 mx-auto  bg-green-300 my-3"></div>
      <h2 className="text-4xl font-bold tracking-tight mb-10 text-white">
        Cursos:
      </h2>
      {cursosLoading ? (
        <div className="p-20">
          <ProgreesLoader spacing={8} />
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-around">
          {cursosRedux.map((key, index) => {
            return (
              <a
                href={`cursos/${key.nombre}`}
                style={{ backgroundColor: key.bg }}
                className={`relative flex-shrink-0 max-w-xs m-2 overflow-hidden rounded-lg shadow-lg`}
                key={index}
              >
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
          {/*Fin Curso */}{" "}
        </div>
      )}
    </div>
  );
}
