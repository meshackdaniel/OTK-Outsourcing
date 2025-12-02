"use client";

import { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  ArrowLeft,
  Building2,
  ArrowRight,
} from "lucide-react";
import Cookies from "js-cookie";

// ---------------------------------------------------------------------
// Password Strength
// ---------------------------------------------------------------------
const getPasswordStrength = (password: string) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
};

const strengthText = ["Too weak", "Weak", "Fair", "Good", "Strong"];
const strengthColor = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-emerald-500",
  "bg-primary-600",
];

// ---------------------------------------------------------------------
// Schemas
// ---------------------------------------------------------------------
const step1Schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
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
    .string()
    .length(6, "Code must be 6 digits")
    .regex(/^\d+$/, "Only numbers allowed"),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

type Role = "personnel" | "client" | null;

// ---------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------
export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [savedFullName, setSavedFullName] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  const toggleRole = (role: Role) => {
    setSelectedRole(selectedRole === role ? null : role);
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

  const password = step1Form.watch("password", "");

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(password));
  }, [password]);

  // -----------------------------------------------------------------
  // Step 1 Submit → Send OTP
  // -----------------------------------------------------------------
  const onStep1Submit = async (data: Step1Data) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500)); // Simulate API
    fetch("/api/check-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application.json",
      },
      body: JSON.stringify({ ...data, role: selectedRole }),
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) {
        setIsLoading(false);
        step1Form.setError("email", { message: "User already exists" });
        throw new Error("Registration failed");
      }
      setSavedEmail(data.email);
      setSavedPassword(data.password);
      setSavedFullName(data.fullName);
      setStep(2);
      setIsLoading(false);
    });
  };

  // -----------------------------------------------------------------
  // Step 2 Submit → Complete Registration
  // -----------------------------------------------------------------
  const onStep2Submit = async (data: Step2Data) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application.json",
      },
      body: JSON.stringify({
        ...data,
        email: savedEmail,
        password: savedPassword,
        fullName: savedFullName,
      }),
    }).then(async (res) => {
      const result = await res.json();
      if (result.message === "Invalid verification code") {
        step2Form.setError("code", { message: "Invalid verification code" });
        setIsLoading(false);
        throw new Error("Registration failed");
      }
      if (!res.ok) {
        setIsLoading(false);
        throw new Error("Registration failed");
      }
      router.push("/");
      router.refresh();
      setStep(2);
      setIsLoading(false);
    });
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

  const handleSetclient = (role: string) => {
    Cookies.set("role", role, { path: "/", expires: 1 }); // 1 day
    setShowSignUp(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-26">
      {/* Floating Orbs */}
      {showSignUp && (
        <>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-500/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 w-full max-w-lg">
            <Card className="backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/10 rounded-xl" />

              <div className="relative p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-600 to-primary-600 rounded-2xl shadow-lg mb-4">
                    <UserPlus className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                    {step === 1 ? "Create Your Account" : "Verify Your Email"}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {step === 1
                      ? "Join OTK Outsourcing today"
                      : `We sent a code to ${savedEmail}`}
                  </p>
                </div>

                {/* Step 1: Main Form */}
                {step === 1 && (
                  <form
                    key="step1"
                    onSubmit={step1Form.handleSubmit(onStep1Submit)}
                    className="space-y-6"
                  >
                    {/* Full Name */}
                    <div>
                      <Label
                        htmlFor="fullName"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Full Name
                      </Label>
                      <div className="relative mt-2">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="fullName"
                          placeholder="John Doe"
                          className="pl-11 h-12 bg-gray-50/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:border-primary-500"
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

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Email Address
                      </Label>
                      <div className="relative mt-2">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="pl-11 h-12 bg-gray-50/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:border-primary-500"
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

                    {/* Password */}
                    <div>
                      <Label
                        htmlFor="password"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Password
                      </Label>
                      <div className="relative mt-2">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-11 pr-12 h-12 bg-gray-50/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:border-primary-500"
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
                      {password && (
                        <div className="mt-3 space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Strength</span>
                            <span className="font-medium">
                              {strengthText[Math.min(passwordStrength, 4)]}
                            </span>
                          </div>
                          <Progress
                            value={(passwordStrength / 5) * 100}
                            className={`h-2 ${
                              strengthColor[Math.min(passwordStrength - 1, 4)]
                            }`}
                          />
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-lg font-medium bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 shadow-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? <>Sending code...</> : "Continue"}
                    </Button>
                  </form>
                )}

                {/* Step 2: Confirmation Code */}
                {step === 2 && (
                  <form
                    key="step2"
                    onSubmit={step2Form.handleSubmit(onStep2Submit)}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Enter the 6-digit code sent to{" "}
                        <strong>{savedEmail}</strong>
                      </p>
                    </div>
                    <div className="flex justify-center gap-3">
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
                          ref={(el) => (inputsRef.current[i] = el)}
                          className="w-14 h-14 text-center text-2xl font-bold"
                          disabled={false}
                        />
                      ))}
                    </div>
                    {step2Form.formState.errors.code && (
                      <p className="text-sm text-red-500 mt-1">
                        {step2Form.formState.errors.code.message}
                      </p>
                    )}
                    {/* <div>
                    <Label htmlFor="code">Verification Code</Label>
                    <Input
                      id="code"
                      placeholder="123456"
                      className="text-center text-2xl tracking-widest h-14"
                      maxLength={6}
                      {...step2Form.register("code")}
                      disabled={isLoading}
                    />
                    {step2Form.formState.errors.code && (
                      <p className="text-sm text-red-500 mt-1">
                        {step2Form.formState.errors.code.message}
                      </p>
                    )}
                  </div> */}

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setStep(1)}
                        disabled={isLoading}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-linear-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700"
                        disabled={isLoading}
                      >
                        {isLoading ? "Continue" : "Verify & Create Account"}
                      </Button>
                    </div>
                  </form>
                )}

                {/* Social & Login Link */}
                {step === 1 && (
                  <>
                    <div className="relative my-8">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300 dark:border-gray-700" />
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="bg-white dark:bg-gray-900 px-4 text-gray-500">
                          Or sign up with
                        </span>
                      </div>
                    </div>

                    {/* <OAuthSignIn selectedRole={selectedRole} /> */}

                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
                      Already have an account?{" "}
                      <Link href="/login">Sign in</Link>
                    </p>
                  </>
                )}
              </div>
            </Card>
          </div>
        </>
      )}

      {!showSignUp && (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              Join OTK Outsourcing
            </h1>

            {/* Role Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* personnel */}
              <Card
                className={`
              ${
                selectedRole === "personnel"
                  ? "border-primary-500 bg-primary-50 shadow-xl scale-105"
                  : "border-gray-200 hover:border-gray-400 hover:shadow-lg"
              }
            `}
                onClick={() => toggleRole("personnel")}
              >
                <div className="mb-8">
                  <div
                    className={`
                ${
                  selectedRole === "personnel"
                    ? "bg-primary-600"
                    : "bg-gray-200"
                }
              `}
                  >
                    <User
                      className={`w-10 h-10 ${
                        selectedRole === "personnel"
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  I'm Looking for Work
                </h2>
                <p className="text-gray-600">
                  Provide services and grow your wealth
                </p>
              </Card>

              {/* client */}
              <Card
                className={`
              ${
                selectedRole === "client"
                  ? "border-accent-500 bg-accent-50 shadow-xl scale-105"
                  : "border-gray-200 hover:border-gray-400 hover:shadow-lg"
              }
            `}
                onClick={() => toggleRole("client")}
              >
                <div className="mb-8">
                  <div
                    className={`
                ${selectedRole === "client" ? "bg-accent-600" : "bg-gray-200"}
              `}
                  >
                    <Building2
                      className={`w-10 h-10 ${
                        selectedRole === "client"
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3">I'm Hiring</h2>
                <p className="text-gray-600">Hire verified personnel</p>
              </Card>
            </div>

            {/* Continue Button */}
            <div className="mt-12">
              <Button
                size="lg"
                asChild
                disabled={!selectedRole}
                className="w-full max-w-sm text-lg py-7"
                type="button"
                onClick={() => {
                  if (selectedRole === "personnel") {
                    handleSetclient("personnel");
                  } else {
                    handleSetclient("client");
                  }
                }}
              >
                <div>
                  Continue as{" "}
                  {selectedRole === "personnel" ? "personnel" : "client"}
                  <ArrowRight className="ml-3 h-5 w-5" />
                </div>
              </Button>
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
