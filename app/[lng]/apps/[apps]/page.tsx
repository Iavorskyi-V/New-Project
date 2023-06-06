import React from "react";
import { APPS } from "@/public/Data";
import { AppType } from "@/components/AppItem";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import Tabs, { TabType } from "@/components/Tabs";
import AppInfo from "@/components/AppInfo";

const App = async ({ params: { lng, apps } }: { params: any }) => {
  const { t } = await useTranslation(lng);
  const tabs: TabType[] = [
    {
      id: "1",
      name: t("plans"),
      href: "#",
      current: true,
    },
    {
      id: "2",
      name: t("description"),
      href: "#",
      current: false,
    },
  ];
  const data = APPS.find((item: AppType) => item.id === apps);
  return (
    <div className="pt-10 lg:pt-20 flex flex-col">
      <div className="flex gap-5 lg:gap-7 xl:gap-14 ">
        <div className="h-[64px] min-w-[64px] lg:h-[120px] lg:min-w-[120px] xl:h-[184px] xl:min-w-[184px] bg-gradient-to-r from-[#F2F2F2] to-[#ECECEC] rounded-md">
          {data?.icon && (
            <Image
              src={data?.icon}
              className="h-full w-full"
              alt={data.title}
            />
          )}
        </div>
        <div className="flex flex-col gap-y-1 md:gap-y-3 xl:gap-y-7">
          <h4 className="font-semibold text-base md:text-xl lg-text:2xl xl:text-3xl">
            {data?.title}
          </h4>
          <p className="font-normal text-sm md:text-base lg:text-lg text-gray500">
            {data?.description}
          </p>
          <div className="flex flex-col gap-y-1">
            <p className="font-semibold text-xs md:text-sm lg:text-base">
              {t("published_by")}
            </p>
            <p className="text-gray500 text-xs md:text-sm lg:text-base	">
              {data?.author}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-5 justify-center mt-2 lg:mt-0 lg:justify-end mb-12">
        <button
          className="text-black text-xs md:text-sm py-2 px-3 bg-gray100 font-medium rounded-lg 
        hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {t("cancel_subscription")}
        </button>
        <button className="text-white text-xs md:text-sm py-2 px-3 bg-green-500 font-medium	rounded-lg hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {t("open_app")}
        </button>
      </div>
      <AppInfo tabsData={tabs} lng={lng} />
    </div>
  );
};

export default App;
