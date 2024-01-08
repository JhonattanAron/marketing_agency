import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, WindowIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { TagIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import { Fragment } from "react";
import { useState } from "react";

const solutions = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon class="h-6 w-6 text-black" />,
  },
  {
    name: "Cases",
    href: "/casos",
    icon: <BookOpenIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    name: "Servives",
    href: "/servicios",
    icon: <WindowIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    name: "About",
    href: "/nosotros",
    icon: <InformationCircleIcon class="h-6 w-6 text-black" />,
  },
  {
    name: "Carrers",
    href: "/carreras",
    icon: <TagIcon class="h-6 w-6 text-black" />,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6 text-black" />,
  },
  {
    name: "Contacto",
    href: "/contacto",
    icon: <ChatBubbleLeftRightIcon class="h-6 w-6 text-black" />,
  },
];

export default function PopoverNav() {
  const [iconMenu, setIconMenu] = useState(false);

  return (
    <div className="mt-2 w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`${open ? "text-white" : "text-white/90"}`}
            >
              {iconMenu ? (
                <span onClick={() => setIconMenu(false)}>
                  <XMarkIcon class="h-10 w-10 text-white" />
                </span>
              ) : (
                <span onClick={() => setIconMenu(true)}>
                  <Bars3Icon class="h-10 w-10 text-white" />
                </span>
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-0 z-10 mt-3 max-w-sm -translate-x-3/4 w-screen transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          {item.icon}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50">
                    <Accordion className="">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        onClick={(event) => event.preventDefault()}
                      >
                        <Typography>Support</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <a
                          href="/reportar"
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                        >
                          <ExclamationTriangleIcon className="h-6 w-6 text-gray-500" />

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"></div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              Reportar un Error
                            </p>
                          </div>
                        </a>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
