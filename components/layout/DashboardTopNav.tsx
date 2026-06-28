"use client";

import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";

export function DashboardTopNav({ userRole }: { 
 userRole: "Employer" | "Talent" | "Affiliate" | "Admin";
}) {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-10 border-b border-gray-100">
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button 
          onClick={toggleSidebar}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition shrink-0"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 text-sm border-none rounded-lg py-2.5 pl-10 pr-4 outline-none focus:ring-1 focus:ring-[#222364]/20 transition"
          />
        </div>
      </div>
 <div className="flex items-center gap-4 ml-4">
 <button className="relative p-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 transition">
 <Bell className="h-4 w-4"/>
 </button>
 <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 py-1.5 px-2 pr-3 bg-white border border-gray-200 rounded-full transition">
 <Avatar className="h-7 w-7">
 <AvatarImage src="https://i.pravatar.cc/150?u=otk"/>
 <AvatarFallback>OT</AvatarFallback>
 </Avatar>
 <div className="font-semibold text-sm text-gray-800 flex items-center gap-1">
 <span>OTK</span>
 <ChevronDown className="h-3 w-3 text-gray-500"/>
 </div>
 </div>
 </div>
 </header>
 );
}
