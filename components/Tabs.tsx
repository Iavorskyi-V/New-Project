"use client";
import { useTranslation } from "@/app/i18n/client";
import React, { useState } from "react";

export type TabType = {
  id: string;
  name: string;
  href: string;
  current: boolean;
};

interface TabsProps {
  tabsData: TabType[];
  setTabsData: (tabs: TabType[]) => void;
  lng: string;
}

const Tabs = ({ tabsData, setTabsData, lng }: TabsProps) => {
  const { t } = useTranslation(lng, "client-page");
  const handleTab = (tabId: string) => {
    const updatedTabs = tabsData.map((tab) => ({
      ...tab,
      current: tab.id === tabId,
    }));
    setTabsData(updatedTabs);
  };
  const handleTabChoose = (event: any) => {
    const chosenTab = tabsData.find((tab) => tab.name === event.target.value);
    chosenTab && handleTab(chosenTab.id);
  };
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          {t("select_a_tab")}
        </label>
        <select
          id="tabs"
          name="tabs"
          onChange={handleTabChoose}
          className="text-xs sm:text-base block w-full p-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabsData.find((tab) => tab.current)?.name}
        >
          {tabsData.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {tabsData.map((tab, tabIdx) => (
            <a
              key={tab.name}
              onClick={() => handleTab(tab.id)}
              href={tab.href}
              className={`${
                tab.current
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }
                    ${tabIdx === 0 ? "rounded-l-lg" : ""}
                    ${tab.current ? "bg-white" : "bg-transparent"}
                    ${tabIdx === tabsData.length - 1 ? "rounded-r-lg" : ""}
                    group relative min-w-0 flex-1 overflow-hidden  py-4 px-4 text-center text-xs md:text-sm font-medium hover:bg-gray-50 focus:z-10`}
              aria-current={tab.current ? "page" : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={`${tab.current ? "bg-indigo-500" : "bg-transparent"}
                  absolute inset-x-0 bottom-0 h-0.5`}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
