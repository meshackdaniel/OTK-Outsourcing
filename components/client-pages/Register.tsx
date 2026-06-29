"use client";

import { useState, useEffect, useRef } from"react";
import { zodResolver } from"@hookform/resolvers/zod";
import { useForm, useFieldArray } from"react-hook-form";
import { z } from"zod";
import Link from"next/link";
import { useRouter } from"next/navigation";
import { Button } from"@/components/ui/button";
import { Input } from"@/components/ui/input";
import { Card } from"@/components/ui/card";
import {
 Eye,
 EyeOff,
 ArrowLeft,
 LoaderCircle,
 ChevronDown,
 Check,
} from"lucide-react";
import Cookies from"js-cookie";
import Image from"next/image";
import { toast } from"sonner";
import { cn } from"@/lib/utils";
import { Progress } from"../ui/progress";
import {
 Select,
 SelectContent,
 SelectGroup,
 SelectItem,
 SelectLabel,
 SelectTrigger,
 SelectValue,
} from"@/components/ui/select";
import { RadioGroup, RadioGroupItem } from"../ui/radio-group";
import ArrowRight from"../ui/icons/ArrowRight";
import { Label } from"../ui/label";
import { Checkbox } from"../ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

// ---------------------------------------------------------------------
// Schemas
// ---------------------------------------------------------------------
const step1Schema = z.object({
 fullName: z.string().min(2,"Name must be at least 2 characters"),
 email: z.email("Please enter a valid email"),
 password: z
 .string()
 .min(8,"Password must be at least 8 characters")
 .regex(/[A-Z]/,"Must contain uppercase")
 .regex(/[a-z]/,"Must contain lowercase")
 .regex(/[0-9]/,"Must contain a number")
 .regex(/[^A-Za-z0-9]/,"Must contain a special character"),
});

const step2Schema = z.object({
 code: z
 .string("Invalid code")
 .length(6,"Code must be 6 digits")
 .regex(/^\d+$/,"Only numbers allowed"),
});

const step3EmployerSchema = z.object({
 companyName: z.string().min(2,"Company name is required"),
 contactPersonName: z.string().min(2, "Contact person name is required"),
 contactPersonDesignation: z.string().min(2, "Designation is required"),
 phone: z.string().min(5, "Phone number is required"),
 address: z.string().min(5, "Address is required"),
 industry: z.string().min(1, "Please select your industry"),
 companySize: z.string().min(1, "Please select company size"),
 location: z.string().min(2,"Please select location"),
 service: z.string().min(1, "Please select a service"),
 jobCategory: z.string().min(1, "Please select job category"),
 skillLevel: z.string().min(1, "Please select skill level"),
 agreement: z.boolean(),
});

