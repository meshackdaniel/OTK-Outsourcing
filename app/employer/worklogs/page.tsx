"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Checkbox } from"@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from"@/components/ui/avatar";
import { Calendar, Activity, ShieldCheck, FileText, ChevronRight } from"lucide-react";
import Link from"next/link";
import { cn } from"@/lib/utils";

export default function EmployerWorkforce() {
 const logs = Array(5).fill({
 id:"1",
 name:"Bliss Maurice",
 project:"Lasioweb website",
 duration:"7hr 30min",
 status:"Pending verification"
 });

 return (
 <DashboardLayout type="employer">
 <div className="space-y-6">
 
 {/* Metrics Row */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
 <div className="flex items-center gap-2 text-gray-900 mb-4 font-bold">
 <Calendar className="w-5 h-5 text-[#222364]"/>
 <span>Attendance rate</span>
 </div>
 <div className="text-5xl font-bold text-gray-900 mb-4 text-center">92%</div>
 <div className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded mx-auto">
 + 12 % vs last month
 </div>
 </div>
 <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
 <div className="flex items-center gap-2 text-gray-900 mb-4 font-bold">
 <Activity className="w-5 h-5 text-[#f2c060]"/>
 <span>Productivity</span>
 </div>
 <div className="text-5xl font-bold text-gray-900 mb-4 text-center">84%</div>
 <div className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded mx-auto">
 + 12 % vs last month
 </div>
 </div>
 <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
 <div className="flex items-center gap-2 text-gray-900 mb-4 font-bold">
 <ShieldCheck className="w-5 h-5 text-gray-500"/>
 <span>SLA compliance</span>
 </div>
 <div className="text-5xl font-bold text-gray-900 mb-4 text-center">94%</div>
 <div className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded mx-auto">
 + 11 % vs last month
 </div>
 </div>
 <div className="bg-[#222364] rounded-2xl p-6 border border-[#222364] flex flex-col justify-between relative overflow-hidden">
 <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
 <FileText className="w-5 h-5 text-white"/>
 </div>
 <div>
 <p className="text-gray-300 text-xs font-bold uppercase tracking-wider mb-2">Awaiting Action</p>
 <div className="text-4xl font-bold text-white mb-6">12 Logs</div>
 </div>
 <Button className="w-full bg-white text-[#222364] hover:bg-gray-50 font-bold h-12 rounded-xl">
 Review Now
 </Button>
 </div>
 </div>

 {/* Daily Work Logs Table */}
 <div className="bg-white rounded-2xl p-6 border border-gray-100">
 <div className="flex items-center justify-between mb-6">
 <h2 className="text-xl font-black text-gray-900">Daily work logs</h2>
 <Button variant="outline"className="border-gray-200 text-gray-700 rounded-xl px-6 h-10">
 View All
 </Button>
 </div>

 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-gray-100">
 <th className="pb-4 w-12 px-4">
 <Checkbox className="rounded bg-white border-gray-300"/>
 </th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Employee</th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Project</th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Duration</th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Status</th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Action</th>
 </tr>
 </thead>
 <tbody>
 {logs.map((log, i) => (
 <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition">
 <td className="py-4 px-4">
 <Checkbox className="rounded bg-white border-gray-300"/>
 </td>
 <td className="py-4 px-4">
 <div className="flex items-center gap-3">
 <Avatar className="h-8 w-8">
 <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
 <AvatarFallback>BM</AvatarFallback>
 </Avatar>
 <span className="font-bold text-gray-900 text-sm">{log.name}</span>
 </div>
 </td>
 <td className="py-4 px-4 text-gray-600 text-sm">{log.project}</td>
 <td className="py-4 px-4 text-gray-600 text-sm">{log.duration}</td>
 <td className="py-4 px-4">
 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-green-700 border border-green-200">
 <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
 {log.status}
 </span>
 </td>
 <td className="py-4 px-4">
 <Link href={`/employer/workforce/${log.id}`} className="flex items-center gap-1 text-gray-600 text-sm hover:text-[#222364]">
 Approve <ChevronRight className="w-4 h-4"/>
 </Link>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>

 </div>
 </DashboardLayout>
 );
}
