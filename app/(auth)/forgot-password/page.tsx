import { ForgotPasswordPage } from "@/components/client-pages/ForgotPasswordPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Forgot Password | Otk Outsourcing",
  description: "Reset your password",
};

const Page = () => {
  return <ForgotPasswordPage />;
};

export default Page;
