import React from "react";

interface AppDescriptionProps {
  descriptions: string[];
}

const AppDescription = ({ descriptions }: AppDescriptionProps) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 shadow mt-6">
      <div className="px-2 md:px-4 py-5 sm:p-6 w-[80%] md:w-[70%] mx-auto flex flex-col gap-y-14 text-sm md:text-base font-normal">
        {descriptions.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>
    </div>
  );
};

export default AppDescription;
