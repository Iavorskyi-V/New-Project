import React from "react";
import Image from "next/image";
import logoIcon from "../public/logo.svg";
import Dropdown from "./Dropdown";
import SquareMenu from "./SquareMenu";
import { languages } from "../app/i18n/settings";
import UserInfo from "./UserInfo";

interface HeaderProps {
  t: (text: string) => string;
  lng: string;
}

const Header = ({ t, lng }: HeaderProps) => {
  return (
    <header
      className="sticky z-10 top-0 laft-0 w-full flex gap-x-4 justify-center sm:justify-between lg:gap-x-6 px-5 sm:px-10 min-h-[10vh] 
bg-gradient-to-br from-darkBlue from-0% via-blue via-50% to-darkBlue to-100%"
    >
      <div className="flex items-center gap-x-2">
        <Image src={logoIcon} className="h-10 w-10" alt="logo" />
        <h3 className="text-base text-gradient-static">
          <span className="mr-0.5 font-bigJohn">WIP</span>
          <span className="font-robotoLight">SQUARE</span>
        </h3>
        <SquareMenu />
      </div>
      <div className="flex gap-x-2 items-center">
        <UserInfo t={t} />
        <Dropdown
          userNavigation={languages
            .filter((l) => lng !== l)
            .map((l) => {
              return { name: l, href: `/${l}` };
            })}
        >
          <span className="text-white uppercase text-sm">{lng}</span>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
