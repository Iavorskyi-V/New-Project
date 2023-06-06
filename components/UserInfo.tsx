import React from "react";
import editIcon from "../public/icons/edit.svg";
import Dropdown from "./Dropdown";

interface UserInfoProps {
  t: (text: string) => string;
  isSideBar?: boolean;
}
const UserInfo = ({ t, isSideBar }: UserInfoProps) => {
  const userNavigation = [
    { name: t("your_profile"), href: "#" },
    { name: t("sign_out"), href: "#" },
  ];
  const companyNavigation = [
    { name: "The Second Company", description: t("user"), href: "#" },
    { name: "Dummy Company Name", description: t("developer"), href: "#" },
    {
      name: t("edit_companies"),
      href: "#",
      icon: editIcon,
    },
  ];
  return (
    <div
      className={`${
        isSideBar
          ? "flex sm:hidden px-5 bg-gray-200 py-2"
          : "hidden sm:flex gap-x-4 lg:gap-x-16"
      } w-full items-center justify-between`}
    >
      <Dropdown
        userNavigation={companyNavigation}
        openUp={isSideBar ? true : false}
      >
        <div className="flex items-center">
          <div
            className={`text-xs sm:text-sm ${
              isSideBar ? "text-black" : "text-white"
            } flex flex-col items-start`}
          >
            <h4>Deloitte Advisory s.r.o</h4>
            <span className="text-xxs sm:text-xs">{t("user")}</span>
          </div>
        </div>
      </Dropdown>
      <Dropdown
        userNavigation={userNavigation}
        openUp={isSideBar ? true : false}
      >
        <img
          className="h-8 w-8 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className="hidden lg:flex lg:items-center">
          <span
            className="ml-4 text-sm leading-6 text-white"
            aria-hidden="true"
          >
            Tom Cook
          </span>
        </span>
      </Dropdown>
    </div>
  );
};

export default UserInfo;
