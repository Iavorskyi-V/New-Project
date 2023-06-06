"use client";
import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useTranslation } from "@/app/i18n/client";

interface SwitcherProps {
  lng: string;
}

const Switcher = ({ lng }: SwitcherProps) => {
  const [enabled, setEnabled] = useState(false);
  const { t } = useTranslation(lng, "client-page");

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-indigo-600" : "bg-gray-200"
        } relative inline-flex h-5 md:h-6 w-10 md:w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-4 md:h-5 w-4 md:w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3 text-xs md:text-sm">
        <span className="font-medium text-gray-900 capitalize">
          {t("subscribed_apps")}
        </span>
      </Switch.Label>
    </Switch.Group>
  );
};

export default Switcher;
