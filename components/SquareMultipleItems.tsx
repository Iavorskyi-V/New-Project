import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SquareMultipleItemsProps {
  titleIcon: any;
  title: string;
  cards: {
    image: any;
    title: string;
    href: string;
  }[];
}

const SquareMultipleItems = ({
  titleIcon,
  title,
  cards,
}: SquareMultipleItemsProps) => {
  return (
    <div>
      <div className="flex gap-x-4 mb-2">
        {titleIcon}
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {cards.map((card, index) => (
          <Menu.Item key={card.title + index}>
            {({ active }) => (
              <Link
                href={card.href}
                className={`${
                  active && "text-gradient shadow-ligher"
                } flex items-center space-x-2 px-1 py-2 rounded-md`}
              >
                <div className="bg-gradient-to-r from-[#F2F2F2] to-[#ECECEC] rounded-lg">
                  <Image
                    className="h-8 w-8 rounded-lg"
                    src={card.image}
                    alt="icon"
                  />
                </div>
                <p className="text-sm font-medium text-white">{card.title}</p>
              </Link>
            )}
          </Menu.Item>
        ))}
      </div>
    </div>
  );
};

export default SquareMultipleItems;
