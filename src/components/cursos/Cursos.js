import CuadrosBg from "components/utils/CuadrosBg";
export default function CursosComponent() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white">
        Estas Listo Para Impulsar Tu Carrera como Programador?
      </h2>
      <div className=" w-[20vw] h-1 mx-auto  bg-green-300 my-3"></div>
      <h2 className="text-4xl font-bold tracking-tight mb-10 text-white">
        Cursos:
      </h2>
      <div class="flex flex-wrap items-center justify-around">
        <div class="curso relative flex-shrink-0 max-w-xs mx-2  overflow-hidden bg-yellow-500 rounded-lg shadow-lg ">
          <CuadrosBg fill="#f3c06b" />
          <div class="relative flex items-center justify-center px-10 pt-10">
            <div class="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
            <picture>
              <source
                srcSet="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                type="image/webp"
              />
              <source srcSet="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
              <img
                class="relative w-40"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="shopping item"
              />
            </picture>
          </div>
          <div class="relative px-6 pb-6 mt-6 text-white">
            <span class="block -mb-1 opacity-75">Frontend Developer</span>
            <div class="flex justify-between">
              <span class="block text-xl font-semibold">JavaScript</span>
              <span class="flex items-center px-3 py-2 text-xs font-bold leading-none text-yellow-500 bg-white rounded-full">
                $25.00
              </span>
            </div>
          </div>
        </div>
        <div class="relative flex-shrink-0 max-w-xs mx-2  overflow-hidden bg-blue-500 rounded-lg shadow-lg sm:mb-0">
          <CuadrosBg fill="#6da3fb" />
          <div class="relative flex items-center justify-center px-10 pt-10">
            <div class="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
            <img
              class="relative w-40"
              src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
              alt="shopping"
            />
          </div>
          <div class="relative px-6 pb-6 mt-6 text-white">
            <span class="block -mb-1 opacity-75">Frontend Developer</span>
            <div class="flex justify-between">
              <span class="block text-xl font-semibold">React</span>
              <span class="flex items-center px-3 py-2 text-xs font-bold leading-none text-blue-500 bg-white rounded-full">
                $30.00
              </span>
            </div>
          </div>
        </div>
        <div class="relative flex-shrink-0 max-w-xs mx-2  overflow-hidden bg-purple-500 rounded-lg shadow-lg">
          <CuadrosBg fill="#a17cf3" />
          <div class="relative flex items-center justify-center px-10 pt-10">
            <div class="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
            <img
              class="relative w-40"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png"
              alt="shopping"
            />
          </div>
          <div class="relative px-6 pb-6 mt-6 text-white">
            <span class="block -mb-1 opacity-75">Frontend Developer</span>
            <div class="flex justify-between">
              <span class="block text-xl font-semibold">Angular</span>
              <span class="flex items-center px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">
                $30.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
