import Image from "next/image";
import React from "react";
import AppItem, { AppType } from "./AppItem";

interface AppsContainerProps {
  apps: AppType[];
  search: string;
}

const AppsContainer = ({ apps, search }: AppsContainerProps) => {
  const handleSearch = () => {
    if (search !== "") {
      const normalizedSearchTerm = search.toLowerCase();
      const filteredArray = apps.filter((item) => {
        const searchableProperty = item.title.toLowerCase();
        return searchableProperty.includes(normalizedSearchTerm);
      });
      return filteredArray;
    } else return apps;
  };
  return (
    <div className="h-[55vh] sm:h-[63vh] xl:h-[68vh] overflow-x-scroll flex flex-col">
      {handleSearch().map((app, index) => (
        <div className="hover:bg-white" key={app.id + app.title}>
          {index < apps.length && <hr />}
          <AppItem key={app.id} app={app} />
        </div>
      ))}
    </div>
  );
};

export default AppsContainer;
