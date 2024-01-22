import { connect } from "react-redux";

function ServiceListBen({ data = [] }) {
  return (
    <ul className="gap-6 mt-8 ">
      {data.map((listElement, index) => {
        return (
          <li key={index} className="mt-6 ">
            <div className="flex">
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  ">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                {listElement}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ServiceListBen;
