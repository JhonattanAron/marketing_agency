import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function AprenderasCursos(params) {
  let curso = params.cursoData;

  return (
    <div className={`p-6 px-6 ${curso.bg}`}>
      <div className="mb-16 text-center">
        <h2 className=" text-2xl font-semibold tracking-wide text-gray-900 uppercase">
          Que vas a Aprender en este Curso de:
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:text-4xl">
          {curso.nombre}
        </p>
      </div>
      <div className="flex flex-wrap my-12 ">
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Increase sales</div>
          </div>
          <p className="leading-loose text-black  text-md">
            Receive more sales by selling across multple sales channels instead
            of just having a single point of entry.
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Overlays</div>
          </div>
          <p className="leading-loose text-black  text-md">
            Apply beautiful overlays to every product image distributed through
            our platform. A visual touch.
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Control</div>
          </div>
          <p className="leading-loose text-black  text-md">
            Apply filters and control which products to sell on each sales
            channel. E.g. exclude products with low margins.
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Mapping</div>
          </div>
          <p className="leading-loose text-black  text-md">
            Map product categories with each sales channels&#x27; own categories
            and achieve better results and lower costs.
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Fill the missing</div>
          </div>
          <p className="leading-loose text-black  text-md">
            Modify products with extra properties and achieve the maximum output
            for each installed sales channel.
          </p>
        </div>
        <div className="w-full p-8 md:w-1/2 lg:w-1/3">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-6 h-6 text-blue-900" />
            <div className="ml-4 text-xl">Dynamic Texts</div>
          </div>
          <p className="leading-loose text-black  text-md">
            Build unique product titles and descriptions instead of spending
            days manually editing each product.
          </p>
        </div>
      </div>
    </div>
  );
}