const step3TalentSchema = z.object({
  // Step 1: Profile Details
  profileImage: z.any().optional(),
  jobTitle: z.string().min(2, "Job Title is required"),
  sector: z.string().min(1, "Please select an interested sector"),
  workType: z.string().min(1, "Please select a work type"),
  bio: z.string().min(10, "Please tell us a bit about yourself"),
  cvUrl: z.any().refine((val) => val && val.length > 0, "Please upload your CV"),
  location: z.string().min(2, "Location is required"),

  // Step 2: Education
  education: z.array(z.object({
    institution: z.string().min(2, "Institution Name is required"),
    fieldOfStudy: z.string().min(2, "Field of study is required"),
    degreeLevel: z.string().min(1, "Please select degree level"),
    status: z.string().min(1, "Please select status"),
    startDate: z.string().min(1, "Start Date is required"),
    endDate: z.string().optional()
  })).min(1, "Please add at least one education record"),

  // Step 3: Identity & Address
  idUpload: z.any().refine((val) => val && val.length > 0, "Please upload your ID"),
  phone: z.string().min(5, "Phone number is required"),
  addressLine1: z.string().min(5, "Address Line 1 is required"),
  addressLine2: z.string().optional(),
  postcode: z.string().min(2, "Postcode is required"),
  referees: z.string().optional(),

  // Step 4: Bank Details Verification
  bankName: z.string().min(2, "Bank name is required"),
  accountName: z.string().min(2, "Account name is required"),
  accountNumber: z.string().min(5, "Account number is required"),
  sortCode: z.string().optional(),
  agreement: z.boolean()
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3EmployerData = z.infer<typeof step3EmployerSchema>;
type Step3TalentData = z.infer<typeof step3TalentSchema>;

type Role ="looking"|"hiring"| null;

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
 const [talentDetailsStep, setTalentDetailsStep] = useState(1);

  const setRole = (role: string) => {
    // Cookies.set("role", role, { path:"/", expires: 1 }); // 1 day
    setSelectedRole(role as Role);
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

 // Step 3 Employer Form
 const step3EmployerForm = useForm<Step3EmployerData>({
 resolver: zodResolver(step3EmployerSchema),
 mode:"onChange",
 });

 // Step 3 Talent Form
 const step3TalentForm = useForm<Step3TalentData>({
 resolver: zodResolver(step3TalentSchema),
 mode:"onChange",
 defaultValues: {
   education: [
     { institution: "", fieldOfStudy: "", degreeLevel: "", status: "", startDate: "", endDate: "" }
   ]
 }
 });

 const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
   control: step3TalentForm.control,
   name: "education"
 });

 // -----------------------------------------------------------------
 // Step 1 Submit → Send OTP
 // -----------------------------------------------------------------
 const onStep1Submit = async (data: Step1Data) => {
 setIsLoading(true);
 setSavedFullName(data.fullName);
 setSavedEmail(data.email);
 setSavedPassword(data.password);

 setStep(2);
 setIsLoading(false);

 await new Promise((r) => setTimeout(r, 1500)); // Simulate API
 // fetch("/api/sendOtp", {
 // method:"POST",
 // headers: {
 //"Content-Type":"application/json",
 // Accept:"application.json",
 // },
 // body: JSON.stringify({ ...data }),
 // }).then(async (res) => {
 // const result = await res.json();
 // if (!res.ok) {
 // if (result.message ==="user already exists") {
 // setIsLoading(false);
 // step1Form.setError("email", { message:"User already exists"});
 // throw new Error("User already exist");
 // } else {
 // setIsLoading(false);
 // toast.error("Something went wrong");
 // throw new Error("User already exist");
 // }
 // }
 // setSavedEmail(data.email);
 // setSavedPassword(data.password);
 // setSavedFullName(data.fullName);
 // setStep(2);
 // setIsLoading(false);
 // });
 };

 // -----------------------------------------------------------------
 // Step 2 Submit → Check OTP
 // -----------------------------------------------------------------
 const onStep2Submit = async (data: Step2Data) => {
 setIsLoading(true);
 setStep(3);
 setIsLoading(false);

 // fetch("/api/register", {
 // method:"POST",
 // headers: {
 //"Content-Type":"application/json",
 // Accept:"application.json",
 // },
 // body: JSON.stringify({
 // ...data,
 // email: savedEmail,
 // password: savedPassword,
 // fullName: savedFullName,
 // }),
 // }).then(async (res) => {
 // const result = await res.json();
 // if (result.message ==="Invalid verification code") {
 // step2Form.setError("code", { message:"Invalid verification code"});
 // setIsLoading(false);
 // throw new Error("Registration failed");
 // }
 // if (!res.ok) {
 // setIsLoading(false);
 // throw new Error("Registration failed");
 // }
 // router.push("/");
 // router.refresh();
 // setStep(2);
 // setIsLoading(false);
 // });
 };

 // -----------------------------------------------------------------
 // Step 2 Submit → Complete Registration
 // -----------------------------------------------------------------
 
  const onStep3TalentSubmit = async (data: Step3TalentData) => {
    setIsLoading(true);
    console.log("Talent Data:", data);
    router.push("/talent/dashboard");
    setIsLoading(false);
  };

  const onStep3EmployerSubmit = async (data: Step3EmployerData) => {
    setIsLoading(true);
    console.log("Employer Data:", data);
    router.push("/employer/dashboard");
    setIsLoading(false);

 // fetch("/api/register", {
 // method:"POST",
 // headers: {
 //"Content-Type":"application/json",
 // Accept:"application.json",
 // },
 // body: JSON.stringify({
 // ...data,
 // email: savedEmail,
 // password: savedPassword,
 // fullName: savedFullName,
 // }),
 // }).then(async (res) => {
 // const result = await res.json();
 // if (result.message ==="Invalid verification code") {
 // step2Form.setError("code", { message:"Invalid verification code"});
 // setIsLoading(false);
 // throw new Error("Registration failed");
 // }
 // if (!res.ok) {
 // setIsLoading(false);
 // throw new Error("Registration failed");
 // }
 // router.push("/");
 // router.refresh();
 // setStep(2);
 // setIsLoading(false);
 // });
 };

 // ---------------------------------------------------------------------
 // OTP Component
 // ---------------------------------------------------------------------
 const [values, setValues] = useState(["","","","","",""]);
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
 if (newValues.every((v) => v !=="")) {
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
 if (e.key ==="Backspace"&& !values[index] && index > 0) {
 inputsRef.current[index - 1]?.focus();
 }
 };

 const handlePaste = (e: React.ClipboardEvent) => {
 const { setValue } = step2Form;
 const paste = e.clipboardData
 .getData("text")
 .replace(/\D/g,"")
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
 color: string; // tailwind color (e.g.,"blue","green","purple")
 };

 const services: Service[] = [
 {
 id:"software",
 title:"Software Development",
 description:
"Build web, mobile, and enterprise applications with expert teams.",
 color:"blue",
 },
 {
 id:"support",
 title:"Customer Support",
 description:"24/7 multilingual support for your customers worldwide.",
 color:"green",
 },
 {
 id:"hr",
 title:"HR & Recruitment",
 description:
"Outsource hiring, onboarding, and payroll management with ease.",
 color:"purple",
 },
 ];

 const [selectedId, setSelectedId] = useState<string>("");

 const nextCompanyDetailsStep = async () => {
 let fields: any[] = [];
 if (companyDetailsStep === 1) fields = ["companyName","contactPersonName","contactPersonDesignation","phone","address","industry","companySize","location"];
 if (companyDetailsStep === 2) fields = ["service"];
 if (companyDetailsStep === 3) fields = ["jobCategory","skillLevel"];
 if (companyDetailsStep === 4) fields = ["agreement"];
 const valid = fields.length === 0 || (await step3EmployerForm.trigger(fields));
 if (valid) setCompanyDetailsStep((p) => p + 1);
 };

 const nextTalentDetailsStep = async () => {
   let fields: any[] = [];
   if (talentDetailsStep === 1) fields = ["jobTitle", "sector", "workType", "bio", "cvUrl", "location"];
   if (talentDetailsStep === 2) fields = ["education"];
   if (talentDetailsStep === 3) fields = ["idUpload", "phone", "addressLine1", "addressLine2", "postcode", "referees"];
   if (talentDetailsStep === 4) fields = ["bankName", "accountName", "accountNumber", "sortCode", "agreement"];
   const valid = fields.length === 0 || (await step3TalentForm.trigger(fields));
   if (valid) setTalentDetailsStep((p) => p + 1);
 };

 const prevTalentDetailsStep = () => {
   if (talentDetailsStep > 1) {
     setTalentDetailsStep((p) => p - 1);
   } else {
     setSelectedRole(null);
     setShowSignUp(false);
   }
 };

 const prevCompanyDetailsStep = () => {
   if (companyDetailsStep > 1) {
     setCompanyDetailsStep((p) => p - 1);
   } else {
     setSelectedRole(null);
     setShowSignUp(false);
   }
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
 <Link href={"/"}>
 <Image
 src={"/logo.png"}
 height={300}
 width={350}
 alt="logo"
 className="w-24 mx-auto mt-5"
 />
 </Link>
 <Card className="max-w-lg mx-4 md:mx-auto bg-white mt-5 py-8 md:py-8 px-5 md:px-8 border-0 block">
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
 type={showPassword ?"text":"password"}
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
 <EyeOff className="h-5 w-5"/>
 ) : (
 <Eye className="h-5 w-5"/>
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
 {isLoading ? <>Sending code...</> :"Continue"}
 </Button>
 </form>
 <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
 Already a user?{""}
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
 src={"/logo.png"}
 height={300}
 width={350}
 alt="logo"
 className="w-24 mx-auto mt-5"
 />
 <Card className="max-w-lg mx-4 md:mx-auto bg-white mt-5 py-8 md:py-8 px-5 md:px-8 border-0 block">
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
 <div className="flex flex-col md:flex-row justify-between gap-3">
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
 <LoaderCircle className="animate-spin"/>
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
 <Link href="/terms"className="text-blue-500 underline">
 Terms of Use
 </Link>{""}
 &{""}
 <Link href="/privacy"className="text-blue-500 underline">
 Privacy Policy
 </Link>
 </div>
 </>
 )}

 
      {step === 3 && selectedRole === 'looking' && (
        <>
          <Link href={"/"}>
            <Image src={"/logo.png"} height={300} width={350} alt="logo" className="w-24 mt-5 mx-auto" />
          </Link>

          <div className="flex justify-center gap-2 w-40 mx-auto mt-7">
            <Progress value={100} className="rounded-none h-1"/>
            <Progress value={talentDetailsStep > 1 ? 100 : 0} className="rounded-none h-1"/>
            <Progress value={talentDetailsStep > 2 ? 100 : 0} className="rounded-none h-1"/>
            <Progress value={talentDetailsStep > 3 ? 100 : 0} className="rounded-none h-1"/>
          </div>

          <form onSubmit={step3TalentForm.handleSubmit(onStep3TalentSubmit)}>
            {talentDetailsStep === 1 && (
              <Card className="max-w-lg mx-4 md:mx-auto bg-white mt-8 md:mt-5 py-8 px-5 md:px-8 border-0 block relative">
                <ArrowLeft className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-900 absolute top-8 left-8" onClick={prevTalentDetailsStep} />
                <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-2 mt-4 md:mt-0">
                  Create Talent Profile
                </h1>
                <p className="text-center text-gray-500 mb-6 text-sm">Tell us a bit about yourself to get started</p>
                
                <div className="space-y-6">
                  {/* Profile Picture & CV */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <Label className="block mb-2 font-medium text-gray-700">Profile Picture</Label>
                      <Input type="file" {...step3TalentForm.register("profileImage")} className="mt-2 bg-gray-50/50 !h-12 w-full pt-2.5" />
                    </div>
                    <div>
                      <Label className="block mb-2 font-medium text-gray-700">Upload CV</Label>
                      <Input type="file" {...step3TalentForm.register("cvUrl")} className="mt-2 bg-gray-50/50 !h-12 w-full pt-2.5" />
                      {step3TalentForm.formState.errors.cvUrl && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.cvUrl.message as string}</p>}
                    </div>
                  </div>

                  <div>
                    <Input placeholder="Job Title" {...step3TalentForm.register("jobTitle")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.jobTitle && "border-red-500")} />
                    {step3TalentForm.formState.errors.jobTitle && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.jobTitle.message}</p>}
                  </div>

                  <div>
                    <Select onValueChange={(v) => { step3TalentForm.setValue("sector", v); step3TalentForm.trigger("sector"); }}>
                      <SelectTrigger className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.sector && "border-red-500")}>
                        <SelectValue placeholder="Interested Sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">IT & Technology</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="logistics">Logistics</SelectItem>
                      </SelectContent>
                    </Select>
                    {step3TalentForm.formState.errors.sector && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.sector.message}</p>}
                  </div>

                  <div>
                    <Label className="block mb-2 font-medium text-gray-700">What type of work are you looking for?</Label>
                    <div className="flex flex-col md:flex-row gap-4">
                      <label className={cn("flex-1 border rounded-xl p-4 cursor-pointer text-center bg-gray-50/50 hover:border-dark-blue", step3TalentForm.watch("workType") === "contract" && "border-dark-blue bg-dark-blue/5")} onClick={() => { step3TalentForm.setValue("workType", "contract"); step3TalentForm.trigger("workType"); }}>
                        <span className="font-semibold text-sm">Contract</span>
                      </label>
                      <label className={cn("flex-1 border rounded-xl p-4 cursor-pointer text-center bg-gray-50/50 hover:border-dark-blue", step3TalentForm.watch("workType") === "full-time" && "border-dark-blue bg-dark-blue/5")} onClick={() => { step3TalentForm.setValue("workType", "full-time"); step3TalentForm.trigger("workType"); }}>
                        <span className="font-semibold text-sm">Full-time</span>
                      </label>
                    </div>
                    {step3TalentForm.formState.errors.workType && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.workType.message}</p>}
                  </div>

                  <div>
                    <textarea placeholder="Tell us about yourself" {...step3TalentForm.register("bio")} className={cn("w-full p-4 rounded-2xl bg-gray-50/50 border", step3TalentForm.formState.errors.bio ? "border-red-500" : "border-gray-200")} rows={4} />
                    {step3TalentForm.formState.errors.bio && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.bio.message}</p>}
                  </div>

                  <div>
                    <Input placeholder="Location" {...step3TalentForm.register("location")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.location && "border-red-500")} />
                  </div>

                  <Button type="button" onClick={nextTalentDetailsStep} className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue">
                    Next
                  </Button>
                </div>
              </Card>
            )}

            {talentDetailsStep === 2 && (
              <Card className="max-w-lg mx-4 md:mx-auto bg-white mt-8 md:mt-5 py-8 px-5 md:px-8 border-0 block relative">
                <ArrowLeft className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-900 absolute top-8 left-8" onClick={prevTalentDetailsStep} />
                <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-2 mt-4 md:mt-0">Education</h1>
                <p className="text-center text-gray-500 mb-6 text-sm">Add up to 3 degrees, diplomas, or certificates</p>
                <div className="space-y-6">
                  {educationFields.map((field, index) => (
                    <div key={field.id} className="space-y-6 p-4 border rounded-2xl bg-gray-50/20 relative">
                      {index > 0 && (
                        <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                          <h4 className="text-sm font-semibold text-gray-500">Education {index + 1}</h4>
                          <Button type="button" variant="ghost" onClick={() => removeEducation(index)} className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 h-auto text-sm rounded-xl">
                            Remove
                          </Button>
                        </div>
                      )}
                      <div>
                        <Input placeholder="Institution Name" {...step3TalentForm.register(`education.${index}.institution`)} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.education?.[index]?.institution && "border-red-500")} />
                        {step3TalentForm.formState.errors.education?.[index]?.institution && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.education[index].institution?.message}</p>}
                      </div>
                      <div>
                        <Input placeholder="Field of Study" {...step3TalentForm.register(`education.${index}.fieldOfStudy`)} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.education?.[index]?.fieldOfStudy && "border-red-500")} />
                        {step3TalentForm.formState.errors.education?.[index]?.fieldOfStudy && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.education[index].fieldOfStudy?.message}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Select onValueChange={(v) => { step3TalentForm.setValue(`education.${index}.degreeLevel`, v); step3TalentForm.trigger(`education.${index}.degreeLevel`); }}>
                            <SelectTrigger className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.education?.[index]?.degreeLevel && "border-red-500")}><SelectValue placeholder="Degree Level" /></SelectTrigger>
                            <SelectContent><SelectItem value="bachelors">Bachelors</SelectItem><SelectItem value="masters">Masters</SelectItem><SelectItem value="phd">PhD</SelectItem><SelectItem value="certificate">Certificate</SelectItem></SelectContent>
                          </Select>
                          {step3TalentForm.formState.errors.education?.[index]?.degreeLevel && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.education[index].degreeLevel?.message}</p>}
                        </div>
                        <div>
                          <Select onValueChange={(v) => { step3TalentForm.setValue(`education.${index}.status`, v); step3TalentForm.trigger(`education.${index}.status`); }}>
                            <SelectTrigger className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.education?.[index]?.status && "border-red-500")}><SelectValue placeholder="Degree Status" /></SelectTrigger>
                            <SelectContent><SelectItem value="completed">Completed</SelectItem><SelectItem value="in_progress">In Progress</SelectItem></SelectContent>
                          </Select>
                          {step3TalentForm.formState.errors.education?.[index]?.status && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.education[index].status?.message}</p>}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="block mb-2 text-xs font-medium text-gray-500 ml-2">Start Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50 justify-start text-left font-normal border-gray-200", !step3TalentForm.watch(`education.${index}.startDate`) && "text-gray-500", step3TalentForm.formState.errors.education?.[index]?.startDate && "border-red-500")}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {step3TalentForm.watch(`education.${index}.startDate`) ? format(new Date(step3TalentForm.watch(`education.${index}.startDate`) as string), "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar mode="single" selected={step3TalentForm.watch(`education.${index}.startDate`) ? new Date(step3TalentForm.watch(`education.${index}.startDate`) as string) : undefined} onSelect={(date) => { step3TalentForm.setValue(`education.${index}.startDate`, date ? date.toISOString() : ""); step3TalentForm.trigger(`education.${index}.startDate`); }} />
                            </PopoverContent>
                          </Popover>
                          {step3TalentForm.formState.errors.education?.[index]?.startDate && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.education[index].startDate?.message}</p>}
                        </div>
                        <div>
                          <Label className="block mb-2 text-xs font-medium text-gray-500 ml-2">End Date (Optional)</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50 justify-start text-left font-normal border-gray-200", !step3TalentForm.watch(`education.${index}.endDate`) && "text-gray-500")}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {step3TalentForm.watch(`education.${index}.endDate`) ? format(new Date(step3TalentForm.watch(`education.${index}.endDate`) as string), "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar mode="single" selected={step3TalentForm.watch(`education.${index}.endDate`) ? new Date(step3TalentForm.watch(`education.${index}.endDate`) as string) : undefined} onSelect={(date) => { step3TalentForm.setValue(`education.${index}.endDate`, date ? date.toISOString() : ""); step3TalentForm.trigger(`education.${index}.endDate`); }} />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  ))}

                  {educationFields.length < 3 && (
                    <Button type="button" variant="outline" onClick={() => appendEducation({ institution: "", fieldOfStudy: "", degreeLevel: "", status: "", startDate: "", endDate: "" })} className="w-full border-dashed border-2 h-14 rounded-2xl text-dark-blue font-semibold hover:bg-dark-blue/5">
                      + Add another education
                    </Button>
                  )}

                  <Button type="button" onClick={nextTalentDetailsStep} className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue">
                    Next
                  </Button>
                </div>
              </Card>
            )}

            {talentDetailsStep === 3 && (
              <Card className="max-w-lg mx-4 md:mx-auto bg-white mt-8 md:mt-5 py-8 px-5 md:px-8 border-0 block relative">
                <ArrowLeft className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-900 absolute top-8 left-8" onClick={prevTalentDetailsStep} />
                <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-2 mt-4 md:mt-0">Verification</h1>
                <p className="text-center text-gray-500 mb-6 text-sm">Confirm your address details</p>
                <div className="space-y-6">
                  <div>
                    <Label className="block mb-2 font-medium text-gray-700">Upload ID</Label>
                    <Input type="file" {...step3TalentForm.register("idUpload")} className="mt-2 bg-gray-50/50 !h-12 w-full pt-2.5" />
                    {step3TalentForm.formState.errors.idUpload && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.idUpload.message as string}</p>}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mt-6">Address</h3>
                  <div>
                    <Input placeholder="Address Line 1" {...step3TalentForm.register("addressLine1")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.addressLine1 && "border-red-500")} />
                    {step3TalentForm.formState.errors.addressLine1 && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.addressLine1.message as string}</p>}
                  </div>
                  <div>
                    <Input placeholder="Address Line 2" {...step3TalentForm.register("addressLine2")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.addressLine2 && "border-red-500")} />
                    {step3TalentForm.formState.errors.addressLine2 && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.addressLine2.message as string}</p>}
                  </div>
                  <div>
                    <Input placeholder="Postcode" {...step3TalentForm.register("postcode")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.postcode && "border-red-500")} />
                    {step3TalentForm.formState.errors.postcode && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.postcode.message as string}</p>}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mt-6">Contact</h3>
                  <div>
                    <Input placeholder="Phone Number" {...step3TalentForm.register("phone")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.phone && "border-red-500")} />
                    {step3TalentForm.formState.errors.phone && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.phone.message as string}</p>}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mt-6">Referees (Optional)</h3>
                  <div>
                    <textarea placeholder="List your referees with contact details" {...step3TalentForm.register("referees")} className="w-full p-4 rounded-2xl bg-gray-50/50 border border-gray-200" rows={3} />
                  </div>
                  <Button type="button" onClick={nextTalentDetailsStep} className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue">
                    Next
                  </Button>
                </div>
              </Card>
            )}

            {talentDetailsStep === 4 && (
              <Card className="max-w-lg mx-4 md:mx-auto bg-white mt-8 md:mt-5 py-8 px-5 md:px-8 border-0 block relative">
                <ArrowLeft className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-900 absolute top-8 left-8" onClick={prevTalentDetailsStep} />
                <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-2 mt-4 md:mt-0">Verification</h1>
                <p className="text-center text-gray-500 mb-6 text-sm">Add bank account details</p>
                <div className="space-y-6">
                  <h3 className="font-bold text-gray-800 text-sm">Bank Details</h3>
                  <div>
                    <Input placeholder="Account Name" {...step3TalentForm.register("accountName")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.accountName && "border-red-500")} />
                    {step3TalentForm.formState.errors.accountName && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.accountName.message as string}</p>}
                  </div>
                  <div>
                    <Input placeholder="Account Number" {...step3TalentForm.register("accountNumber")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.accountNumber && "border-red-500")} />
                    {step3TalentForm.formState.errors.accountNumber && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.accountNumber.message as string}</p>}
                  </div>
                  <div>
                    <Input placeholder="Bank Name" {...step3TalentForm.register("bankName")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.bankName && "border-red-500")} />
                    {step3TalentForm.formState.errors.bankName && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.bankName.message as string}</p>}
                  </div>
                  <div>
                    <Input placeholder="Sort Code / Routing Number" {...step3TalentForm.register("sortCode")} className={cn("pl-5 !h-12 w-full rounded-2xl bg-gray-50/50", step3TalentForm.formState.errors.sortCode && "border-red-500")} />
                    {step3TalentForm.formState.errors.sortCode && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.sortCode.message as string}</p>}
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <Checkbox id="talentAgreement" onCheckedChange={(c) => step3TalentForm.setValue("agreement", c as boolean)} />
                    <Label htmlFor="talentAgreement" className="text-sm font-medium leading-none">I accept the <Link href="/terms" className="text-dark-blue underline">Terms of Service</Link> & <Link href="/privacy" className="text-dark-blue underline">Privacy Policy</Link></Label>
                  </div>
                  {step3TalentForm.formState.errors.agreement && <p className="text-sm text-red-500 mt-1">{step3TalentForm.formState.errors.agreement.message}</p>}

                  <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Complete Registration"}
                  </Button>
                </div>
              </Card>
            )}
          </form>
        </>
      )}

      {/* Social & Login Link */}
 {step === 3 && selectedRole === 'hiring' && (
 <>
 <Link href={"/"}>
 <Image
 src={"/logo.png"}
 height={300}
 width={350}
 alt="logo"
 className="w-24 mt-5"
 />
 </Link>
 <div className="flex justify-center gap-2 w-40 mx-auto mt-7">
 <Progress value={100} className="rounded-none h-1"/>
 {companyDetailsStep > 1 ? (
 <Progress value={100} className="rounded-none h-1"/>
 ) : (
 <Progress className="rounded-none h-1"/>
 )}
 {companyDetailsStep > 2 ? (
 <Progress value={100} className="rounded-none h-1"/>
 ) : (
 <Progress className="rounded-none h-1"/>
 )}
 {companyDetailsStep > 3 ? (
 <Progress value={100} className="rounded-none h-1"/>
 ) : (
 <Progress className="rounded-none h-1"/>
 )}
 </div>
 <form onSubmit={step3EmployerForm.handleSubmit(onStep3EmployerSubmit)}>
 {companyDetailsStep === 1 && (
  <Card className="max-w-lg mx-4 md:mx-auto bg-white mt-8 md:mt-5 py-8 md:py-8 px-5 md:px-8 border-0 block relative">
  <ArrowLeft className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-900 absolute top-8 left-8 z-10" onClick={prevCompanyDetailsStep} />
  <div className="relative">
  <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5 mt-4 md:mt-0">
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
 {...step3EmployerForm.register("companyName")}
 className={cn(
"pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.companyName &&
"border-red-500 focus-visible:ring-red-500"
 )}
 />
 </div>
 {step3EmployerForm.formState.errors.companyName && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.companyName.message}
 </p>
 )}
 </div>
 {/* Contact Person Name */}
 <div>
 <div className="relative mt-2">
 <Input
 id="contactPersonName"
 placeholder="Contact Person Name"
 {...step3EmployerForm.register("contactPersonName")}
 className={cn(
"pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.contactPersonName &&
"border-red-500 focus-visible:ring-red-500"
 )}
 />
 </div>
 {step3EmployerForm.formState.errors.contactPersonName && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.contactPersonName.message}
 </p>
 )}
 </div>
 {/* Contact Person Designation */}
 <div>
 <div className="relative mt-2">
 <Input
 id="contactPersonDesignation"
 placeholder="Contact Person Designation"
 {...step3EmployerForm.register("contactPersonDesignation")}
 className={cn(
"pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.contactPersonDesignation &&
"border-red-500 focus-visible:ring-red-500"
 )}
 />
 </div>
 {step3EmployerForm.formState.errors.contactPersonDesignation && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.contactPersonDesignation.message}
 </p>
 )}
 </div>
 {/* Phone Number */}
 <div>
 <div className="relative mt-2">
 <Input
 id="phone"
 placeholder="Company Phone Number"
 {...step3EmployerForm.register("phone")}
 className={cn(
"pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.phone &&
"border-red-500 focus-visible:ring-red-500"
 )}
 />
 </div>
 {step3EmployerForm.formState.errors.phone && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.phone.message}
 </p>
 )}
 </div>
 {/* Address */}
 <div>
 <div className="relative mt-2">
 <Input
 id="address"
 placeholder="Company Address"
 {...step3EmployerForm.register("address")}
 className={cn(
"pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.address &&
"border-red-500 focus-visible:ring-red-500"
 )}
 />
 </div>
 {step3EmployerForm.formState.errors.address && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.address.message}
 </p>
 )}
 </div>
 {/* Industry */}
 <div>
 <div className="relative mt-2">
 <Select
 onValueChange={(v) => {
 step3EmployerForm.setValue("industry", v as any);
 step3EmployerForm.trigger("industry");
 }}
 >
 <SelectTrigger
 className={cn(
"pl-5 py-7 h-14 rounded-xl w-full text-gray-500 font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.industry &&
"border-red-500"
 )}
 >
 <SelectValue placeholder="Industry"/>
 </SelectTrigger>
 <SelectContent
 position="popper"
 sideOffset={4}
 onCloseAutoFocus={(e) => e.preventDefault()}
 >
 <SelectGroup>
 <SelectItem value="it">IT & Technology</SelectItem>
 <SelectItem value="engineering">Engineering</SelectItem>
 <SelectItem value="health">Health</SelectItem>
 <SelectItem value="manufacturing">Manufacturing</SelectItem>
 <SelectItem value="logistics">Logistics</SelectItem>
 <SelectItem value="finance">Finance</SelectItem>
 <SelectItem value="marketing">Marketing</SelectItem>
 <SelectItem value="retail">Retail</SelectItem>
 <SelectItem value="other">Other</SelectItem>
 </SelectGroup>
 </SelectContent>
 </Select>
 </div>
 {step3EmployerForm.formState.errors.industry && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.industry.message}
 </p>
 )}
 </div>
 {/* company size */}
 <div>
 <div className="relative mt-2">
 <Select
 onValueChange={(v) => {
 step3EmployerForm.setValue("companySize", v as any);
 step3EmployerForm.trigger("companySize");
 }}
 >
 <SelectTrigger
 className={cn(
"pl-5 py-7 h-14 rounded-xl w-full text-gray-500 font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.companySize &&
"border-red-500"
 )}
 >
 <SelectValue placeholder="Company Size"/>
 </SelectTrigger>
 <SelectContent
 position="popper"
 sideOffset={4}
 onCloseAutoFocus={(e) => e.preventDefault()}
 >
 <SelectGroup>
 <SelectItem value="1-10">1-10 employees</SelectItem>
 <SelectItem value="11-50">11-50 employees</SelectItem>
 <SelectItem value="51-200">51-200 employees</SelectItem>
 <SelectItem value="201-500">201-500 employees</SelectItem>
 <SelectItem value="500+">500+ employees</SelectItem>
 </SelectGroup>
 </SelectContent>
 </Select>
 </div>
 {step3EmployerForm.formState.errors.companySize && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.companySize.message}
 </p>
 )}
 </div>
 {/* Location */}
 <div>
 <div className="relative mt-2">
 <Input
 id="location"
 placeholder="Location"
 {...step3EmployerForm.register("location")}
 className={cn(
"pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.location &&
"border-red-500 focus-visible:ring-red-500"
 )}
 />
 </div>
 {step3EmployerForm.formState.errors.location && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.location.message}
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
  <Card className="max-w-xl mx-4 md:mx-auto bg-white mt-8 md:mt-5 py-8 md:py-8 px-5 md:px-8 border-0 block relative">
  <ArrowLeft className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-900 absolute top-8 left-8 z-10" onClick={prevCompanyDetailsStep} />
  <div className="relative">
  <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5 mt-4 md:mt-0">
  What services are you looking for?
  </h1>
 <div className="text-center text-gray-500 leading-tight mb-8">
 <p className="mt-3">
 Let's match you with the right workers.
 </p>
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
 step3EmployerForm.setValue(
"service",
 service.title
 );
 step3EmployerForm.trigger("service");
 }}
 className={cn(
"flex flex-col border rounded-md p-4 cursor-pointer",
 isSelected &&"bg-black"
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
 isSelected &&"text-white"
 )}
 >
 {service.title}
 </span>
 <span
 className={cn(
"text-xs text-gray-500 mt-2",
 isSelected &&"text-gray-200"
 )}
 >
 {service.description}
 </span>
 </label>
 );
 })}
 </RadioGroup>
 {step3EmployerForm.formState.errors.service && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.service.message}
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
 <Card className="max-w-lg mx-4 md:mx-auto bg-white mt-8 md:mt-5 py-8 md:py-8 px-5 md:px-8 border-0 block relative">
 <ArrowLeft className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-900 absolute top-8 left-8 z-10" onClick={prevCompanyDetailsStep} />
 <div className="relative">
 <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5 mt-4 md:mt-0">
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
 step3EmployerForm.setValue("jobCategory", v);
 step3EmployerForm.trigger("jobCategory");
 }}
 >
 <SelectTrigger
 className={cn(
"pl-5 py-7 h-14 rounded-xl w-full text-gray-500 font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.jobCategory &&
"border-red-500"
 )}
 >
 <SelectValue placeholder="Job Category"/>
 </SelectTrigger>
 <SelectContent
 position="popper"
 sideOffset={4}
 onCloseAutoFocus={(e) => e.preventDefault()}
 >
 <SelectGroup>
 <SelectItem value="software">Software Development</SelectItem>
 <SelectItem value="support">Customer Support</SelectItem>
 <SelectItem value="sales">Sales</SelectItem>
 <SelectItem value="marketing">Marketing</SelectItem>
 <SelectItem value="design">Design</SelectItem>
 <SelectItem value="data">Data & Analytics</SelectItem>
 <SelectItem value="operations">Operations</SelectItem>
 <SelectItem value="other">Other</SelectItem>
 </SelectGroup>
 </SelectContent>
 </Select>
 </div>
 {step3EmployerForm.formState.errors.jobCategory && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.jobCategory.message}
 </p>
 )}
 </div>
 {/* skill level */}
 <div>
 <div className="relative mt-2">
 <Select
 onValueChange={(v) => {
 step3EmployerForm.setValue("skillLevel", v);
 step3EmployerForm.trigger("skillLevel");
 }}
 >
 <SelectTrigger
 className={cn(
"pl-5 py-7 h-14 rounded-xl w-full text-gray-500 font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
 step3EmployerForm.formState.errors.skillLevel &&
"border-red-500"
 )}
 >
 <SelectValue placeholder="Skill Level"/>
 </SelectTrigger>
 <SelectContent
 position="popper"
 sideOffset={4}
 onCloseAutoFocus={(e) => e.preventDefault()}
 >
 <SelectGroup>
 <SelectItem value="entry">Entry Level</SelectItem>
 <SelectItem value="mid">Mid Level</SelectItem>
 <SelectItem value="senior">Senior Level</SelectItem>
 <SelectItem value="lead">Lead / Manager</SelectItem>
 <SelectItem value="executive">Executive</SelectItem>
 </SelectGroup>
 </SelectContent>
 </Select>
 </div>
 {step3EmployerForm.formState.errors.skillLevel && (
 <p className="text-sm text-red-500 mt-1">
 {step3EmployerForm.formState.errors.skillLevel.message}
 </p>
 )}
 </div>

 <Button
 type="button"
 className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue"
 onClick={nextCompanyDetailsStep}
 >
 {isLoading ? <>Sending code...</> :"Continue"}
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
 <>
  <Card className="max-w-3xl mx-4 md:mx-auto bg-white mb-10 mt-8 md:mt-5 py-8 md:py-8 px-5 md:px-8 border-0 block relative">
  <ArrowLeft className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-900 absolute top-8 left-8 z-10" onClick={prevCompanyDetailsStep} />
  <div className="relative">
  <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5 mt-4 md:mt-0">
  Agreement & SLAs
  </h1>
 <div className="text-center text-gray-500 leading-tight mb-8">
 <p className="mt-3">
 Before we wrap up, let's quickly confirm how we'll work together.
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
 <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5"/>
 <span>
 Work with verified, reliable professionals
 </span>
 </li>
 <li className="flex gap-2 items-center">
 <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5"/>
 <span>
 Clear terms of service that you can trust
 </span>
 </li>
 <li className="flex gap-2 items-center">
 <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5"/>
 <span>Transparent SLAs</span>
 </li>
 <li className="flex gap-2 items-center">
 <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5"/>
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
 <ArrowRight className="mt-0.5"/>
 </Link>
 </Card>
 <Card className="border-gray-200 px-5 py-7 gap-0 hover:cursor-pointer">
 <p className="font-bold">Our Guarantee:</p>
 <ul className="text-gray-700 font-semibold mt-2 space-y-3">
 <li className="flex gap-2 items-center">
 <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5"/>
 <span>
 Match only vetted, qualified personnel
 </span>
 </li>
 <li className="flex gap-2 items-center">
 <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5"/>
 <span>
 We handle all paperworks and checks
 </span>
 </li>
 <li className="flex gap-2 items-center">
 <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5"/>
 <span>Replace workers quickly if needed</span>
 </li>
 <li className="flex gap-2 items-center">
 <Check className="bg-dark-yellow h-4 w-4 text-dark-blue rounded-full p-0.5"/>
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
 <ArrowRight className="mt-0.5"/>
 </Link>
 </Card>
 </div>
 <div className="flex items-center gap-3 justify-center">
 <Checkbox
 id="terms"
 checked={step3EmployerForm.watch("agreement")}
 onCheckedChange={(checked) =>
 step3EmployerForm.setValue(
"agreement",
 checked === true,
 { shouldValidate: true }
 )
 }
 className={cn(
"",
 step3EmployerForm.formState.errors.agreement &&
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
 {/* <p className="text-gray-500">
 You'll choose your plan and payment terms next
 </p> */}
 </div>
 </div>
 </Card>
 </>
 )}
 </form>
 </>
 )}
 </div>
 </>
 )}

 {!showSignUp && (
 <div className="min-h-screen bg-gray-50 flex items-center justify-center w-full py-10">
 <div className="max-w-4xl mx-8 md:mx-0 w-full text-center">
 <Link href={"/"}>
 <Image
 src={"/logo.png"}
 height={300}
 width={350}
 alt="logo"
 className="w-30 mx-auto"
 />
 </Link>
 {/* Title */}
 <h1 className="text-2xl md:text-3xl font-black text-gray-900 mt-10 mb-12">
 What Brings you to OTK?
 </h1>
 {/* <Button
 variant="outline"
 className="flex items-center mx-auto gap-2 mb-10"
 >
 <Image
 src="/social-icons/google.png"// place a Google logo SVG in your public folder
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

 <h2 className="text-xl md:2xl font-black mt-4">
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

 <h2 className="text-xl md:2xl font-black mt-4">I'm Hiring</h2>
 <p className="text-gray-600">
 Find verified, reliable staff in days - not weeks
 </p>
 </Card>
 </div>

 {/* Sign in */}
 <p className="mt-8 text-gray-600">
 Already have an account?{""}
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
