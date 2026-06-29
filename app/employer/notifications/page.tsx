"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Bell, Briefcase, FileText, CheckCircle2, MoreHorizontal } from"lucide-react";
import { cn } from"@/lib/utils";
import Link from "next/link";

export default function EmployerNotifications() {
 const notifications = [
 {
 id: 1,
 title:"New application received",
 desc:"Amanda Temi has applied for the Mechanical Engineer role.",
 time:"2 mins ago",
 icon: Briefcase,
 color:"bg-gray-50 text-[#222364]",
 unread: true,
 actionText: "View Application",
 actionLink: "/employer/jobs/1/application/1"
 },
 {
 id: 2,
 title:"Daily work log submitted",
 desc:"Bliss Maurice submitted a daily work log for Lasioweb Enterprise.",
 time:"1 hour ago",
 icon: FileText,
 color:"bg-amber-50 text-amber-600",
 unread: true,
 actionText: "View Worklog",
 actionLink: "/employer/workforce/1"
 },
 {
 id: 3,
 title:"Candidate accepted interview",
 desc:"Alex Nwosu accepted the technical interview invite for tomorrow.",
 time:"Yesterday",
 icon: CheckCircle2,
 color:"bg-green-50 text-green-600",
 unread: false
 },
 {
 id: 4,
 title:"System update",
 desc:"OaaS platform has been updated with new wallet features.",
 time:"Oct 22",
 icon: Bell,
 color:"bg-gray-50 text-gray-600",
 unread: false
 }
 ];

 return (
 <DashboardLayout type="employer">
 <div className="space-y-6">
 
 <div className="flex items-center justify-between">
 <h1 className="text-2xl font-black text-[#222364]">Notifications</h1>
 <Button variant="outline"className="text-gray-600 border-gray-200 rounded-xl hover:bg-gray-50 h-10 px-4">
 Mark all as read
 </Button>
 </div>

 <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
 {notifications.map((notif) => (
 <div 
 key={notif.id} 
 className={cn(
"p-6 flex items-start gap-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition cursor-pointer relative",
 notif.unread ?"bg-white":"bg-gray-50/30 opacity-75"
 )}
 >
 
 
 <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0", notif.color)}>
 <notif.icon className="w-5 h-5"/>
 </div>
 
 <div className="flex-1 min-w-0 pt-1">
 <div className="flex flex-col md:flex-row justify-between items-start mb-1">
 <h3 className={cn("text-base font-bold truncate pr-4", notif.unread ?"text-gray-900":"text-gray-700")}>
 {notif.title}
 </h3>
 <span className="text-xs font-medium text-gray-400 whitespace-nowrap pt-1">
 {notif.time}
 </span>
 </div>
 <p className="text-sm text-gray-600 pr-12">{notif.desc}</p>
  {notif.actionText && notif.actionLink && (
    <div className="mt-3">
      <Link href={notif.actionLink}>
        <Button variant="outline" size="sm" className="rounded-lg border-[#222364] text-[#222364] hover:bg-gray-50 h-8 text-xs font-bold px-4">
          {notif.actionText}
        </Button>
      </Link>
    </div>
  )}
 </div>

 <button className="text-gray-400 hover:text-gray-600 pt-1 shrink-0 absolute right-6">
 <MoreHorizontal className="w-5 h-5"/>
 </button>
 </div>
 ))}
 </div>

 </div>
 </DashboardLayout>
 );
}
