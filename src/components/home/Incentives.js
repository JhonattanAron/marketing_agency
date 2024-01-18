import ServicesHome from "components/home/ServiciosHome";

const incentives = [
  {
    name: "Free Interactions",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "we simply integrate them into the development cost. Someone is financing them, and it is not the client.",
  },
  {
    name: "10-phase guarantee",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If something breaks during the first 10 phases of development, we will fix it. After that point, it will depend on your maintenance.",
  },
  {
    name: "Requirements exchange",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "If you are not satisfied with any requirement, as experts we will be ready for any changes",
  },
];

export default function IncentivesHome() {
  return (
    <div className="bg-white">
      <ServicesHome />
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Innovate with Us: Your Ideal Partner in Software Development
            </h2>
            <p className="mt-4 text-gray-500">
              Transform your vision into reality with our leading software
              development agency. From concept to implementation, we offer
              customized solutions that drive innovation and enhance your
              success. Discover how we can take your project to the next level,
              combining technical expertise with a customer-centric approach.
              Turn your ideas into world-class software with us!
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
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
