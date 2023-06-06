"use client";
import React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "@/app/i18n/client";
const frequencies = [
  { value: "monthly", label: "monthly", priceSuffix: "/month" },
  { value: "annually", label: "annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$15", annually: "$144" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: true,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$30", annually: "$288" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: false,
  },
];
interface AppPricingProps {
  lng: string;
}
const AppPricing = ({ lng }: AppPricingProps) => {
  const { t } = useTranslation(lng, "client-page");

  const [frequency, setFrequency] = useState(frequencies[0]);
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center my-7">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">
              {t("payment_frequency")}
            </RadioGroup.Label>
            {frequencies.map((option, index) => (
              <RadioGroup.Option
                key={option.value}
                defaultChecked={index === 0}
                value={option}
                className={({ checked }) =>
                  `${
                    checked ? "bg-purple-gradient text-white" : "text-gray-500"
                  }
                    cursor-pointer rounded-full px-2.5 py-1`
                }
              >
                <span>{t(option.label)}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto px-0.5 pb-0.5 grid max-w-md grid-cols-1 gap-7 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`${
                tier.mostPopular ? "shadow-priceBorder" : "ring-1 ring-gray-200"
              }
                rounded-3xl p-7 xl:p-10`}
            >
              <div className="flex items-center justify-between gap-x-3">
                <h3
                  id={tier.id}
                  className="text-gray-900
                    text-base sm:text-lg font-semibold leading-8"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-[#4F46E5] bg-opacity-10 px-2.5 py-1 text-xxs sm:text-xs font-semibold leading-5">
                    <span className="text-lightPurple-gradient-static">
                      {t("most_popular")}
                    </span>
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-xs sm:text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
                  {(tier.price as { [key: string]: string })[frequency.value]}
                </span>
                <span className="text-xs sm:text-sm font-semibold leading-6 text-gray-600">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={`
                  ${
                    tier.mostPopular
                      ? "bg-green-500 text-white shadow-sm hover:bg-indigo-500"
                      : "text-blue-gradient-static ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                  }
                  mt-6 block rounded-md py-2 px-3 text-center text-xs sm:text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {t("buy_plan")}
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-xs sm:text-sm leading-6 text-gray-600 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppPricing;
