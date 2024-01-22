import { CheckIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Servicios de Desarrollo Web",
    description:
      "Eleve su presencia en línea con nuestras completas soluciones de desarrollo web. Desde la invitación a la colaboración en equipo hasta las vistas de lista sin problemas, simplificamos su experiencia digital.",
  },
  {
    name: "Diseños Adaptables",
    description:
      "Creando accesos directos para el éxito, nos aseguramos de que su sitio web no solo sea visualmente atractivo, sino también fácil de usar, mejorando la navegación y la participación.",
  },
  {
    name: "Calendarios Optimizados",
    description:
      "Sincronizándose perfectamente con los objetivos de su empresa, nuestros servicios de desarrollo web incluyen calendarios optimizados para una programación eficiente y la gestión de eventos esenciales.",
  },
  {
    name: "Notificaciones Proactivas",
    description:
      "Manténgase informado y adelante con nuestros sistemas de notificación proactiva. Lo mantenemos al tanto, asegurándonos de que nunca se pierda una actualización crítica u oportunidad.",
  },
  {
    name: "Tableros Interactivos",
    description:
      "Experimente la gestión de proyectos como nunca antes con tableros interactivos que facilitan la colaboración, simplifican los flujos de trabajo y mejoran la productividad.",
  },
  {
    name: "Informes Exhaustivos",
    description:
      "Obtenga información valiosa sobre el rendimiento de su sitio web. Nuestras herramientas de informes proporcionan análisis detallados, permitiéndole tomar decisiones informadas para un crecimiento continuo.",
  },
  {
    name: "Soluciones Adaptadas a Móviles",
    description:
      "¡Su sitio web en movimiento! Nuestro desarrollo de aplicaciones móviles garantiza que su empresa permanezca accesible y fácil de usar en varios dispositivos, brindando una experiencia sin problemas.",
  },
];

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600">
            Todo lo que necesitas
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Plataforma integral
          </p>
          <p className="mt-4 text-lg text-gray-500">
            En AdaptLeap, lo más fundamental para nosotros es asegurar que
            nuestros clientes estén completamente satisfechos al 100%. Nos
            esforzamos por superar sus expectativas, ofreciendo soluciones
            personalizadas y servicios de alta calidad que reflejan nuestro
            compromiso con la excelencia y la completa satisfacción del cliente.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
