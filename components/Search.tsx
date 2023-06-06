"use client";
import React, { useState } from "react";
import SearchIcon from "../public/icons/search.svg";
import CrossIcon from "../public/icons/cross.svg";
import Image from "next/image";
import { useTranslation } from "../app/i18n/client";

interface SearchProps {
  setSearch: (text: string) => void;
  search: string;
  lng: string;
}

const Search = ({ lng, search, setSearch }: SearchProps) => {
  const { t } = useTranslation(lng, "client-page");
  const handleClear = () => {
    setSearch("");
  };
  return (
    <div className=" mt-2 h-8 md:h-10 flex items-center rounded-md border-0 px-2 shadow-sm ring-1 ring-inset ring-gray-300 gap-x-2">
      <Image src={SearchIcon} alt="search" className="w-4 h-4" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name="search"
        id="search"
        placeholder={t("search") as string}
        className="block w-full bg-transparent text-gray-900 placeholder:text-gray-400 text-xs md:text-sm sm:leading-6 outline-none"
      />
      <button onClick={handleClear}>
        <Image src={CrossIcon} alt="search" className="w-3 h-3" />
      </button>
    </div>
  );
};

export default Search;
