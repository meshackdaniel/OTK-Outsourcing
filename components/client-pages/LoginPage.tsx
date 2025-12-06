"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain uppercase")
    .regex(/[a-z]/, "Must contain lowercase")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[^A-Za-z0-9]/, "Must contain a special character"),
});

type formData = z.infer<typeof formSchema>;

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState,
    setError
  } = useForm<formData>({
      resolver: zodResolver(formSchema),
      mode: "onChange"
  });

  const router = useRouter()

  const onSubmit = (data: formData) => {
    setIsLoading(true)
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application.json",
      },
      body: JSON.stringify({ ...data }),
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) {
        setIsLoading(false);
        if (result.message === "user does not exists") {
          document.getElementById("invalidCredentials")?.classList.toggle("hidden");
        }
        throw new Error("Registration failed");
      }
      setIsLoading(false);
      router.push("/dashboard");
    });
  };
  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/logo.jpg"}
          height={300}
          width={350}
          alt="logo"
          className="w-24 mx-auto mt-5"
        />
      </Link>
      <Card className="max-w-lg mx-auto bg-white mt-5 p-8 border-0 shadow-none block">
        <div className="relative">
          {/* Title */}
          <h1 className="text-xl md:text-2xl text-center font-black text-gray-900 mb-5">
            Welcome Back
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
            onSubmit={handleSubmit(onSubmit)}
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
                    formState.errors.email &&
                      "border-red-500 focus-visible:ring-red-500"
                  )}
                  {...register("email")}
                  disabled={isLoading}
                />
              </div>
              {formState.errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {formState.errors.email.message}
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
                    formState.errors.password &&
                      "border-red-500 focus-visible:ring-red-500"
                  )}
                  {...register("password")}
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
              {formState.errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {formState.errors.password.message}
                </p>
              )}
              <p
                className="text-sm text-red-500 mt-1 hidden"
                id="invalidCredentials"
              >
                Incorrect email or password
              </p>
            </div>

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin h-10 w-10" />
              ) : (
                "Continue"
              )}
            </Button>
          </form>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
            Not a user?{" "}
            <Link href="/register" className="text-dark-blue font-semibold">
              Create Account
            </Link>
          </p>
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
  );
};

export default LoginPage;
