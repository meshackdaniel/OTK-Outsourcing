// lib/schema.ts
import { z } from "zod";

export const createJobSchema = z.object({
  jobTitle: z.string().min(5, "Job title must be at least 5 characters"),
  location: z.string().min(2, "Location is required"),
  description: z
    .string()
    .min(100, "Description must be at least 100 characters"),
  hiringSteps: z
    .array(z.object({ title: z.string().min(3) }))
    .min(3, "At least 3 hiring steps required"),
});
