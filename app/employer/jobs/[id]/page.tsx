"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ArrowLeft, Briefcase, MapPin, Search, ChevronDown, 
  List, SlidersHorizontal, ArrowUpDown, FileText, Zap
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const candidatesData = [
  {
    id: 1,
    name: "Bliss Maurice",
    avatar: "/avatars/1.png",
    verified: true,
    stage: "Applied",
    stageColor: "bg-blue-500",
    match: 85,
    matchColor: "text-green-500",
    experience: "3 years",
    email: "blissmaurice@gmail.com"
  },
  {
    id: 2,
    name: "Aisha Bello",
    avatar: "/avatars/2.png",
    verified: true,
    stage: "Applied",
    stageColor: "bg-blue-500",
    match: 68,
    matchColor: "text-orange-500",
    experience: "3 years",
    email: "blissmaurice@gmail.com"
  },
  {
    id: 3,
    name: "Emeka Ibe",
    avatar: "/avatars/3.png",
    verified: true,
    stage: "Shortlisted",
    stageColor: "bg-orange-500",
    match: 99,
    matchColor: "text-green-500",
    experience: "3 years",
    email: "blissmaurice@gmail.com"
  },
  {
    id: 4,
    name: "Wilson Maurice",
    avatar: "/avatars/4.png",
    verified: true,
    stage: "First Interview",
    stageColor: "bg-gray-400",
    match: 68,
    matchColor: "text-orange-500",
    experience: "3 years",
    email: "blissmaurice@gmail.com"
  },
  {
    id: 5,
    name: "Aisha Bello",
    avatar: "/avatars/5.png",
    verified: true,
    stage: "First Interview",
    stageColor: "bg-gray-400",
    match: 92,
    matchColor: "text-green-500",
    experience: "3 years",
    email: "blissmaurice@gmail.com"
  }
];

export default function EmployerJobDetailsPage() {
  const [activeTab, setActiveTab] = useState("candidates");

  return (
    <DashboardLayout type="employer">
      
      {/* Page Header Area */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/employer/jobs">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 transition">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
            <Link href="/employer/jobs" className="hover:text-[#222364]">Job Posts</Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-400">Backend Engineer</span>
          </div>
        </div>

        {/* Title & Badges */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Backend Engineer</h1>
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
            <Briefcase className="w-5 h-5" />
            Full Time
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
            <MapPin className="w-5 h-5" />
            Remote (Lagos, Nigeria)
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-100">
          <button 
            onClick={() => setActiveTab("candidates")}
            className={`pb-4 text-sm font-bold transition ${activeTab === "candidates" ? "text-[#222364] border-b-2 border-[#222364]" : "text-gray-500 hover:text-gray-900"}`}
          >
            Candidates 67
          </button>
          <button 
            onClick={() => setActiveTab("job-post")}
            className={`pb-4 text-sm font-bold transition ${activeTab === "job-post" ? "text-[#222364] border-b-2 border-[#222364]" : "text-gray-500 hover:text-gray-900"}`}
          >
            Job Post
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "candidates" && (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12">
          
          {/* Candidates Header */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-gray-500 text-sm font-medium">67 Candidates</h2>
          </div>

          {/* Toolbar */}
          <div className="p-4 flex flex-col xl:flex-row items-center justify-between gap-4 bg-gray-50/50">
            
            {/* View Toggle & Search */}
            <div className="flex items-center gap-4 w-full xl:w-auto">
              <Button variant="outline" className="h-11 rounded-xl border-gray-200 bg-white text-[#222364] font-bold px-4">
                <List className="w-4 h-4 mr-2" />
                List View
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <div className="relative flex-1 xl:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  placeholder="Search..." 
                  className="pl-11 h-11 rounded-xl border-gray-200 bg-white text-gray-900"
                />
              </div>
            </div>

            {/* Filters & Sorting */}
            <div className="flex items-center gap-3 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0">
              <Button variant="outline" className="h-11 rounded-xl border-gray-200 bg-white text-[#222364] font-bold px-4 shrink-0">
                Showing 8/8 stages
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="h-11 rounded-xl border-gray-200 bg-white text-[#222364] font-bold px-4 shrink-0">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="h-11 rounded-xl border-gray-200 bg-white text-[#222364] font-bold px-4 shrink-0">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-gray-50/80 border-y border-gray-100">
                  <th className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Candidate</th>
                  <th className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Hiring Stage</th>
                  <th className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Match</th>
                  <th className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Resume</th>
                  <th className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Experience</th>
                  <th className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Application</th>
                  <th className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {candidatesData.map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-gray-50/50 transition bg-white">
                    <td className="py-5 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border border-gray-100">
                          <AvatarImage src={candidate.avatar} />
                          <AvatarFallback className="bg-[#222364] text-white text-xs">
                            {candidate.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium text-gray-900 text-sm">{candidate.name}</span>
                          {candidate.verified && (
                            <div className="w-4 h-4 rounded-full bg-[#f2c060] flex items-center justify-center shrink-0">
                              <span className="text-[#222364] text-[10px] font-black">✓</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${candidate.stageColor}`}></span>
                        <span className="font-medium text-gray-900 text-sm">{candidate.stage}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 whitespace-nowrap">
                      <div className={`flex items-center gap-1.5 font-medium text-sm ${candidate.matchColor}`}>
                        <Zap className="w-4 h-4 fill-current" />
                        {candidate.match} %
                      </div>
                    </td>
                    <td className="py-5 px-6 whitespace-nowrap">
                      <Link href="#" className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Resume <FileText className="w-4 h-4" />
                      </Link>
                    </td>
                    <td className="py-5 px-6 text-sm text-gray-600 font-medium whitespace-nowrap">
                      {candidate.experience}
                    </td>
                    <td className="py-5 px-6 whitespace-nowrap">
                      <Link href={`/employer/jobs/1/application/${candidate.id}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View application
                      </Link>
                    </td>
                    <td className="py-5 px-6 text-sm text-gray-600 font-medium whitespace-nowrap">
                      {candidate.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      )}

      {activeTab === "job-post" && (
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Job Description</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
            <p>We are seeking an experienced Backend Engineer to join our growing engineering team. You will be responsible for designing and building highly scalable backend systems and APIs.</p>
            <h3 className="font-bold text-gray-900 text-base mt-8 mb-4">Key Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Design, build, and maintain scalable APIs and microservices.</li>
              <li>Collaborate with frontend teams to integrate user-facing elements.</li>
              <li>Optimize applications for maximum speed and scalability.</li>
              <li>Implement security and data protection best practices.</li>
            </ul>
            <h3 className="font-bold text-gray-900 text-base mt-8 mb-4">Required Skills & Qualifications</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-lg">Node.js</span>
              <span className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-lg">TypeScript</span>
              <span className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-lg">PostgreSQL</span>
              <span className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-lg">AWS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Budget</p>
                <p className="font-bold text-gray-900">₦500,000 / month</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Experience Level</p>
                <p className="font-bold text-gray-900">Intermediate (3-5 years)</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </DashboardLayout>
  );
}
