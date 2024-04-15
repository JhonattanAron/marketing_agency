export default function BlockChainService(props) {
  return (
    <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white  sm:px-6 lg:px-8 py-26 lg:mt-20">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
              {props.data.tittle}
            </p>
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900  sm:text-3xl sm:leading-9">
              {props.data.subtittle}
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-500 ">
              {props.data.description}
            </p>
            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                    {props.data.beneficios[0]}
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                    {props.data.beneficios[1]}
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                    {props.data.beneficios[2]}
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                    {props.data.beneficios[3]}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={props.data.imagenes[0]}
                  alt="1"
                />
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={props.data.imagenes[1]}
                  alt="2"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src={props.data.imagenes[2]}
                  alt="3"
                />
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={props.data.imagenes[3]}
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
