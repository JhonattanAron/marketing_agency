import ServiceListBen from "./ServicesBenficis";

export default function ServicesHome() {
  return (
    <>
      <div className=" pt-14 ml-[10vw]">
        <h2 className="text-4xl font-bold tracking-tight text-black">
          ¿A QUE NOS DEDICAMOS EN ADAPTLEAP?
        </h2>
        <div className=" w-[20vw] h-1 bg-green-300 my-3"></div>
        <h2 className="text-xl font-bold tracking-tight text-gray-600">
          Desarrollamos soluciones de software innovadoras, aprovechando las
          últimas tecnologías, con el objetivo de satisfacer las necesidades
          fundamentales de nuestros clientes. Nuestra amplia gama de servicios
          incluye:
        </h2>
      </div>
      <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        <div class="drop-shadow-2xl w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
            Servicios de Desarrollo Web
          </h3>
          <ServiceListBen />
        </div>
        <div class="drop-shadow-2xl w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 ">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Branding
          </h3>
          <ServiceListBen />
        </div>
        <div class="drop-shadow-2xl w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            SEO Marketing
          </h3>
          <ServiceListBen />
        </div>
      </div>
    </>
  );
}
