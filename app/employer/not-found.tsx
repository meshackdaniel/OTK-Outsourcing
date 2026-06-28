import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmployerNotFound() {
  return (
    <DashboardLayout type="employer">
      <div className="h-full flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <h1 className="text-7xl md:text-9xl font-black text-gray-200 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#222364] mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-10 max-w-md text-base leading-relaxed">
          The page you are looking for does not exist in the Employer Portal, or you might not have the correct permissions to view it.
        </p>
        <Link href="/employer/dashboard">
          <Button className="h-12 px-8 bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl font-semibold">
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </DashboardLayout>
  );
}
