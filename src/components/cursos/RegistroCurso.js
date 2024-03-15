export default function RegistroCurso(params) {
  let curso = params.curso;

  return (
    <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
      <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl text-center">
        Registrate en el curso <br />{" "}
        <h3 className="text-2xl text-purple-500 font-black">{curso.nombre}</h3>
      </div>

      <div class="p-6 mt-8">
        <form action="#">
          <div class="flex flex-col mb-2">
            <div class=" relative ">
              <input
                type="text"
                id="create-account-pseudo"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="nombre"
                placeholder="Nombre Completo"
              />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <div class="relative">
              <input
                type="text"
                id="create-account-pseudo"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="numero"
                placeholder="+593 969849653"
              />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <div class="relative">
              <input
                type="text"
                id="create-account-pseudo"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="numero"
                placeholder="+593 969849653"
                value={curso.nombre}
                contentEditable={false}
              />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <div class=" relative ">
              <input
                type="text"
                id="create-account-email"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="flex w-full my-4">
            <button
              type="submit"
              class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Registrame
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
