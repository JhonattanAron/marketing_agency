import ServiceListBen from "./ServicesBenficis";

export default function ServicesHome() {
  const beneficiosWeb = [
    "Diseño Atractivo y Funcionalidades Intuitiva",
    "Compatibilidad con Movil",
    "Rendimiento Optimizado",
    "Seguridad Web",
    "Funcionalidades Especificas",
    "Optimizacion de SEO",
    "Facilidad de Mantenimiento Admin no code (Opcional exportacion Wordpress)",
    "Integracion con plataformas Externas",
    "Escalabilidad",
    "Costo-Efectividad",
    "Soporte Técnico",
    "Cumplimiento Normativo",
  ];
  const beneficiosMobile = [
    "Diseño Atractivo y Funcionalidades Intuitivas para Dispositivos Móviles",
    "Compatibilidad con Móviles y Tabletas",
    "Rendimiento Optimizado en Dispositivos Móviles",
    "Seguridad Mobile",
    "Funcionalidades Específicas para Plataformas Móviles",
    "Optimización de SEO para Búsquedas Móviles",
    "Experiencia de Usuario Adaptada a Dispositivos Móviles",
    "Integración con Plataformas y Tecnologías Móviles",
    "Escalabilidad en Entornos Móviles",
    "Costo-Efectividad en Desarrollo y Mantenimiento Móvil",
    "Soporte Técnico Especializado en Dispositivos Móviles",
    "Cumplimiento Normativo en Aplicaciones Móviles",
  ];
  // Beneficios para Blockchain
  const beneficiosBlockchain = [
    "Seguridad y Transparencia Gracias a la Tecnología de Blockchain",
    "Inmutabilidad de los Datos para Garantizar la Integridad",
    "Descentralización para Eliminar Intermediarios",
    "Rastreabilidad Completa de Transacciones",
    "Eficiencia en Procesos de Negocio a través de Contratos Inteligentes",
    "Reducción de Riesgos de Fraude y Corrupción",
    "Aumento de la Confianza del Usuario",
    "Interoperabilidad entre Sistemas y Organizaciones",
    "Mayor Eficiencia y Reducción de Costos en Transacciones",
    "Cumplimiento Normativo y Legal Reforzado",
    "Capacidad de Tokenización para Activos Virtuales y Físicos",
    "Resistencia a Ataques y Seguridad Mejorada",
  ];

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
      <div class="flex-wrap items-center justify-center gap-8  sm:flex">
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
          <h3
            class="py-4 text-center
           text-2xl font-semibold text-gray-700 sm:text-xl"
          >
            Servicios de Desarrollo Web
          </h3>
          <ServiceListBen data={beneficiosWeb} />
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
            Servicios de Desarrollo Mobile
          </h3>
          <ServiceListBen data={beneficiosMobile} />
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
            Servicios al Desarrollo Blockchain
          </h3>
          <ServiceListBen data={beneficiosBlockchain} />
        </div>
      </div>
    </>
  );
}
