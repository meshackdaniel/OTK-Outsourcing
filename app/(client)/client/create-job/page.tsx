// app/create-job/page.tsx
"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Link2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Plus,
  X,
  ChevronDown,
  GripVertical,
  Check,
  Info,
} from "lucide-react";

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
}: {
  stage: any;
  onRemove: () => void;
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
        defaultValue={stage.title}
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
  const [step, setStep] = useState(4);

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
        { id: "email", label: "Email", required: true },
        { id: "phone", label: "Phone Number", required: true },
        { id: "resume", label: "Resume/CV", required: true },
      ],
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [newSectionTitle, setNewSectionTitle] = useState("");

  // Hiring Stages
  const {
    fields: stages,
    replace,
    remove,
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

  // Tiptap Editor
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Placeholder.configure({
        placeholder: "Write a detailed job description...",
      }),
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline,
    ],
    content: watch("description") || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setValue("description", editor.getHTML(), { shouldValidate: true });
    },
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none min-h-96 p-6 focus:outline-none",
      },
    },
  });

  const setLink = () => {
    const url = window.prompt("Enter URL");
    if (!url) return;
    if (url === "") editor?.chain().focus().unsetLink().run();
    else editor?.chain().focus().setLink({ href: url }).run();
  };

  // Fixed navigation — this works 100%
  const next = async () => {
    let valid = true;

    if (step === 1) {
      valid = await trigger([
        "jobTitle",
        "jobType",
        "category",
        "location",
        "workplace",
        "skillLevel",
      ]);
    } else if (step === 2) {
      const html = editor?.getHTML() || "";
      setValue("description", html, { shouldValidate: true });
      valid = await trigger("description");
    }

    if (valid) {
      setStep((prev) => prev + 1);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Job Published:", { ...data, applicationForm: sections });
    reset();
    setSections([sections[0]]);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto px-6">
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
              title: "Preview",
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
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
          {step === 2 && editor && (
            <Card className="border-0 bg-white shadow-none">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl overflow-hidden">
                  <div className="bg-gray-100 p-3 flex flex-wrap gap-2 items-center rounded-xl">
                    <Menu as="div" className="relative">
                      <MenuButton className="flex items-center gap-1 px-3 py-2 rounded hover:bg-white text-sm font-medium">
                        {editor.isActive("heading", { level: 1 })
                          ? "Heading 1"
                          : editor.isActive("heading", { level: 2 })
                          ? "Heading 2"
                          : editor.isActive("heading", { level: 3 })
                          ? "Heading 3"
                          : "Paragraph"}
                        <ChevronDown className="w-4 h-4" />
                      </MenuButton>
                      <MenuItems className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black/5 z-10">
                        <MenuItem>
                          <button
                            onClick={() =>
                              editor.chain().focus().setParagraph().run()
                            }
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            Paragraph
                          </button>
                        </MenuItem>
                        {[1, 2, 3].map((l) => (
                          <MenuItem key={l}>
                            <button
                              onClick={() =>
                                editor
                                  .chain()
                                  .focus()
                                  .toggleHeading({ level: l as 1 | 2 | 3 })
                                  .run()
                              }
                              className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              Heading {l}
                            </button>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>

                    <div className="h-6 w-px bg-gray-300 mx-2" />

                    <Button
                      type="button"
                      size="icon"
                      variant={editor.isActive("bold") ? "default" : "ghost"}
                      onClick={() => editor.chain().focus().toggleBold().run()}
                    >
                      <Bold className="w-5 h-5" />
                    </Button>
                    <Button
                      type="button"
                      size="icon"
                      variant={editor.isActive("italic") ? "default" : "ghost"}
                      onClick={() =>
                        editor.chain().focus().toggleItalic().run()
                      }
                    >
                      <Italic className="w-5 h-5" />
                    </Button>
                    <Button
                      type="button"
                      size="icon"
                      variant={
                        editor.isActive("underline") ? "default" : "ghost"
                      }
                      onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                      }
                    >
                      <UnderlineIcon className="w-5 h-5" />
                    </Button>
                    <Button
                      type="button"
                      size="icon"
                      variant={editor.isActive("strike") ? "default" : "ghost"}
                      onClick={() =>
                        editor.chain().focus().toggleStrike().run()
                      }
                    >
                      <Strikethrough className="w-5 h-5" />
                    </Button>
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={setLink}
                    >
                      <Link2 className="w-5 h-5" />
                    </Button>
                  </div>
                  <EditorContent
                    className={cn(
                      "bg-gray-100 rounded-xl mt-2",
                      errors.description && "border border-red-600"
                    )}
                    editor={editor}
                  />
                  <div className="mb-4">
                    <span className="text-right block text-xs text-gray-600 mt-1">
                      {4000 - editor.getText().length} characters left
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
                              <Checkbox checked={field.required} disabled />
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
                  <DialogTrigger asChild>
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
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
                <Button
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

          {/* Step 5: Preview */}
          {step === 5 && (
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold">{watch("jobTitle")}</h1>
                  <p className="text-gray-600 mt-2">
                    {watch("location")} • {watch("workplace")} •{" "}
                    {watch("jobType")}
                  </p>
                </div>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: watch("description") || "",
                  }}
                />
                <div>
                  <h2 className="text-2xl font-bold mt-12 mb-4">
                    Hiring Process
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2 text-lg">
                    {watch("hiringStages").map((s) => (
                      <li key={s.id}>{s.title}</li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex gap-8">
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
                type="submit"
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                Publish Job
              </Button>
            )}
            <Button
              type="button"
              variant="outline"
              className={cn(
                "h-12 rounded-xl px-10 border-gray-300",
                step === 1 && "hidden"
              )}
              onClick={() => setStep((s) => Math.max(1, s - 1))}
            >
              Back
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
