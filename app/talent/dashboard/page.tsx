"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { ChevronDown } from"lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from"@/components/ui/avatar";
import { cn } from"@/lib/utils";

export default function TalentDashboard() {
 const jobs = [
 {
 id:"1",
 title:"Backend Engineer",
 location:"Remote, Lagos",
 status:"Active",
 statusType:"active",
 started:"Started 2 days ago",
 skills: ["AutoCad","SolidWorks","Thermodynamics","Design"],
 desc:"I'm a mechanical engineer who loves solving real-world problems through design, motion, and innovation. Over the years, I've worked on projects ranging from automated systems to sustainable product designs, blending technical precision."
 },
 {
 id:"2",
 title:"Backend Engineer",
 location:"Remote, Lagos",
 status:"Completed",
 statusType:"completed",
 started:"Started 2 days ago",
 skills: ["AutoCad","SolidWorks","Thermodynamics","Design"],
 desc:"I'm a mechanical engineer who loves solving real-world problems through design, motion, and innovation. Over the years, I've worked on projects ranging from automated systems to sustainable product designs, blending technical precision."
 },
 {
 id:"3",
 title:"Backend Engineer",
 location:"Remote, Lagos",
 status:"Active",
 statusType:"active",
 started:"Started 2 days ago",
 skills: ["AutoCad","SolidWorks","Thermodynamics","Design"],
 desc:"I'm a mechanical engineer who loves solving real-world problems through design, motion, and innovation. Over the years, I've worked on projects ranging from automated systems to sustainable product designs, blending technical precision."
 }
 ];

 return (
 <DashboardLayout type="talent">
 <div className="space-y-6">
 
 <h1 className="text-2xl font-black text-gray-900">My Jobs</h1>

 <div className="bg-white rounded-2xl p-6 border border-gray-100">
 <div className="flex items-center gap-4">
 <span className="text-gray-900 font-bold">Filter By :</span>
 <button className="flex items-center gap-2 bg-white border border-gray-200 text-[#222364] font-semibold px-4 py-2 rounded-xl hover:bg-gray-50 transition">
 Most Recent <ChevronDown className="w-4 h-4"/>
 </button>
 </div>
 </div>

 <div className="space-y-4">
 {jobs.map((job) => (
 <div key={job.id} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
 
 <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
 <div className="flex items-start gap-4">
 <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
 <span className="text-[#222364] font-bold text-sm">OaaS</span>
 </div>
 <div>
 <h3 className="font-black text-gray-900 text-lg mb-1">{job.title}</h3>
 <div className="flex items-center gap-3">
 <p className="text-gray-500 text-sm">{job.location}</p>
 <span className={cn(
"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border",
 job.statusType ==="active"?"bg-green-50 text-green-700 border-green-200":
"bg-green-50 text-green-700 border-green-200"
 )}>
 <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
 {job.status}
 </span>
 </div>
 </div>
 </div>

 <div className="flex flex-col items-start md:items-end gap-3">
 <span className="text-gray-600 text-sm font-semibold">{job.started}</span>
 <Button variant="outline"className="border-[#222364] text-[#222364] hover:bg-gray-50 rounded-xl px-8 h-10 font-bold">
 View More
 </Button>
 </div>
 </div>

 <div className="flex flex-wrap gap-2 mb-6">
 {job.skills.map((skill, i) => (
 <span key={i} className="px-4 py-1.5 border border-gray-200 text-gray-800 rounded-lg text-sm font-semibold bg-white">
 {skill}
 </span>
 ))}
 </div>

 <p className="text-gray-600 font-medium leading-relaxed">
 {job.desc}
 </p>

 </div>
 ))}
 </div>

 </div>
 </DashboardLayout>
 );
}
