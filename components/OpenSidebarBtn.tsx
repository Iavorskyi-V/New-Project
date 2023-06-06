"use client";
import React, { useState } from "react";
import PullRight from "../public/icons/pull-right.svg";
import PullLeft from "../public/icons/pull-left.svg";
import Image from "next/image";
interface OpenSidebarBtn {
  active: boolean;
  setActive: (active: boolean) => void;
}
const OpenSidebarBtn = ({ active, setActive }: OpenSidebarBtn) => {
  return (
    <button
      className={`p-1 rounded-xl bg-gradient-to-r from-gray-300 sm:hidden
      absolute ${active ? "right-11 top-9" : " top-0 -right-11"}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      <Image
        src={active ? PullLeft : PullRight}
        className="w-4 h-4"
        alt={active ? "pull left" : "pull right"}
      />
    </button>
  );
};

export default OpenSidebarBtn;
