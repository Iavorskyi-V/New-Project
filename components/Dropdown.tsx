"use client";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

interface DropDownProps {
  userNavigation: {
    name: string;
    description?: string;
    href: string;
    icon?: any;
  }[];
  openUp?: boolean;
  children: React.ReactNode;
}

const Dropdown = ({ userNavigation, children, openUp }: DropDownProps) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="-m-1.5 flex items-center p-1.5">
        {children}
        <ChevronDownIcon
          className="ml-2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 z-10 ${
            openUp ? "bottom-14" : "top-14"
          } origin-top-right rounded-md w-auto	
        bg-gradient-to-br from-darkBlue from-0% via-blue via-50% to-darkBlue to-100% 
        py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none`}
        >
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={`${
                    active && "text-gradient"
                  } flex items-center gap-x-5 px-3 py-1 text-sm leading-6 text-white`}
                >
                  {item.icon && (
                    <Image className="w-3 h-3" src={item.icon} alt="edit" />
                  )}
                  <div>
                    <p className="whitespace-nowrap">{item.name}</p>
                    {item.description && (
                      <p className="text-xs">{item.description}</p>
                    )}
                  </div>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
