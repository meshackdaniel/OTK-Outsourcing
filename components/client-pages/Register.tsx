"use client";

import { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  LoaderCircle,
  ChevronDown,
  Check,
} from "lucide-react";
import Cookies from "js-cookie";
import Image from "next/image";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import ArrowRight from "../ui/icons/ArrowRight";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

// ---------------------------------------------------------------------
// Schemas
// ---------------------------------------------------------------------
const step1Schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain uppercase")
    .regex(/[a-z]/, "Must contain lowercase")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[^A-Za-z0-9]/, "Must contain a special character"),
});

const step2Schema = z.object({
  code: z
    .string("Invalid code")
    .length(6, "Code must be 6 digits")
    .regex(/^\d+$/, "Only numbers allowed"),
});

const step3Schema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  industry: z.string("Please select your industry"),
  companySize: z.string("Please select company size"),
  location: z.string().min(4, "Please select location"),
  service: z.string("Please select a service"),
  jobCategory: z.string("Please select job category"),
  skillLevel: z.string("Please select skill level"),
  agreement: z.boolean(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;

type Role = "looking" | "hiring" | null;

// ---------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------
export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [savedFullName, setSavedFullName] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [companyDetailsStep, setCompanyDetailsStep] = useState(1);

  const setRole = (role: string) => {
    // Cookies.set("role", role, { path: "/", expires: 1 }); // 1 day
    setShowSignUp(true);
  };

  // Step 1 Form
  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  });

  useEffect(() => {
    document.getElementById("fullName")?.focus();
  }, []);

  // Step 2 Form
  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
  });

  // Step 3 Form
  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    mode: "onChange",
  });

  // -----------------------------------------------------------------
  // Step 1 Submit → Send OTP
  // -----------------------------------------------------------------
  const onStep1Submit = async (data: Step1Data) => {
    setIsLoading(true);
    setStep(2);
    setIsLoading(false);

    await new Promise((r) => setTimeout(r, 1500)); // Simulate API
    // fetch("/api/sendOtp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application.json",
    //   },
    //   body: JSON.stringify({ ...data }),
    // }).then(async (res) => {
    //   const result = await res.json();
    //   if (!res.ok) {
    //     if (result.message === "User already exists") {
    //       setIsLoading(false);
    //       step1Form.setError("email", { message: "User already exists" });
    //       throw new Error("User already exist");
    //     } else {
    //         setIsLoading(false);
    // toast.error("Something went wrong");
    //         throw new Error("User already exist");
    //     }
    //   }
    //   setSavedEmail(data.email);
    //   setSavedPassword(data.password);
    //   setSavedFullName(data.fullName);
    //   setStep(2);
    //   setIsLoading(false);
    // });
  };

  // -----------------------------------------------------------------
  // Step 2 Submit → Complete Registration
  // -----------------------------------------------------------------
  const onStep2Submit = async (data: Step2Data) => {
    setIsLoading(true);
    setStep(3);
    setIsLoading(false);

    // fetch("/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application.json",
    //   },
    //   body: JSON.stringify({
    //     ...data,
    //     email: savedEmail,
    //     password: savedPassword,
    //     fullName: savedFullName,
    //   }),
    // }).then(async (res) => {
    //   const result = await res.json();
    //   if (result.message === "Invalid verification code") {
    //     step2Form.setError("code", { message: "Invalid verification code" });
    //     setIsLoading(false);
    //     throw new Error("Registration failed");
    //   }
    //   if (!res.ok) {
    //     setIsLoading(false);
    //     throw new Error("Registration failed");
    //   }
    //   router.push("/");
    //   router.refresh();
    //   setStep(2);
    //   setIsLoading(false);
    // });
  };

  // ---------------------------------------------------------------------
  // OTP Component
  // ---------------------------------------------------------------------
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newValues = [...values];
    const { setValue } = step2Form;
    newValues[index] = value;
    setValues(newValues);

    // Auto-focus next
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // Submit when complete
    if (newValues.every((v) => v !== "")) {
      step1Form.handleSubmit(onStep1Submit);
      setValue("code", newValues.join(""));
      onStep2Submit({ code: newValues.join("") });
      // onComplete(newValues.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const { setValue } = step2Form;
    const paste = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (paste.length === 6) {
      setValues(paste.split(""));
      inputsRef.current[5]?.focus();
      setValue("code", paste);
      onStep2Submit({ code: paste });
    }
  };

  // ---------------------------------------------------------------------
  // Company details
  // ---------------------------------------------------------------------
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

  const [selectedId, setSelectedId] = useState<string>("");

  const nextCompanyDetailsStep = async () => {
    let fields: any[] = [];
    if (companyDetailsStep === 1)
      fields = ["companyName", "industry", "companySize", "location"];
    if (companyDetailsStep === 2) fields = ["service"];
    if (companyDetailsStep === 3) fields = ["jobCategory", "skillLevel"];
    if (companyDetailsStep === 4) fields = ["agreement"];
    const valid = fields.length === 0 || (await step3Form.trigger(fields));
    if (valid) setCompanyDetailsStep((p) => p + 1);
  };

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating Orbs */}
      {showSignUp && (
        <>
          <div className="relative z-10 w-full">
            {/* Step 1: Main Form */}
            {step === 1 && (
              <>
                <Image
                  src={"/logo.jpg"}
                  height={300}
                  width={350}
                  alt="logo"
                  className="w-24 mx-auto mt-5"
                />
                <Card className="max-w-lg mx-auto bg-white mt-5 p-8 border-0 shadow-none block">
                  <div className="relative">
                    {/* Title */}
                    <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5">
                      Create Account
                    </h1>
                    <Button
                      variant="outline"
                      className="flex items-center rounded-2xl mx-auto w-full gap-2 h-14 mb-"
                    >
                      <Image
                        src="/social-icons/google.png"
                        alt="Google"
                        width={20}
                        height={20}
                      />
                      Continue with Google
                    </Button>
                    <p className="text-center font-semibold text-gray-500 text-xl my-3">
                      OR
                    </p>
                    <form
                      key="step1"
                      onSubmit={step1Form.handleSubmit(onStep1Submit)}
                      className="space-y-6"
                    >
                      {/* Email */}
                      <div>
                        <div className="relative mt-2">
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className={cn(
                              "pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                              step1Form.formState.errors.email &&
                                "border-red-500 focus-visible:ring-red-500"
                            )}
                            {...step1Form.register("email")}
                            disabled={isLoading}
                          />
                        </div>
                        {step1Form.formState.errors.email && (
                          <p className="text-sm text-red-500 mt-1">
                            {step1Form.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                      {/* Full Name */}
                      <div>
                        <div className="relative mt-2">
                          <Input
                            id="fullName"
                            placeholder="Full Name"
                            className={cn(
                              "pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                              step1Form.formState.errors.fullName &&
                                "border-red-500 focus-visible:ring-red-500"
                            )}
                            {...step1Form.register("fullName")}
                            disabled={isLoading}
                          />
                        </div>
                        {step1Form.formState.errors.fullName && (
                          <p className="text-sm text-red-500 mt-1">
                            {step1Form.formState.errors.fullName.message}
                          </p>
                        )}
                      </div>

                      {/* Password */}
                      <div>
                        <div className="relative mt-2">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Choose your password"
                            className={cn(
                              "pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                              step1Form.formState.errors.password &&
                                "border-red-500 focus-visible:ring-red-500"
                            )}
                            {...step1Form.register("password")}
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                        {step1Form.formState.errors.password && (
                          <p className="text-sm text-red-500 mt-1">
                            {step1Form.formState.errors.password.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue"
                        disabled={isLoading}
                      >
                        {isLoading ? <>Sending code...</> : "Continue"}
                      </Button>
                    </form>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
                      Already a user?{" "}
                      <Link
                        href="/login"
                        className="text-dark-blue font-semibold"
                      >
                        Log in
                      </Link>
                    </p>
                  </div>
                </Card>
              </>
            )}

            {/* Step 2: Confirmation Code */}
            {step === 2 && (
              <>
                <Image
                  src={"/logo.jpg"}
                  height={300}
                  width={350}
                  alt="logo"
                  className="w-24 mx-auto mt-5"
                />
                <Card className="max-w-lg mx-auto bg-white mt-5 p-8 border-0 shadow-none block">
                  <div className="relative">
                    <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5">
                      Check your Inbox
                    </h1>
                    <div className="text-center text-gray-500 leading-tight mb-8">
                      <p className="mt-3">
                        We've sent a confirmation email with your code.
                      </p>
                      <p className="">
                        Enter it below to activate your account.
                      </p>
                    </div>
                    <form
                      key="step2"
                      onSubmit={step2Form.handleSubmit(onStep2Submit)}
                      className="space-y-6"
                    >
                      <div className="flex justify-between gap-3">
                        {values.map((_, i) => (
                          <Input
                            key={i}
                            type="text"
                            id={`otpbox${i}`}
                            maxLength={1}
                            value={values[i]}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            onPaste={handlePaste}
                            ref={(el) => {
                              inputsRef.current[i] = el;
                            }}
                            className={cn(
                              "w-14 h-14 text-center text-2xl font-bold",
                              step2Form.formState.errors.code &&
                                "border-red-500 focus-visible:ring-red-500"
                            )}
                            disabled={false}
                          />
                        ))}
                      </div>
                      {step2Form.formState.errors.code && (
                        <p className="text-sm text-red-500 mt-1">
                          {step2Form.formState.errors.code.message}
                        </p>
                      )}

                      <Button
                        type="submit"
                        className="w-full h-14 rounded-2xl flex items-center justify-center text-lg font-medium bg-dark-blue"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <LoaderCircle className="animate-spin" />
                        ) : (
                          "Continue"
                        )}
                      </Button>
                    </form>
                    <div className="flex justify-center mt-3">
                      <Button
                        className="text-dark-blue mx-auto hover:bg-white cursor-pointer"
                        variant="ghost"
                      >
                        Get new code
                      </Button>
                    </div>
                  </div>
                </Card>
                <div className="text-center mt-3">
                  <Link href="/terms" className="text-blue-500 underline">
                    Terms of Use
                  </Link>{" "}
                  &{" "}
                  <Link href="/privacy" className="text-blue-500 underline">
                    Privacy Policy
                  </Link>
                </div>
              </>
            )}

            {/* Social & Login Link */}
            {step === 3 && (
              <>
                <Image
                  src={"/logo.jpg"}
                  height={300}
                  width={350}
                  alt="logo"
                  className="w-24  mt-5"
                />
                <div className="flex justify-center gap-2 w-40 mx-auto mt-7">
                  <Progress value={100} className="rounded-none h-1" />
                  {companyDetailsStep > 1 ? (
                    <Progress value={100} className="rounded-none h-1" />
                  ) : (
                    <Progress className="rounded-none h-1" />
                  )}
                  {companyDetailsStep > 2 ? (
                    <Progress value={100} className="rounded-none h-1" />
                  ) : (
                    <Progress className="rounded-none h-1" />
                  )}
                  {companyDetailsStep > 3 ? (
                    <Progress value={100} className="rounded-none h-1" />
                  ) : (
                    <Progress className="rounded-none h-1" />
                  )}
                </div>
                <form onSubmit={step3Form.handleSubmit(onSubmit)}>
                  {companyDetailsStep === 1 && (
                    <Card className="max-w-lg mx-auto bg-white mt-3 p-8 border-0 shadow-none block">
                      <div className="relative">
                        <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5">
                          Tell us about your company
                        </h1>
                        <div className="text-center text-gray-500 leading-tight mb-8">
                          <p className="mt-3">
                            Let's set up your company profile.
                          </p>
                        </div>
                        <div className="space-y-6">
                          {/* Company Name */}
                          <div>
                            <div className="relative mt-2">
                              <Input
                                id="companyName"
                                placeholder="Company Name"
                                {...step3Form.register("companyName")}
                                className={cn(
                                  "pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                                  step3Form.formState.errors.companyName &&
                                    "border-red-500 focus-visible:ring-red-500"
                                )}
                              />
                            </div>
                            {step3Form.formState.errors.companyName && (
                              <p className="text-sm text-red-500 mt-1">
                                {step3Form.formState.errors.companyName.message}
                              </p>
                            )}
                          </div>
                          {/* Industry */}
                          <div>
                            <div className="relative mt-2">
                              <Select
                                onValueChange={(v) => {
                                  step3Form.setValue("industry", v as any);
                                  step3Form.trigger("industry");
                                }}
                              >
                                <SelectTrigger
                                  className={cn(
                                    "pl-5 py-7 h-14 rounded-xl w-full text-gray-500 font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                                    step3Form.formState.errors.industry &&
                                      "border-red-500"
                                  )}
                                >
                                  <SelectValue placeholder="Industry" />
                                </SelectTrigger>
                                <SelectContent
                                  position="popper"
                                  sideOffset={4}
                                  onCloseAutoFocus={(e) => e.preventDefault()}
                                >
                                  <SelectGroup>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                      Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                      Blueberry
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                      Grapes
                                    </SelectItem>
                                    <SelectItem value="pineapple">
                                      Pineapple
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                            {step3Form.formState.errors.industry && (
                              <p className="text-sm text-red-500 mt-1">
                                {step3Form.formState.errors.industry.message}
                              </p>
                            )}
                          </div>
                          {/* company size */}
                          <div>
                            <div className="relative mt-2">
                              <Select
                                onValueChange={(v) => {
                                  step3Form.setValue("companySize", v as any);
                                  step3Form.trigger("companySize");
                                }}
                              >
                                <SelectTrigger
                                  className={cn(
                                    "pl-5 py-7 h-14 rounded-xl w-full text-gray-500 font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                                    step3Form.formState.errors.companySize &&
                                      "border-red-500"
                                  )}
                                >
                                  <SelectValue placeholder="Company Size" />
                                </SelectTrigger>
                                <SelectContent
                                  position="popper"
                                  sideOffset={4}
                                  onCloseAutoFocus={(e) => e.preventDefault()}
                                >
                                  <SelectGroup>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                      Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                      Blueberry
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                      Grapes
                                    </SelectItem>
                                    <SelectItem value="pineapple">
                                      Pineapple
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                            {step3Form.formState.errors.companySize && (
                              <p className="text-sm text-red-500 mt-1">
                                {step3Form.formState.errors.companySize.message}
                              </p>
                            )}
                          </div>
                          {/* Location */}
                          <div>
                            <div className="relative mt-2">
                              <Input
                                id="location"
                                placeholder="Location"
                                {...step3Form.register("location")}
                                className={cn(
                                  "pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                                  step3Form.formState.errors.location &&
                                    "border-red-500 focus-visible:ring-red-500"
                                )}
                              />
                            </div>
                            {step3Form.formState.errors.location && (
                              <p className="text-sm text-red-500 mt-1">
                                {step3Form.formState.errors.location.message}
                              </p>
                            )}
                          </div>

                          <Button
                            type="button"
                            onClick={nextCompanyDetailsStep}
                            className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue"
                          >
                            Continue
                          </Button>
                        </div>
                        <div className="flex justify-center mt-3">
                          <p className="text-gray-500">
                            This helps us match you with the right workforce
                            pool.
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}
                  {companyDetailsStep === 2 && (
                    <Card className="max-w-lg mx-auto bg-white mt-3 p-8 border-0 shadow-none block">
                      <div className="relative">
                        <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5">
                          Service Selection
                        </h1>
                        <div className="text-center text-gray-500 leading-tight mb-8">
                          <p className="mt-3">What type of help do you need?</p>
                        </div>
                        <div className="space-y-6">
                          <RadioGroup
                            defaultValue="software"
                            className="grid gap-4"
                          >
                            {services.map((service, idx) => {
                              const isSelected = selectedId === service.id;
                              return (
                                <label
                                  key={idx}
                                  htmlFor="software"
                                  onClick={() => {
                                    setSelectedId(service.id);
                                    step3Form.setValue(
                                      "service",
                                      service.title
                                    );
                                    step3Form.trigger("service");
                                  }}
                                  className={cn(
                                    "flex flex-col border rounded-md p-4 cursor-pointer",
                                    isSelected && "bg-black"
                                  )}
                                >
                                  <RadioGroupItem
                                    value={service.title}
                                    id={service.title}
                                    className="peer hidden"
                                  />
                                  <span
                                    className={cn(
                                      "text-sm font-medium",
                                      isSelected && "text-white"
                                    )}
                                  >
                                    {service.title}
                                  </span>
                                  <span
                                    className={cn(
                                      "text-xs text-gray-500 mt-2",
                                      isSelected && "text-gray-200"
                                    )}
                                  >
                                    {service.description}
                                  </span>
                                </label>
                              );
                            })}
                          </RadioGroup>
                          {step3Form.formState.errors.service && (
                            <p className="text-sm text-red-500 mt-1">
                              {step3Form.formState.errors.service.message}
                            </p>
                          )}
                          <Button
                            type="submit"
                            className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue"
                            disabled={isLoading}
                            onClick={nextCompanyDetailsStep}
                          >
                            Continue
                          </Button>
                        </div>
                        <div className="flex justify-center mt-3">
                          <p className="text-gray-500">
                            This helps us match you with the right workforce
                            pool.
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}
                  {companyDetailsStep === 3 && (
                    <Card className="max-w-lg mx-auto bg-white mt-3 p-8 border-0 shadow-none block">
                      <div className="relative">
                        <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5">
                          Who are you looking to hire?
                        </h1>
                        <div className="text-center text-gray-500 leading-tight mb-8">
                          <p className="mt-3">
                            Let's match you with the right workers.
                          </p>
                        </div>
                        <div className="space-y-6">
                          {/* Job category */}
                          <div>
                            <div className="relative mt-2">
                              <Select
                                onValueChange={(v) => {
                                  step3Form.setValue("jobCategory", v);
                                  step3Form.trigger("jobCategory");
                                }}
                              >
                                <SelectTrigger
                                  className={cn(
                                    "pl-5 py-7 h-14 rounded-xl w-full text-gray-500 font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                                    step3Form.formState.errors.jobCategory &&
                                      "border-red-500"
                                  )}
                                >
                                  <SelectValue placeholder="Job Category" />
                                </SelectTrigger>
                                <SelectContent
                                  position="popper"
                                  sideOffset={4}
                                  onCloseAutoFocus={(e) => e.preventDefault()}
                                >
                                  <SelectGroup>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                      Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                      Blueberry
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                      Grapes
                                    </SelectItem>
                                    <SelectItem value="pineapple">
                                      Pineapple
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                            {step3Form.formState.errors.jobCategory && (
                              <p className="text-sm text-red-500 mt-1">
                                {step3Form.formState.errors.jobCategory.message}
                              </p>
                            )}
                          </div>
                          {/* skill level */}
                          <div>
                            <div className="relative mt-2">
                              <Select
                                onValueChange={(v) => {
                                  step3Form.setValue("skillLevel", v);
                                  step3Form.trigger("skillLevel");
                                }}
                              >
                                <SelectTrigger
                                  className={cn(
                                    "pl-5 py-7 h-14 rounded-xl w-full text-gray-500 font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                                    step3Form.formState.errors.skillLevel &&
                                      "border-red-500"
                                  )}
                                >
                                  <SelectValue placeholder="Skill Level" />
                                </SelectTrigger>
                                <SelectContent
                                  position="popper"
                                  sideOffset={4}
                                  onCloseAutoFocus={(e) => e.preventDefault()}
                                >
                                  <SelectGroup>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                      Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                      Blueberry
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                      Grapes
                                    </SelectItem>
                                    <SelectItem value="pineapple">
                                      Pineapple
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                            {step3Form.formState.errors.skillLevel && (
                              <p className="text-sm text-red-500 mt-1">
                                {step3Form.formState.errors.skillLevel.message}
                              </p>
                            )}
                          </div>

                          <Button
                            type="button"
                            className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue"
                            onClick={nextCompanyDetailsStep}
                          >
                            {isLoading ? <>Sending code...</> : "Continue"}
                          </Button>
                        </div>
                        <div className="flex justify-center mt-3">
                          <p className="text-gray-500">
                            This helps us match you with the right workforce
                            pool.
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}
                  {companyDetailsStep === 4 && (
                    <Card className="max-w-3xl mx-auto bg-white mt-3 p-8 border-0 shadow-none block">
                      <div className="relative">
                        <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5">
                          Agreement & SLAs
                        </h1>
                        <div className="text-center text-gray-500 leading-tight mb-8">
                          <p className="mt-3">
                            Before we wrap up, let's quickly confirm how we'll
                            work toghether.
                          </p>
                        </div>
                        <div className="space-y-6">
                          {/* Agreement */}
                          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {/* looking */}
                            <Card className="border-gray-200 px-5 py-7 gap-0 hover:cursor-pointer">
                              <p className="font-bold">You're agreeing to:</p>
                              <ul className="text-gray-700 font-semibold mt-2 space-y-3">
                                <li className="flex gap-2 items-center">
                                  <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5" />
                                  <span>
                                    Work with verified, reliable professionals
                                  </span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5" />
                                  <span>
                                    Clear terms of service that you can trust
                                  </span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5" />
                                  <span>Transparent SLAs</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5" />
                                  <span>
                                    Secure handling of your business data
                                  </span>
                                </li>
                              </ul>
                              <Link
                                className="text-dark-blue mt-3 gap-2 font-semibold flex items-center"
                                href="terms"
                              >
                                <span>View Terms of Service</span>
                                <ArrowRight className="mt-0.5" />
                              </Link>
                            </Card>
                            <Card className="border-gray-200 px-5 py-7 gap-0 hover:cursor-pointer">
                              <p className="font-bold">Our Guarantee:</p>
                              <ul className="text-gray-700 font-semibold mt-2 space-y-3">
                                <li className="flex gap-2 items-center">
                                  <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5" />
                                  <span>
                                    Match only vetted, qualified personnel
                                  </span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5" />
                                  <span>
                                    We handle all paperworks and checks
                                  </span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5" />
                                  <span>Replace workers quickly if needed</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5" />
                                  <span>Protect your data securely</span>
                                </li>
                              </ul>
                              <Link
                                className="text-dark-blue mt-3 gap-2 font-semibold flex items-center"
                                href="terms"
                              >
                                <span>
                                  View service level agreements (SLAs)
                                </span>
                                <ArrowRight className="mt-0.5" />
                              </Link>
                            </Card>
                          </div>
                          <div className="flex items-center gap-3 justify-center">
                            <Checkbox
                              id="terms"
                              checked={step3Form.watch("agreement")}
                              onCheckedChange={(checked) =>
                                step3Form.setValue(
                                  "agreement",
                                  checked === true,
                                  { shouldValidate: true }
                                )
                              }
                              className={cn(
                                "",
                                step3Form.formState.errors.agreement &&
                                  "border-red-500"
                              )}
                            />
                            <Label htmlFor="terms">
                              I've read and agree to the Terms of Service &
                              service level agreements (SLAs)
                            </Label>
                          </div>
                          <Button
                            type="submit"
                            className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>Sending code...</>
                            ) : (
                              "Sign in and Continue"
                            )}
                          </Button>
                        </div>
                        <div className="flex justify-center mt-3">
                          <p className="text-gray-500">
                            You'll choose your plan and payment terms next
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}
                </form>
              </>
            )}
          </div>
        </>
      )}

      {!showSignUp && (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center w-full">
          <div className="max-w-4xl w-full text-center">
            <Image
              src={"/logo.jpg"}
              height={300}
              width={350}
              alt="logo"
              className="w-30 mx-auto"
            />
            {/* Title */}
            <h1 className="text-4xl md:text-3xl font-black text-gray-900 mt-10 mb-12">
              What Brings you to OTK?
            </h1>
            {/* <Button
              variant="outline"
              className="flex items-center mx-auto gap-2 mb-10"
            >
              <Image
                src="/social-icons/google.png" // place a Google logo SVG in your public folder
                alt="Google"
                width={20}
                              height={20}
              />
              Continue with Google
            </Button> */}

            {/* Role Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* looking */}
              <Card
                className="border-gray-50 p-1 gap-3 pb-7 hover:cursor-pointer hover:border-dark-yellow"
                onClick={() => {
                  setRole("looking");
                }}
              >
                <div className="bg-gray-100 w-full rounded-xl h-50"></div>

                <h2 className="text-2xl font-black mt-4">
                  I'm Looking for Work
                </h2>
                <p className="text-gray-600">
                  Find verified, reliable staff in days - not weeks
                </p>
              </Card>

              {/* client */}
              <Card
                className="border-gray-50 p-1 gap-3 pb-7 hover:cursor-pointer hover:border-dark-yellow"
                onClick={() => {
                  setRole("hiring");
                }}
              >
                <div className="bg-gray-100 w-full rounded-xl h-50"></div>

                <h2 className="text-2xl font-black mt-4">I'm Hiring</h2>
                <p className="text-gray-600">
                  Find verified, reliable staff in days - not weeks
                </p>
              </Card>
            </div>

            {/* Sign in */}
            <p className="mt-8 text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-primary-700 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
