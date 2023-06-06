"use client";
import React, { useState } from "react";
import Search from "./Search";
import Switcher from "./Switcher";
import AppsContainer from "./AppsContainer";
import UserInfo from "./UserInfo";
import { APPS } from "@/public/Data";
import OpenSidebarBtn from "./OpenSidebarBtn";
import { useTranslation } from "@/app/i18n/client";

interface SidebarProps {
  lng: string;
}

const Sidebar = ({ lng }: SidebarProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const { t } = useTranslation(lng, "client-page");

  return (
    <aside
      className={`sticky pt-8 top-0 left-0 sm:w-[40%] lg:w-[33%]  min-h-[90vh] shrink-0 sm:block bg-sideBarBg shadow-right 
       ${
         isActive
           ? "w-full transition-all duration-1000"
           : "w-[0%] transition-all duration-1000"
       }`}
    >
      <div className={`overflow-hidden`}>
        {/* <div className=""> */}
        <h2 className="text-center sm:text-left text-base md:text-lg font-semibold px-5">
          {t("applications")}
        </h2>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-5 px-5">
            <Search setSearch={setSearch} search={search} lng={lng} />
            <Switcher lng={lng} />
            <AppsContainer apps={APPS} search={search} />
          </div>
          <UserInfo t={t} isSideBar />
        </div>
        {/* </div> */}
      </div>
      <OpenSidebarBtn active={isActive} setActive={setIsActive} />
    </aside>
  );
};

export default Sidebar;
