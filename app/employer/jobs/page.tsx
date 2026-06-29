"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Plus, ChevronDown } from"lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from"@/components/ui/avatar";
import Link from"next/link";
import { cn } from"@/lib/utils";

export default function EmployerJobs() {
 const jobs = [
 {
 id:"1",
 title:"Backend Engineer",
 location:"Remote, Lagos",
 status:"Job Open",
 statusType:"open",
 posted:"Posted 2 days ago",
 stats: { views: 2567, apps: 56, matched: 12, shortlisted: 2, interviewed: 0, hired: 0 }
 },
 {
 id:"2",
 title:"Mechanical Engineer",
 location:"Onsite, Abuja",
 status:"In Draft",
 statusType:"draft",
 posted:"Posted 2 days ago",
 stats: { views: 2567, apps: 56, matched: 12, shortlisted: 2, interviewed: 0, hired: 0 }
 },
 {
 id:"3",
 title:"Data Analyst",
 location:"Onsite, Abuja",
 status:"Job Closed",
 statusType:"closed",
 posted:"Posted 2 days ago",
 stats: { views: 2567, apps: 56, matched: 12, shortlisted: 2, interviewed: 0, hired: 0 }
 }
 ];

 return (
 <DashboardLayout type="employer">
 <div className="space-y-6">
 
 {/* Header & Filters */}
 <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-2">
 <h1 className="text-2xl font-black text-[#222364]">Job Posts</h1>
 </div>

 <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
 <div className="flex items-center gap-4 w-full md:w-auto">
 <span className="text-gray-600 font-medium">Filter By :</span>
 <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition">
 All Job Posts <ChevronDown className="w-4 h-4 text-gray-400"/>
 </button>
 <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition">
 Most Recent <ChevronDown className="w-4 h-4 text-gray-400"/>
 </button>
 </div>
 <Button className="bg-[#222364] text-white hover:bg-[#1a1a4b] rounded-xl px-6 h-12 w-full md:w-auto"asChild>
 <Link href="/employer/jobs/create">
 <Plus className="w-5 h-5 mr-2"/>
 Create Job
 </Link>
 </Button>
 </div>

 {/* Job Cards */}
 <div className="space-y-4">
 {jobs.map((job) => (
 <div key={job.id} className="bg-white rounded-2xl p-6 border border-gray-100">
 <div className="flex items-start justify-between border-b border-gray-100 pb-6 mb-6">
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
 <span className="text-[#222364] font-bold text-sm">OaaS</span>
 </div>
 <div>
 <h3 className="font-black text-gray-900 text-lg">{job.title}</h3>
 <div className="flex items-center gap-3 mt-1">
 <p className="text-gray-500 text-sm">{job.location}</p>
 <span className={cn(
"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
 job.statusType ==="open"?"bg-green-50 text-green-700 border-green-200":
 job.statusType ==="draft"?"bg-gray-50 text-gray-700 border-gray-200":
"bg-red-50 text-red-700 border-red-200"
 )}>
 <span className={cn(
"w-1.5 h-1.5 rounded-full",
 job.statusType ==="open"?"bg-green-600":
 job.statusType ==="draft"?"bg-gray-500":
"bg-red-600"
 )}></span>
 {job.status}
 </span>
 </div>
 </div>
 </div>
 <span className="text-gray-500 text-sm">{job.posted}</span>
 </div>

 <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 flex-1 w-full">
 <div>
 <p className="text-gray-500 text-sm mb-1">Views :</p>
 <p className={cn("font-bold text-xl", job.stats.views > 0 ?"text-[#222364]":"text-gray-400")}>{job.stats.views}</p>
 </div>
 <div>
 <p className="text-gray-500 text-sm mb-1">Applications :</p>
 <p className={cn("font-bold text-xl", job.stats.apps > 0 ?"text-[#222364]":"text-gray-400")}>{job.stats.apps}</p>
 </div>
 <div>
 <p className="text-gray-500 text-sm mb-1">Matched :</p>
 <p className={cn("font-bold text-xl", job.stats.matched > 0 ?"text-[#222364]":"text-gray-400")}>{job.stats.matched}</p>
 </div>
 <div>
 <p className="text-gray-500 text-sm mb-1">Shortlisted :</p>
 <p className={cn("font-bold text-xl", job.stats.shortlisted > 0 ?"text-[#222364]":"text-gray-400")}>{job.stats.shortlisted}</p>
 </div>
 <div>
 <p className="text-gray-500 text-sm mb-1">Interviewed :</p>
 <p className={cn("font-bold text-xl", job.stats.interviewed > 0 ?"text-[#222364]":"text-gray-400")}>{job.stats.interviewed}</p>
 </div>
 <div>
 <p className="text-gray-500 text-sm mb-1">Hired :</p>
 <p className={cn("font-bold text-xl", job.stats.hired > 0 ?"text-[#222364]":"text-gray-400")}>{job.stats.hired}</p>
 </div>
 </div>
              <Button variant="outline" className="border-[#222364] text-[#222364] hover:bg-gray-50 rounded-xl px-8 h-12 shrink-0" asChild>
                <Link href={`/employer/jobs/${job.id}`}>View Job</Link>
              </Button>
 </div>
 </div>
 ))}
 </div>

 </div>
 </DashboardLayout>
 );
}
