import { ResetPasswordPage } from "@/components/client-pages/ResetPasswordPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reset Password | Otk Outsourcing",
  description: "Create a new password",
};

const Page = () => {
  return <ResetPasswordPage />;
};

export default Page;
