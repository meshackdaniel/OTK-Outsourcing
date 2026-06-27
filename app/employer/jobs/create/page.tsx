// app/create-job/page.tsx
"use client";

import React, { useState, useRef } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Plus, X, ChevronDown, GripVertical, Check, Info, Pencil } from "lucide-react";

import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { id } from "zod/v4/locales";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// Zod Schema
// ─────────────────────────────────────────────────────────────────────────────
const schema = z.object({
  jobTitle: z.string().min(5, "Job title must be at least 5 characters"),
  jobType: z.string().min(1, "Please select a job type"),
  category: z.string().min(1, "Please select a category"),
  location: z.string().min(2, "Location is required"),
  workplace: z.string().min(1, "Please select workplace type"),
  skillLevel: z.string().min(1, "Please select skill level"),
  description: z
    .string()
    .min(50, "Description must be at least 50 characters"),
  hiringStages: z
    .array(z.object({ id: z.string(), title: z.string().min(3) }))
    .min(1),
});

type FormData = z.infer<typeof schema>;

// ─────────────────────────────────────────────────────────────────────────────
// Sortable Hiring Stage
// ─────────────────────────────────────────────────────────────────────────────
function SortableStage({
  stage,
  onRemove,
  onChangeTitle,
}: {
  stage: any;
  onRemove: () => void;
  onChangeTitle: (title: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: stage.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-3 bg-gray-100 rounded-lg p-2 hover:shadow-sm"
    >
      <div {...attributes} {...listeners} className="cursor-grab">
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>
      <Input
        value={stage.title}
        onChange={(e) => onChangeTitle(e.target.value)}
        className="flex-1 bg- border-0 focus:ring-0 focus-visible:ring-0 shadow-none"
        placeholder="Stage name"
      />
      <button
        type="button"
        onClick={onRemove}
        className="text-dark-blue hover:text-red-700"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
export default function CreateJobPage() {
  const [step, setStep] = useState(1);
  const stepRef = useRef(1);
  const setStepSafe = (n: number | ((prev: number) => number)) => {
    setStep((prev) => {
      const next = typeof n === "function" ? n(prev) : n;
      stepRef.current = next;
      return next;
    });
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      jobTitle: "",
      jobType: "",
      category: "",
      location: "",
      workplace: "",
      skillLevel: "",
      description: "",
      hiringStages: [
        { id: "1", title: "Application Review" },
        { id: "2", title: "Phone Screening" },
        { id: "3", title: "Technical Interview" },
      ],
    },
  });

  // Application Form Sections
  const [sections, setSections] = useState([
    {
      id: "personal",
      title: "Personal Information",
      fields: [
        {
          id: "firstName",
          label: "First Name",
          required: true,
          protected: true,
        },
        { id: "lastName", label: "Last Name", required: true, protected: true },
        { id: "resume", label: "Resume/CV", required: true },
      ],
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLinkPopoverOpen, setIsLinkPopoverOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [linkSelection, setLinkSelection] = useState<any>(null);
  const [, forceUpdate] = useState(0);
  const [newSectionTitle, setNewSectionTitle] = useState("");

  // Hiring Stages
  const {
    fields: stages,
    replace,
    remove,
    update,
  } = useFieldArray({ control, name: "hiringStages" });
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIdx = stages.findIndex((s) => s.id === active.id);
      const newIdx = stages.findIndex((s) => s.id === over.id);
      replace(arrayMove(stages, oldIdx, newIdx));
    }
  };

  
  const next = async () => {
    let valid = true;

    if (stepRef.current === 1) {
      valid = await trigger([
        "jobTitle",
        "jobType",
        "category",
        "location",
        "workplace",
        "skillLevel",
      ]);
    } else if (stepRef.current === 2) {
      valid = await trigger("description");
    }

    if (valid) {
      setStepSafe((prev) => prev + 1);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Job Published:", { ...data, applicationForm: sections });
    reset();
    setSections([sections[0]]);
    setStepSafe(1);
  };

  return (
    <DashboardLayout type="employer">
      <div className="py-6">
        <div className="max-w-[1000px] mx-auto px-6">
          {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12">
          {[
            {
              id: 1,
              title: "Job Details",
            },
            {
              id: 2,
              title: "Job Description",
            },
            {
              id: 3,
              title: "Application Form",
            },
            {
              id: 4,
              title: "Hiring Stages",
            },
            {
              id: 5,
              title: "Review",
            },
          ].map((i) => (
            <div key={i.id} className="flex items-center flex-1">
              <div
                className={`w-5 h-5 rounded-full flex text-xs items-center p-1 justify-center text- font-semibold ${
                  step >= i.id
                    ? "bg-dark-blue text-white font-bold"
                    : "bg-gray-100"
                }`}
              >
                {step > i.id ? (
                  <Check className="text-white font-bold" />
                ) : (
                  i.id
                )}
              </div>
              <p
                className={cn(
                  "ms-1.5 text-xs",
                  step >= i.id && "font-bold text-dark-blue"
                )}
              >
                {i.title}
              </p>
              {i.id < 5 && <div className={"flex-1 h-0.5 mx-4 bg-gray-300"} />}
            </div>
          ))}
        </div>

        <div className="space-y-12">
          {/* Step 1: Job Details */}
          {step === 1 && (
            <Card className="bg-white border-0 shadow-none">
              <CardHeader>
                <CardTitle className="font-bold">Job Details</CardTitle>
              </CardHeader>
              <CardContent className="">
                <div className=" flex w-full">
                  <Label className="basis-1/6">Job Title</Label>
                  <Input
                    className={cn(
                      "basis-5/6 h-11 bg-gray-50 py-5 rounded-xl",
                      errors.jobTitle && "border-red-600"
                    )}
                    {...register("jobTitle")}
                    placeholder="Senior React Developer"
                  />
                </div>
                <div className="flex mt-2">
                  <p className="basis-1/6"></p>
                  {errors.jobTitle && (
                    <p className="text-sm basis-5/6 text-red-600">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2 flex mt-3">
                  <Label className="basis-1/6">Job Type</Label>
                  <Select
                    onValueChange={(v) => {
                      setValue("jobType", v);
                      trigger("jobType");
                    }}
                  >
                    <SelectTrigger
                      className={cn(
                        "basis-5/6 bg-gray-50 py-5 rounded-xl",
                        errors.jobType && "border-red-600"
                      )}
                    >
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex">
                  <p className="basis-1/6"></p>
                  {errors.jobType && (
                    <p className="text-sm basis-5/6 text-red-600">
                      {errors.jobType.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2 flex mt-3">
                  <Label className="basis-1/6">Category</Label>
                  <Select
                    onValueChange={(v) => {
                      setValue("category", v);
                      trigger("category");
                    }}
                  >
                    <SelectTrigger
                      className={cn(
                        "basis-5/6 bg-gray-50 py-5 rounded-xl",
                        errors.category && "border-red-600"
                      )}
                    >
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex">
                  <p className="basis-1/6"></p>
                  {errors.category && (
                    <p className="text-sm basis-5/6 text-red-600">
                      {errors.category.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2 flex mt-3">
                  <Label className="basis-1/6">Location</Label>
                  <Input
                    className={cn(
                      "basis-5/6 h-11 bg-gray-50 py-5 rounded-xl",
                      errors.location && "border-red-600"
                    )}
                    {...register("location")}
                    placeholder="Lagos, Nigeria"
                  />
                </div>
                <div className="flex m-1">
                  <p className="basis-1/6"></p>
                  {errors.location && (
                    <p className="text-sm basis-5/6 text-red-600">
                      {errors.location.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2 flex mt-3">
                  <Label className="basis-1/6">Workplace</Label>
                  <Select
                    onValueChange={(v) => {
                      setValue("workplace", v);
                      trigger("workplace");
                    }}
                  >
                    <SelectTrigger
                      className={cn(
                        "basis-5/6 bg-gray-50 py-5 rounded-xl",
                        errors.workplace && "border-red-600"
                      )}
                    >
                      <SelectValue placeholder="Remote / On-site" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="on-site">On-site</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex">
                  <p className="basis-1/6"></p>
                  {errors.workplace && (
                    <p className="text-sm basis-5/6 text-red-600">
                      {errors.workplace.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2 flex mt-3">
                  <Label className="basis-1/6">Skill Level</Label>
                  <Select
                    onValueChange={(v) => {
                      setValue("skillLevel", v);
                      trigger("skillLevel");
                    }}
                  >
                    <SelectTrigger
                      className={cn(
                        "basis-5/6 bg-gray-50 py-5 rounded-xl",
                        errors.skillLevel && "border-red-600"
                      )}
                    >
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior</SelectItem>
                      <SelectItem value="mid">Mid-level</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex">
                  <p className="basis-1/6"></p>
                  {errors.skillLevel && (
                    <p className="text-sm basis-5/6 text-red-600">
                      {errors.skillLevel.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Job Description */}
          {step === 2 && (
            <Card className="border-0 bg-white shadow-none">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl">
                  <ReactQuill 
                    theme="snow"
                    value={watch("description") || ""}
                    onChange={(val) => {
                      setValue("description", val, { shouldValidate: true });
                    }}
                    className={cn(
                      "bg-white rounded-xl mt-2 min-h-96",
                      errors.description && "border border-red-600"
                    )}
                    modules={{
                      toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['link'],
                        ['clean']
                      ],
                    }}
                  />
                  <div className="mb-4">
                    <span className="text-right block text-xs text-gray-600 mt-1">
                      {4000 - ((watch("description") || "").replace(/<[^>]*>?/gm, "").length)} characters left
                    </span>
                    {errors.description && (
                      <span className="text-red-600 flex text-xs gap-1 items-center">
                        <Info className="w-4 h-4" />{" "}
                        <span>{errors.description.message}</span>
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Application Form */}
          {step === 3 && (
            <Card className="shadow-none border-0 bg-white">
              <CardHeader>
                <CardTitle>Personal Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className=" rounded-xl p-6 bg-gray-50/50"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">{section.title}</h3>
                      {section.id !== "personal" && (
                        <button
                          type="button"
                          onClick={() =>
                            setSections((s) =>
                              s.filter((x) => x.id !== section.id)
                            )
                          }
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      {section.fields.map((field) => (
                        <div
                          key={field.id}
                          className="flex items-center justify-between bg-white p-4 rounded-lg border"
                        >
                          <span className="font-medium">{field.label}</span>
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <Checkbox 
                                checked={field.required} 
                                disabled={field.protected}
                                onCheckedChange={(checked) => {
                                  setSections((s) =>
                                    s.map((sec) =>
                                      sec.id === section.id
                                        ? {
                                            ...sec,
                                            fields: sec.fields.map((f) =>
                                              f.id === field.id
                                                ? { ...f, required: !!checked }
                                                : f
                                            ),
                                          }
                                        : sec
                                    )
                                  );
                                }}
                              />
                              <span className="text-sm text-gray-600">
                                Required
                              </span>
                            </div>
                            {!field.protected && (
                              <button
                                type="button"
                                onClick={() =>
                                  setSections((s) =>
                                    s.map((sec) =>
                                      sec.id === section.id
                                        ? {
                                            ...sec,
                                            fields: sec.fields.filter(
                                              (f) => f.id !== field.id
                                            ),
                                          }
                                        : sec
                                    )
                                  )
                                }
                                className="text-red-600 hover:text-red-700"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Input
                      className="h-12!"
                        placeholder="Add new field (e.g. Portfolio URL)"
                        onKeyDown={(e) => {
                          if (
                            e.key === "Enter" &&
                            e.currentTarget.value.trim()
                          ) {
                            setSections((s) =>
                              s.map((sec) =>
                                sec.id === section.id
                                  ? {
                                      ...sec,
                                      fields: [
                                        ...sec.fields,
                                        {
                                          id: Date.now().toString(),
                                          label: e.currentTarget.value.trim(),
                                          required: false,
                                        },
                                      ],
                                    }
                                  : sec
                              )
                            );
                            e.currentTarget.value = "";
                          }
                        }}
                      />
                      <Button
                        type="button"
                        className="h-12"
                        variant="outline"
                        onClick={(e) => {
                          const input = e.currentTarget
                            .previousElementSibling as HTMLInputElement;
                          if (input?.value.trim()) {
                            setSections((s) =>
                              s.map((sec) =>
                                sec.id === section.id
                                  ? {
                                      ...sec,
                                      fields: [
                                        ...sec.fields,
                                        {
                                          id: Date.now().toString(),
                                          label: input.value.trim(),
                                          required: false,
                                        },
                                      ],
                                    }
                                  : sec
                              )
                            );
                            input.value = "";
                          }
                        }}
                      >
                        <Plus className="w-4 h-4 mr-2" /> Add Field
                      </Button>
                    </div>
                  </div>
                ))}

                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger className="h-12" asChild>
                    <Button variant="outline" className="w-full">
                      <Plus className="w-4 h-4 mr-2" /> Add New Section
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>New Section</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <Input
                        placeholder="Section title"
                        value={newSectionTitle}
                        onChange={(e) => setNewSectionTitle(e.target.value)}
                      />
                      <Button
                        className="w-full"
                        onClick={() => {
                          if (newSectionTitle.trim()) {
                            setSections((s) => [
                              ...s,
                              {
                                id: Date.now().toString(),
                                title: newSectionTitle.trim(),
                                fields: [],
                              },
                            ]);
                            setNewSectionTitle("");
                            setDialogOpen(false);
                          }
                        }}
                      >
                        Create Section
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Hiring Stages */}
          {step === 4 && (
            <Card className="shadow-none border-0 bg-white">
              <CardHeader>
                <CardTitle>Hiring Stages</CardTitle>
              </CardHeader>
              <CardContent>
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={stages.map((s) => s.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="space-y-4">
                      {stages.map((stage, i) => (
                        <SortableStage
                          key={stage.id}
                          stage={stage}
                          onRemove={() => remove(i)}
                          onChangeTitle={(title) => update(i, { ...stage, title })}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
                <Button
                  type="button"
                  className="mt-6"
                  variant="outline"
                  onClick={() =>
                    replace([
                      ...stages,
                      { id: Date.now().toString(), title: "New Stage" },
                    ])
                  }
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Stage
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Review */}
          {step === 5 && (
            <div className="space-y-0 bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {/* Job Details */}
              <div className="px-8 py-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-900">Job Details</h2>
                  <button type="button" onClick={() => setStepSafe(1)} className="text-sm text-blue-600 flex items-center gap-1 hover:text-blue-800">
                    Edit <Pencil className="w-3.5 h-3.5 text-dark-blue" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[watch("jobTitle"), watch("jobType"), watch("location"), watch("workplace"), watch("skillLevel")].filter(Boolean).map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job Description */}
              <div className="px-8 py-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-900">Job Description</h2>
                  <button type="button" onClick={() => setStepSafe(2)} className="text-sm text-blue-600 flex items-center gap-1 hover:text-blue-800">
                    Edit <Pencil className="w-3.5 h-3.5 text-dark-blue" />
                  </button>
                </div>
                <div
                  className="prose prose-sm max-w-none border border-gray-200 rounded-xl p-5 bg-white text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: watch("description") || "" }}
                />
              </div>

              {/* Hiring Stages */}
              <div className="px-8 py-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-900">Hiring Stages</h2>
                  <button type="button" onClick={() => setStepSafe(4)} className="text-sm text-blue-600 flex items-center gap-1 hover:text-blue-800">
                    Edit <Pencil className="w-3.5 h-3.5 text-dark-blue" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {watch("hiringStages").map((s, i) => (
                    <span key={s.id} className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white">
                      {i + 1}. {s.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div className="px-8 py-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-base font-semibold text-gray-900">Application Form</h2>
                  <button type="button" onClick={() => setStepSafe(3)} className="text-sm text-blue-600 flex items-center gap-1 hover:text-blue-800">
                    Edit <Pencil className="w-3.5 h-3.5 text-dark-blue" />
                  </button>
                </div>
                <div className="space-y-5">
                  {sections.map((section) => (
                    <div key={section.id}>
                      <p className="text-sm font-medium text-gray-500 mb-2">{section.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {section.fields.map((field) => (
                          <span key={field.id} className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white flex items-center gap-1">
                            {field.label}
                            {field.required && <span className="text-red-500 font-bold">*</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-end items-center gap-4">
            <Button
              type="button"
              variant="outline"
              className={cn(
                "h-12 rounded-xl px-10 border-gray-300",
                step === 1 && "invisible"
              )}
              onClick={() => setStepSafe((s) => Math.max(1, s - 1))}
            >
              Back
            </Button>
            {step < 5 ? (
              <Button
                className="bg-dark-blue h-12 rounded-xl px-10"
                type="button"
                onClick={next}
                size="lg"
              >
                Continue
              </Button>
            ) : (
              <Button
                type="button"
                size="lg"
                className="bg-[#f2c060] hover:bg-[#e0b050] text-[#222364] font-semibold h-12 rounded-xl px-10"
                onClick={() => handleSubmit(onSubmit)()}
              >
                Publish Job
              </Button>
            )}
          </div>
        </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
