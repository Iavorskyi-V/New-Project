import Image from "next/image";
import Link from "next/link";
import React from "react";

export type AppType = {
  id: string;
  icon: any;
  title: string;
  description: string;
  author: string;
};

interface AppItemProps {
  app: AppType;
}

const AppItem = ({ app }: AppItemProps) => {
  return (
    <Link
      href={`/apps/${app.id}`}
      className="flex gap-x-2 px-3 items-center py-4 text-gradient"
    >
      <div className="bg-gradient-to-r from-[#F2F2F2] to-[#ECECEC] rounded-md">
        <Image
          src={app.icon}
          className="h-[45px] max-w-[45px] xl:h-[65px] xl:min-w-[65px]"
          alt={app.title}
        />
      </div>
      <div className="">
        <h4 className="font-semibold text-sm xl:text-base">{app.title}</h4>
        <p className="text-xs font-normal w-10/12 xl:w-9/12">
          {app.description}
        </p>
      </div>
    </Link>
  );
};

export default AppItem;
