import ServiciosHome from "components/home/ServiciosHome";
import BoxLoading from "components/loading/boxLoading";

const incentivos = [
  {
    name: "Interacciones Gratuitas",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "simplemente las integramos en el costo de desarrollo. Alguien las está financiando, y no es el cliente.",
  },
  {
    name: "Garantía de 10 Fases",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Si algo se rompe durante las primeras 10 fases de desarrollo, lo solucionaremos. Después de ese punto, dependerá de tu mantenimiento.",
  },
  {
    name: "Intercambio de Requisitos",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Si no estás satisfecho con algún requisito, como expertos, estaremos listos para cualquier cambio.",
  },
];

export default function IncentivosHome() {
  return (
    <div className="bg-white">
      <ServiciosHome />
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Innova con Nosotros: Tu Socio Ideal en Desarrollo de Software
            </h2>
            <p className="mt-4 text-gray-500">
              Transforma tu visión en realidad con nuestra destacada agencia de
              desarrollo de software. Desde el concepto hasta la implementación,
              ofrecemos soluciones personalizadas que impulsan la innovación y
              mejoran tu éxito. Descubre cómo podemos llevar tu proyecto al
              siguiente nivel, combinando experiencia técnica con un enfoque
              centrado en el cliente. ¡Convierte tus ideas en software de clase
              mundial con nosotros!
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentivos.map((incentivo) => (
              <div key={incentivo.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentivo.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentivo.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentivo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
