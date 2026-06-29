"use client";

import {
 Sidebar,
 SidebarContent,
 SidebarGroup,
 SidebarGroupContent,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 SidebarHeader,
 SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementType } from "react";

type NavItem = {
 title: string;
 url: string;
 icon: string | ElementType;
};

type NavGroup = {
 label: string;
 items: NavItem[];
};

const employerNav: NavGroup[] = [
 {
  label: "Main",
  items: [
   { title: "Dashboard", url: "/employer/dashboard", icon: "/icons/home.svg" },
   { title: "Notifications", url: "/employer/notifications", icon: "/icons/notification-bing.svg" },
   { title: "Messages", url: "/employer/messages", icon: "/icons/message.svg" },
   { title: "My Workforce", url: "/employer/workforce", icon: "/icons/profile-2user.svg" },
   { title: "Job Posts", url: "/employer/jobs", icon: "/icons/briefcase.svg" },
   { title: "Wallet", url: "/employer/wallet", icon: "/icons/wallet.svg" },
   { title: "Company Profile", url: "/employer/profile", icon: "/icons/setting-2.svg" },
  ]
 },
 {
  label: "Services & Add-ons",
  items: [
   { title: "Recruiter Rental", url: "/employer/recruiter-rental", icon: "/icons/profile-2user.svg" },
   { title: "Hiring Analytics", url: "/employer/analytics", icon: "/icons/analytics.svg" },
   { title: "Plans & Add-ons", url: "/employer/subscriptions", icon: "/icons/setting-2.svg" },
   { title: "Virtual Events", url: "/employer/events", icon: "/icons/briefcase.svg" },
  ]
 }
];

const talentNav: NavGroup[] = [
 {
  label: "Main",
  items: [
   { title: "Dashboard", url: "/talent/dashboard", icon: "/icons/home.svg" },
   { title: "Notifications", url: "/talent/notifications", icon: "/icons/notification-bing.svg" },
   { title: "Messages", url: "/talent/messages", icon: "/icons/message.svg" },
   { title: "Invites & Offers", url: "/talent/invites", icon: "/icons/profile-2user.svg" },
   { title: "Interviews", url: "/talent/interviews", icon: "/icons/briefcase.svg" },
   { title: "My Jobs", url: "/talent/jobs", icon: "/icons/briefcase.svg" },
   { title: "Work Logs", url: "/talent/worklogs", icon: "/icons/add-square.svg" },
   { title: "Wallet", url: "/talent/wallet", icon: "/icons/wallet.svg" },
   { title: "Profile", url: "/talent/profile", icon: "/icons/setting-2.svg" },
  ]
 },
 {
  label: "Career Services",
  items: [
   { title: "Resume Services", url: "/talent/services", icon: "/icons/briefcase.svg" },
   { title: "Skill Assessments", url: "/talent/assessments", icon: "/icons/analytics.svg" },
   { title: "Job Fairs", url: "/talent/events", icon: "/icons/briefcase.svg" },
   { title: "Learning", url: "/talent/learning", icon: "/icons/analytics.svg" },
  ]
 }
];

const affiliateNav: NavGroup[] = [
 {
  label: "Main",
  items: [
   { title: "Dashboard", url: "/affiliate/dashboard", icon: "/icons/home.svg" },
   { title: "Referrals", url: "/affiliate/referrals", icon: "/icons/profile-2user.svg" },
   { title: "B2B Leads", url: "/affiliate/leads", icon: "/icons/briefcase.svg" },
   { title: "Wallet", url: "/affiliate/wallet", icon: "/icons/wallet.svg" },
  ]
 }
];

const adminNav: NavGroup[] = [
 {
  label: "Main",
  items: [
   { title: "Dashboard", url: "/admin/dashboard", icon: "/icons/home.svg" },
   { title: "Users", url: "/admin/users", icon: "/icons/profile-2user.svg" },
   { title: "Finances", url: "/admin/finances", icon: "/icons/wallet.svg" },
   { title: "Payroll Run", url: "/admin/payroll", icon: "/icons/wallet.svg" },
   { title: "Disputes", url: "/admin/disputes", icon: "/icons/message.svg" },
   { title: "Settings", url: "/admin/settings", icon: "/icons/setting-2.svg" },
  ]
 }
];

export function AppSidebar({ type }: { type: "employer" | "talent" | "affiliate" | "admin" }) {
 const pathname = usePathname();
 const groups = type === "employer" ? employerNav : type === "talent" ? talentNav : type === "affiliate" ? affiliateNav : adminNav;

 return (
 <Sidebar className="bg-white border-0 w-64 hidden md:flex flex-col">
 <SidebarHeader className="p-6">
 <div className="flex items-center gap-2">
 <Image src="/logo.png" alt="OaaS Logo" width={120} height={40} className="object-contain" />
 </div>
 </SidebarHeader>
 <SidebarContent className="px-3">
 {groups.map((group) => (
  <SidebarGroup key={group.label} className="mb-2">
   <SidebarGroupLabel className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{group.label}</SidebarGroupLabel>
   <SidebarGroupContent>
   <SidebarMenu className="gap-2">
   {group.items.map((item) => {
   const isActive = pathname?.startsWith(item.url);
   return (
   <SidebarMenuItem key={item.title}>
   <SidebarMenuButton
   asChild
   isActive={isActive}
   className={`font-semibold text-gray-700 flex gap-2 items-center hover:bg-gray-100 rounded-lg px-4 py-3 h-auto ${
   isActive ? "bg-gray-100 text-[#222364]" : ""
   }`}
   >
   <Link href={item.url} className="flex items-center gap-2 w-full">
   {typeof item.icon === "string" ? (
   <Image src={item.icon} width={20} height={20} alt={item.title} className="w-5" />
   ) : (
   <item.icon className="w-5 h-5" />
   )}
   <span>{item.title}</span>
   </Link>
   </SidebarMenuButton>
   </SidebarMenuItem>
   );
   })}
   </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup>
 ))}
 </SidebarContent>
 <div className="mt-auto p-6 pb-8 space-y-4">
 {type !== "admin" && (
  <button className="w-full bg-[#f2c060] hover:bg-[#e0b050] text-[#222364] font-semibold py-3 rounded-xl transition">
  Upgrade to Pro
  </button>
 )}
 <div className="flex flex-col gap-1 text-gray-500 font-semibold text-sm">
 {type !== "admin" && (
  <Link href={`/${type}/help`} className="hover:bg-gray-100 rounded-lg px-3 py-2.5 flex items-center gap-2 transition">
  <Image src="/icons/message-question.svg" width={20} height={20} alt="Help" className="w-5" />
  <span>Help & Support</span>
  </Link>
 )}
 <button className="text-left hover:bg-gray-100 rounded-lg px-3 py-2.5 flex items-center gap-2 transition">
 <Image src="/icons/logout.svg" width={20} height={20} alt="Logout" className="w-5" />
 <span>Logout</span>
 </button>
 </div>
 </div>
 </Sidebar>
 );
}
