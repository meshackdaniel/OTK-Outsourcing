"use client"
import Image from "next/image";
import React, { useState, Suspense } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Eye, EyeOff, LoaderCircle, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain uppercase")
    .regex(/[a-z]/, "Must contain lowercase")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[^A-Za-z0-9]/, "Must contain a special character"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type formData = z.infer<typeof formSchema>;

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState,
  } = useForm<formData>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const onSubmit = (data: formData) => {
    setIsLoading(true);
    // Simulate API call using token
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
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
      <Card className="max-w-lg mx-4 md:mx-auto bg-white mt-8 md:mt-5 py-8 md:py-8 px-5 md:px-8 border-0 block">
        <div className="relative">
          {/* Title */}
          <h1 className="text-2xl md:text-2xl text-center font-black text-gray-900 mb-2">
            Create New Password
          </h1>
          
          {!isSubmitted ? (
            <>
              <p className="text-center font-medium text-gray-500 mb-8">
                Your new password must be different from previous used passwords.
              </p>
              
              {!token && (
                <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-medium mb-6">
                  Invalid or missing reset token. Please request a new password reset link.
                </div>
              )}

              <form
                key="step1"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Password */}
                <div>
                  <div className="relative mt-2">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="New password"
                      className={cn(
                        "pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                        formState.errors.password &&
                          "border-red-500 focus-visible:ring-red-500"
                      )}
                      {...register("password")}
                      disabled={isLoading || !token}
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
                </div>

                {/* Confirm Password */}
                <div>
                  <div className="relative mt-2">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      className={cn(
                        "pl-5 h-14 rounded-2xl font-semibold bg-gray-50/50 border-gray-300 focus:border-0 focus:outline-0",
                        formState.errors.confirmPassword &&
                          "border-red-500 focus-visible:ring-red-500"
                      )}
                      {...register("confirmPassword")}
                      disabled={isLoading || !token}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {formState.errors.confirmPassword && (
                    <p className="text-sm text-red-500 mt-1">
                      {formState.errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue"
                  disabled={isLoading || !token}
                >
                  {isLoading ? (
                    <LoaderCircle className="animate-spin h-10 w-10" />
                  ) : (
                    "Reset Password"
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="w-16 h-16 bg-[#f2c060]/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#f2c060]" />
              </div>
              <p className="text-center text-gray-600 mb-8 font-medium">
                Your password has been successfully reset. You can now log in with your new password.
              </p>
              <Link href="/login" className="w-full">
                <Button className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue">
                  Log In Now
                </Button>
              </Link>
            </div>
          )}
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

export const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoaderCircle className="w-8 h-8 animate-spin text-dark-blue"/></div>}>
      <ResetPasswordForm />
    </Suspense>
  )
}
