import { SidebarProvider } from"@/components/ui/sidebar";
import { AppSidebar } from"./AppSidebar";
import { DashboardTopNav } from"./DashboardTopNav";

export function DashboardLayout({
 children,
 type,
}: {
 children: React.ReactNode;
 type:"employer"|"talent"|"affiliate"|"admin";
}) {
 const roleName = type ==="employer"?"Employer": type ==="talent"?"Talent": type === "admin" ? "Admin" : "Affiliate";

 return (
 <SidebarProvider>
 <div className="flex min-h-screen w-full bg-[#fafafa]">
 <AppSidebar type={type} />
 <div className="flex-1 flex flex-col min-w-0">
 <DashboardTopNav userRole={roleName} />
 <main className="flex-1 p-4 md:p-8 overflow-auto">
 <div className="max-w-7xl mx-auto space-y-8">
 {children}
 </div>
 </main>
 </div>
 </div>
 </SidebarProvider>
 );
}
