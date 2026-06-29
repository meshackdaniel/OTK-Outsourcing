"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const jobs = [
  {
    id: "1",
    title: "Senior UI/UX Designer",
    company: "Nexus Global",
    location: "Remote, Lagos",
    status: "Active",
    started: "Started 14 days ago",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    description: "Redesign the enterprise dashboard for Nexus Global Logistics. The primary goal is to simplify the multi-tier shipment tracking interface while maintaining full data transparency for regional managers."
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "TechNova Solutions",
    location: "Remote, Lagos",
    status: "Completed",
    started: "Started 2 months ago",
    skills: ["Node.js", "PostgreSQL", "AWS", "Microservices"],
    description: "Architect and implement scalable backend APIs to support the new mobile application. Ensured sub-100ms response times and integrated robust security protocols for handling sensitive user data."
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "BuildRight Logistics",
    location: "Hybrid, Abuja",
    status: "Active",
    started: "Started 2 days ago",
    skills: ["React", "TypeScript", "TailwindCSS", "Next.js"],
    description: "Collaborating with the design team to build pixel-perfect, responsive web interfaces. Integrating with existing backend services to display real-time logistics tracking data."
  }
];

export default function MyJobsPage() {
  return (
    <DashboardLayout type="talent">
      <div>
        <div>
          <h1 className="text-3xl font-black text-gray-900">My Jobs</h1>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border-0 flex items-center">
          <span className="text-sm font-semibold text-gray-700 mr-4">Filter By :</span>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px] bg-white rounded-xl border-gray-200 focus:ring-[#222364]">
              <SelectValue placeholder="Most Recent" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="active">Active Only</SelectItem>
              <SelectItem value="completed">Completed Only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-3xl border-0 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-14 h-14 bg-gray-50 text-[#222364] flex items-center justify-center rounded-full font-bold">
                    <AvatarFallback className="bg-transparent">{job.company.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-lg font-black text-gray-900">{job.title}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-500">{job.location}</span>
                      <Badge 
                        variant="outline" 
                        className={`border border-gray-200 rounded-full flex items-center gap-1.5 px-3 py-0.5 ${
                          job.status === "Active" ? "text-green-700 bg-white" : "text-gray-700 bg-white"
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${job.status === "Active" ? "bg-green-500" : "bg-gray-400"}`}></span>
                        {job.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-sm text-gray-500 font-medium">{job.started}</span>
                  <Link href={`/talent/jobs/${job.id}`}>
                    <Button variant="outline" className="rounded-xl border-gray-200 text-[#222364] font-semibold hover:bg-gray-50 px-6">
                      View More
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl px-4 py-1.5 font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mt-2 text-sm">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

