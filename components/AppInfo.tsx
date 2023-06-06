"use client";
import React, { useState } from "react";
import Tabs, { TabType } from "./Tabs";
import AppPricing from "./AppPricing";
import AppDescription from "./AppDescription";

interface AppInfoType {
  tabsData: TabType[];
  lng: string;
}

const AppInfo = ({ tabsData, lng }: AppInfoType) => {
  const [tabs, setTabs] = useState<TabType[]>(tabsData);
  const descriptions = [
    "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
    "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.",
    "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.",
  ];
  return (
    <div>
      <Tabs tabsData={tabs} setTabsData={setTabs} lng={lng} />

      {tabs.find((tab) => tab.current)?.name === tabs[0].name && (
        <AppPricing lng={lng} />
      )}
      {tabs.find((tab) => tab.current)?.name === tabs[1].name && (
        <AppDescription descriptions={descriptions} />
      )}
    </div>
  );
};

export default AppInfo;
