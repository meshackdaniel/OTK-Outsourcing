import { DashboardLayout } from"@/components/layout/DashboardLayout";
import Link from"next/link";
import { Button } from"@/components/ui/button";

export default function TalentNotFound() {
 return (
 <DashboardLayout type="talent">
 <div className="h-full flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-white rounded-2xl border border-gray-100">
 <h1 className="text-7xl md:text-9xl font-black text-gray-200 mb-6">404</h1>
 <h2 className="text-2xl md:text-3xl font-black text-[#f2c060] mb-4">Page Not Found</h2>
 <p className="text-gray-500 mb-10 max-w-md text-base leading-relaxed">
 We couldn't find the page you were looking for in the Talent Portal. It might have been moved or removed.
 </p>
 <Link href="/talent/dashboard">
 <Button className="h-12 px-8 bg-[#f2c060] hover:bg-[#dcae53] text-gray-900 rounded-xl font-semibold">
 Return to Dashboard
 </Button>
 </Link>
 </div>
 </DashboardLayout>
 );
}
