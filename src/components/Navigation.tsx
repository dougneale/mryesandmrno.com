import config from "../lib/config"

import { Disclosure } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'


export default function Navigation() {
  const links = config.navigation_links
  return (
    <Disclosure className="pb-6" as="nav">
      {({ open }) => (
        <>
          <div className="px-4 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 hidden items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md hover:black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
                <div className="block font-regular">
                  <div className="flex space-x-3">
                  {links.map(link => (
                    <a href={link.url}>
                      <span className="m-0 p-2 text-md text-black hover:bg-gray-100 rounded inline-block">
                        {link.name}
                      </span>
                    </a>
                    ))}
                  </div>
                </div>
             
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pb-3 space-y-1">
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
  )
}
