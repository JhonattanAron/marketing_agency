import { AcademicCapIcon } from "@heroicons/react/24/outline";
export default function AprenderasCursos(params) {
  let curso = params.cursoData;
  let beneficios = {
    id: 0,
    curso_id: 0,
    beneficio_uno: "",
    beneficio_dos: "",
    beneficio_tres: "",
    beneficio_cuatro: "",
    beneficio_cinco: "",
    beneficio_six: "",
  };

  params.beneficiosData.map((key) => {
    if (curso.id === key.id) {
      beneficios = key;
    }
  });

  return (
    <div style={{ backgroundColor: curso.bg }} className={`p-6 px-6 z`}>
      <div className="mb-16 text-center">
        <h2 className=" text-2xl z-10 font-semibold tracking-wide text-gray-900 uppercase">
          Que vas a Aprender con:
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:text-4xl">
          {curso.nombre}
        </p>
      </div>
      <div className="flex flex-wrap my-12 ">
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Primer Modulo</div>
          </div>
          <p className="leading-loose text-black  text-md">
            {beneficios.beneficio_uno}
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Segundo Modulo</div>
          </div>
          <p className="leading-loose text-black  text-md">
            {beneficios.beneficio_dos}
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Tercer Modulo</div>
          </div>
          <p className="leading-loose text-black  text-md">
            {beneficios.beneficio_tres}
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Cuarto Modulo</div>
          </div>
          <p className="leading-loose text-black  text-md">
            {beneficios.beneficio_cuatro}
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Quinto Modulo</div>
          </div>
          <p className="leading-loose text-black  text-md">
            {beneficios.beneficio_cinco}
          </p>
        </div>
        <div className="w-full p-8 md:w-1/2 lg:w-1/3">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Sexto Modulo</div>
          </div>
          <p className="leading-loose text-black  text-md">
            {beneficios.beneficio_six}
          </p>
        </div>
      </div>
    </div>
  );
}
