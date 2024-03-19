import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function RegistroCurso(params) {
  let curso = params.curso;

  const [estudianteData, setEstudianteData] = useState({
    nombre: "",
    numero: "",
    curso: curso.nombre,
    email: "",
  });

  const [registroEnviado, setRegistroEnviado] = useState(false);
  const [enviandoRegistro, setEnviandoRegistro] = useState(false);

  const handleChange = (e) => {
    if (e.target.name !== "curso") {
      setEstudianteData({ ...estudianteData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviandoRegistro(true);
    try {
      const response = await fetch(
        "https://api.adaptleap.com/estudiantes/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(estudianteData),
        }
      );
      if (response.ok) {
        setRegistroEnviado(true);
      } else {
        throw new Error("Error al registrar Estudiante");
      }
    } catch (error) {
      console.error(error);
      alert("Error con el Servidor");
    } finally {
      setEnviandoRegistro(false);
    }
  };

  return (
    <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
      {enviandoRegistro ? (
        <div className="flex flex-col items-center justify-center">
          <CircularProgress />
          <Typography variant="body1">Enviando registro...</Typography>
        </div>
      ) : registroEnviado ? (
        <h1>
          El estudiante {estudianteData.nombre} ha sido registrado con éxito
        </h1>
      ) : (
        <>
          <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl text-center">
            Regístrate en el curso <br />{" "}
            <h3 className="text-2xl text-purple-500 font-black">
              {curso.nombre}
            </h3>
          </div>
          <div className="p-6 mt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="create-account-pseudo"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="nombre"
                    onChange={handleChange}
                    value={estudianteData.nombre}
                    placeholder="Nombre Completo"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="create-account-pseudo"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="numero"
                    onChange={handleChange}
                    value={estudianteData.numero}
                    placeholder="+593 969849653"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="create-account-pseudo"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="curso"
                    onChange={handleChange}
                    placeholder="+593 969849653"
                    value={curso.nombre}
                    contentEditable={false}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    id="create-account-email"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                    value={estudianteData.email}
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <button
                  type="submit"
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Regístrame
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
