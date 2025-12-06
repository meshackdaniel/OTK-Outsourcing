// components/ProgressBar.tsx
import { useCreateJob } from "@/lib/useCreateJobStore";
import { Check } from "lucide-react";

const steps = [
  "Job Details",
  "Description",
  "Application Form",
  "Hiring Process",
  "Preview",
];

export default function ProgressBar() {
  const { step } = useCreateJob();

  return (
    <div>
      <div className="max-w-5xl mx-auto py-5">
        <div className="flex items-center justify-between">
          {steps.map((label, i) => (
            <div key={i} className="flex items-center flex-1">
              <div
                className={`flex items-center justify-center w-6 h-6 p-1 rounded-full text-xs font-medium transition-all
                  ${step > i + 1 ? "bg-dark-blue text-white" : ""}
                  ${step === i + 1 ? "bg-dark-blue text-white" : ""}
                  ${step < i + 1 ? "bg-gray-300 text-gray-600" : ""}
                `}
              >
                {step > i + 1 ? <Check /> : i + 1}
              </div>
              <div className="ml-3 text-xs font-medium hidden sm:block">
                {label}
              </div>
              {i < steps.length - 1 && (
                <div
                  className="flex-1 h-0.5 mx-4 transition-all
                    bg-gray-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
