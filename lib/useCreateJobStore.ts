// lib/useCreateJobStore.ts
import { create } from "zustand";
import { createJobSchema } from "./schema";
import {z} from "zod";

type State = {
  step: number;
  data: {
    jobTitle: string;
    location: string;
    description: string;
    hiringSteps: { id: string; title: string }[];
  };
  errors: Record<string, string>;
  setStep: (step: number) => void;
  updateData: (updates: Partial<State["data"]>) => void;
  validateCurrentStep: () => boolean;
};

export const useCreateJob = create<State>((set, get) => ({
  step: 1,
  data: {
    jobTitle: "",
    location: "",
    description: "",
    hiringSteps: [
      { id: "1", title: "Application Review" },
      { id: "2", title: "Phone Screening" },
      { id: "3", title: "Technical Interview" },
    ],
  },
  errors: {},

  setStep: (step) => set({ step }),

  updateData: (updates) =>
    set((state) => ({
      data: { ...state.data, ...updates },
    })),

  validateCurrentStep: () => {
    const { step, data } = get();
    const errors: Record<string, string> = {};

    try {
      if (step === 1) {
        createJobSchema.shape.jobTitle.parse(data.jobTitle);
        createJobSchema.shape.location.parse(data.location);
      }
      if (step === 2) {
        createJobSchema.shape.description.parse(data.description);
      }
      if (step === 4) {
        createJobSchema.shape.hiringSteps.parse(data.hiringSteps);
      }

      set({ errors: {} });
      return true;
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        err.issues.forEach((issue) => {
          const key = issue.path[0] as string;
          if (key) errors[key] = issue.message;
        });
      }
      set({ errors });
      return false;
    }
  },
}));
