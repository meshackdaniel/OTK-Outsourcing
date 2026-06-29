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
import { LoaderCircle, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  email: z.email("Please enter a valid email"),
});

type formData = z.infer<typeof formSchema>;

export const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
    // Simulate API call
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
            Reset Password
          </h1>
          
          {!isSubmitted ? (
            <>
              <p className="text-center font-medium text-gray-500 mb-8">
                Enter your email address and we'll send you a link to reset your password.
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

                <Button
                  type="submit"
                  className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <LoaderCircle className="animate-spin h-10 w-10" />
                  ) : (
                    "Send Reset Link"
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
                If an account exists for that email, we've sent password reset instructions.
              </p>
              <Link href="/login" className="w-full">
                <Button className="w-full h-14 rounded-2xl text-lg font-medium bg-dark-blue">
                  Return to Login
                </Button>
              </Link>
            </div>
          )}
          
          {!isSubmitted && (
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
              Remembered your password?{" "}
              <Link href="/login" className="text-dark-blue font-semibold hover:underline">
                Log In
              </Link>
            </p>
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
