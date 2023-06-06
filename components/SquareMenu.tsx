"use client";
import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Image from "next/image";
import SquareMultipleItems from "./SquareMultipleItems";
import Cube from "../public/icons/cube.svg";
import WIP from "../public/apps/WIP.png";
import DEV from "../public/apps/DEV.png";
import Third from "../public/apps/Third.png";
import Forth from "../public/apps/Forth.png";
import Fifth from "../public/apps/Fifth.png";

const SquareMenu = () => {
  const squareItems = [
    { image: WIP, title: "WIP Square", href: "#" },
    { image: DEV, title: "Dev Square", href: "#" },
  ];
  const squareRecentlyItems = [
    { image: Fifth, title: "App Name", href: "#" },
    { image: Forth, title: "Engagement", href: "#" },
    { image: Forth, title: "Engagement", href: "#" },
    { image: Third, title: "App Name Here", href: "#" },
  ];
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="-m-1.5 flex items-center p-1.5">
        <ChevronDownIcon
          className=" sm:ml-10 h-5 w-5 text-gray-400"
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
          className="absolute right-[-110px] sm:left-[-150px] md:left-0 z-10 top-12 px-4 pt-4 pb-6 gap-y-7 flex flex-col origin-top-right rounded-2xl w-[280px] sm:w-[500px]	
    bg-gradient-to-br from-darkBlue from-0% via-blue via-50% to-darkBlue to-100% 
     shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
        >
          <SquareMultipleItems
            titleIcon={
              <ChevronRightIcon
                className="ml-10 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            }
            title="Square"
            cards={squareItems}
          />
          <SquareMultipleItems
            titleIcon={
              <Image src={Cube} className="ml-10 h-5 w-5" alt="cube" />
            }
            title="Recently Visited"
            cards={squareRecentlyItems}
          />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SquareMenu;
