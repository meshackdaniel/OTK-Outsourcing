// components/ServiceCardSelector.tsx
"use client";

import { Check } from "lucide-react";
import { useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  color: string; // tailwind color (e.g., "blue", "green", "purple")
};

const services: Service[] = [
  {
    id: "software",
    title: "Software Development",
    description:
      "Build web, mobile, and enterprise applications with expert teams.",
    color: "blue",
  },
  {
    id: "support",
    title: "Customer Support",
    description: "24/7 multilingual support for your customers worldwide.",
    color: "green",
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    description:
      "Outsource hiring, onboarding, and payroll management with ease.",
    color: "purple",
  },
];

export default function ServiceCardSelector() {
  const [selectedId, setSelectedId] = useState<string>("software");

  const colorClasses = {
    blue: "border-blue-500 bg-blue-50 ring-blue-500",
    green: "border-green-500 bg-green-50 ring-green-500",
    purple: "border-purple-500 bg-purple-50 ring-purple-500",
  };

  return (
    <div className="grid gap-4">
      {services.map((service) => {
        const isSelected = selectedId === service.id;
        const colors = colorClasses[service.color as keyof typeof colorClasses];

        return (
          <button
            key={service.id}
            onClick={() => setSelectedId(service.id)}
            className={`
              relative w-full text-left rounded-xl border-2 p-6 transition-all duration-200
              ${
                isSelected
                  ? `${colors} shadow-lg`
                  : "border-gray-200 bg-white hover:border-gray-300"
              }
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isSelected ? "" : "focus-visible:ring-gray-400"
              }
            `}
            aria-pressed={isSelected}
          >
            {/* Custom Radio Circle */}
            <div
              className={`
                absolute left-6 top-6 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all
                ${
                  isSelected
                    ? `${colors.split(" ")[0]} bg-current`
                    : "border-gray-300"
                }
              `}
            >
              <Check
                className={`h-4 w-4 text-white transition-transform duration-200 ${
                  isSelected ? "scale-100" : "scale-0"
                }`}
              />
            </div>

            {/* Content */}
            <div className="pl-12">
              <h3
                className={`font-semibold text-lg ${
                  isSelected ? "text-gray-900" : "text-gray-800"
                }`}
              >
                {service.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
