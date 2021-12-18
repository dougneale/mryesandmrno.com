import config from "../lib/config";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navigation() {
  const links = config.navigation_links;
  return (
    <Disclosure className="" as="nav">
      {({ open }) => (
        <>
          <div className="absolute bg-white border-black border-4 items-center sm:hidden rounded-full top-4 left-4">
            <Disclosure.Button className="space-x-3 inline-flex items-center justify-center rounded-md hover:black focus:outline-none py-2 px-3">
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
              <span className="font-bold">Menu</span>
            </Disclosure.Button>
          </div>
          <div className="flexitems-center justify-between hidden sm:block font-semibold py-3 px-4">
            <div className="flex space-x-3 items-center">
              {links.map((link) => (
                <a href={link.url}>
                  <span className="m-0 p-2 text-md  hover:bg-gray-100 rounded inline-block">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pb-3 space-y-1 mt-20 font-bold">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-regular"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
