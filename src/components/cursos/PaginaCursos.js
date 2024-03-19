import { useParams } from "react-router-dom";
import HeaderCursos from "./HeaderCursos";
import AprenderasCursos from "./Aprenderas";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCursos } from "redux/reducers/cursosSlice";
import CargandoPagina from "components/loading/CargandoPagina";
import { fecthBeneficios } from "redux/reducers/BeneficiosSlice";

export default function PaginaCursos() {
  let { cursoParam } = useParams();
  const cursosRedux = useSelector((state) => state.cursos.cursos);
  const cursosLoading = useSelector((state) => state.cursos.loading);
  const cursosError = useSelector((state) => state.cursos.error);
  const dispatch = useDispatch();

  const beneficios = useSelector(
    (state) => state.cursosBeneficios.beneficios_cursos
  );
  const beneficiosLoading = useSelector(
    (state) => state.cursosBeneficios.loading
  );
  const beneficiosError = useSelector((state) => state.cursosBeneficios.error);

  useEffect(() => {
    dispatch(fetchCursos());
    dispatch(fecthBeneficios());
  }, [dispatch]);

  if (cursosError) {
    return (
      <CargandoPagina title={`Error al cargar El Curso: ${cursosError}`} />
    );
  }

  if (cursosLoading || beneficiosLoading) {
    return <CargandoPagina title="Tu Pagina Se Esta Cargando" />;
  }

  const cursoEncontrado = cursosRedux.find(
    (cursoData) => cursoParam.toLowerCase() === cursoData.nombre.toLowerCase()
  );

  if (!cursoEncontrado) {
    return <CargandoPagina title="El curso No Fue Encontrado" />;
  }

  return (
    <div>
      <div className="">
        <HeaderCursos cursoData={cursoEncontrado} />
      </div>
      <div className="relative">
        <AprenderasCursos
          cursoData={cursoEncontrado}
          beneficiosData={beneficios}
        />
      </div>
    </div>
  );
}
