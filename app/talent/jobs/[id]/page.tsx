"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Edit2, Clock, Upload, Download, Mail, CheckCircle2, MessageSquare, Plus } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function JobDetailsPage() {
  const params = useParams();
  
  return (
    <DashboardLayout type="talent">
      <div>
        
        {/* Breadcrumb & Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-2">
              <Link href="/talent/jobs" className="hover:text-gray-900 transition">Active Projects</Link>
              <span>›</span>
              <span>Design & Creative</span>
            </div>
            <h1 className="text-3xl font-bold text-[#222364]">Senior UI/UX Designer</h1>
            <div className="flex items-center gap-4 mt-3">
              <Badge className="bg-[#f2c060]/20 text-[#b38520] hover:bg-[#f2c060]/30 border-0 rounded-lg px-3 py-1 font-bold ">
                PRIORITY: HIGH
              </Badge>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>Due in 14 days</span>
              </div>
            </div>
          </div>
          <Link href={`/talent/jobs/${params.id}/check-in`}>
            <Button className="bg-[#f2c060] hover:bg-[#e0b050] text-[#222364] font-bold rounded-xl px-6 py-5 text-base">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Daily Check-in
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Project Brief */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 ">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#222364]/10 rounded-lg">
                    <Edit2 className="w-5 h-5 text-[#222364]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#222364]">Project Brief</h3>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 rounded-lg">
                  <Edit2 className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Redesign the enterprise dashboard for "Nexus Global Logistics." The primary goal is to simplify the multi-tier shipment tracking interface while maintaining full data transparency for regional managers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100/50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Target Date</p>
                  <p className="font-bold text-[#222364]">Oct 24, 2026</p>
                </div>
                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100/50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Project Budget</p>
                  <p className="font-bold text-[#222364]">₦12,500,000</p>
                </div>
                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100/50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Hours Logged</p>
                  <p className="font-bold text-[#222364]">42.5 / 160 hrs</p>
                </div>
              </div>
            </div>

            {/* Assigned Tasks */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 ">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#222364]/10 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#222364]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#222364]">Assigned Tasks</h3>
                </div>
                <div className="flex items-center gap-3 w-48">
                  <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">4 of 12 completed</span>
                  <Progress value={33} className="h-2 bg-gray-50 [&>div]:bg-[#b38520]" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/30">
                  <Checkbox checked className="mt-1 data-[state=checked]:bg-[#222364] data-[state=checked]:text-white rounded" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 line-through text-gray-500">Audit existing logistics wireframes</p>
                    <p className="text-sm text-gray-400 mt-0.5">Complete stakeholder interviews for current pain points.</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/30">
                  <Checkbox checked className="mt-1 data-[state=checked]:bg-[#222364] data-[state=checked]:text-white rounded" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 line-through text-gray-500">Define new design system tokens</p>
                    <p className="text-sm text-gray-400 mt-0.5">Typography and color accessibility audit.</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-200 bg-white ">
                  <Checkbox className="mt-1 rounded" />
                  <div className="flex-1">
                    <p className="font-semibold text-[#222364]">Prototype high-fidelity dashboard views</p>
                    <p className="text-sm text-gray-500 mt-0.5">Focus on the 'Real-time Fleet' widget interaction.</p>
                  </div>
                  <div className="flex -space-x-2 mt-1">
                    <Avatar className="w-6 h-6 border-2 border-white"><AvatarFallback className="bg-gray-200 text-[10px]">JD</AvatarFallback></Avatar>
                    <Avatar className="w-6 h-6 border-2 border-white"><AvatarFallback className="bg-blue-200 text-[10px]">AM</AvatarFallback></Avatar>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-red-100 bg-red-50/30">
                  <Checkbox className="mt-1 rounded" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Usability testing on mobile viewports</p>
                    <p className="text-sm text-gray-500 mt-0.5">Recruit 5 logistics coordinators for testing.</p>
                  </div>
                  <Badge variant="destructive" className="mt-1 bg-red-100 text-red-700 hover:bg-red-100 rounded-lg border-0 text-[10px] px-2 py-0">LATE</Badge>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 ">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-[#222364]/10 rounded-lg">
                  <Clock className="w-5 h-5 text-[#222364]" />
                </div>
                <h3 className="text-lg font-bold text-[#222364]">Recent Activity</h3>
              </div>
              
              <div className="space-y-6">
                
                <div className="flex gap-4 relative group">
                  <div className="absolute left-1.5 top-5 bottom-[-24px] w-px bg-gray-200 group-last:hidden"></div>
                  <div className="relative z-10 w-3 h-3 mt-1.5 flex-shrink-0 rounded-full bg-[#222364] ring-4 ring-white"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      You uploaded <span className="font-semibold text-[#222364]">User_Flow_v2.fig</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-4 relative group">
                  <div className="absolute left-1.5 top-5 bottom-[-24px] w-px bg-gray-200 group-last:hidden"></div>
                  <div className="relative z-10 w-3 h-3 mt-1.5 flex-shrink-0 rounded-full bg-orange-400 ring-4 ring-white"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">Sarah Miller (Client)</span> left a comment on <span className="font-semibold text-[#222364]">Navigation Refactor</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-4 relative group">
                  <div className="absolute left-1.5 top-5 bottom-[-24px] w-px bg-gray-200 group-last:hidden"></div>
                  <div className="relative z-10 w-3 h-3 mt-1.5 flex-shrink-0 rounded-full bg-green-500 ring-4 ring-white"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      Payment Received for <span className="font-semibold">Milestone 1: Discovery</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Yesterday, 4:30 PM</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-6">
            
            {/* Client Info */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 ">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Client Information</p>
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-14 h-14 rounded-xl border border-gray-100 ">
                  <AvatarFallback className="bg-[#222364] text-white rounded-xl text-xl font-bold">N</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Nexus Global</h4>
                  <p className="text-sm text-gray-500">Logistics & Supply Chain</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Status</span>
                  <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5"/> Verified</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-bold text-gray-900 flex items-center gap-1"><span className="text-[#f2c060]">★</span> 4.9 (124 reviews)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Member Since</span>
                  <span className="font-bold text-gray-900">Jan 2018</span>
                </div>
              </div>
              <Button variant="outline" className="w-full rounded-xl border-gray-200 text-[#222364] font-semibold hover:bg-gray-50 py-5">
                <Mail className="w-4 h-4 mr-2" />
                Message Client
              </Button>
            </div>

            {/* Project Files */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 ">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Project Files</p>
                <Link href="#" className="text-xs font-bold text-[#222364]">View All</Link>
              </div>
              <div className="space-y-3">
                
                <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Brand_Guidelines.pdf</p>
                      <p className="text-xs text-gray-500">2.4 MB • Oct 12</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                      <ImageFileIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Dashboard_Wireframes_v1.fig</p>
                      <p className="text-xs text-gray-500">14.8 MB • Oct 15</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                      <TableIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Shipment_Data_Model.xlsx</p>
                      <p className="text-xs text-gray-500">540 KB • Oct 16</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-gray-400" />
                </div>

              </div>

              <div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer">
                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                  <Plus className="w-4 h-4 text-gray-500" />
                </div>
                <p className="text-xs font-semibold text-gray-500">Drop files here to upload</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}

// Icons for the files
function FileText(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>;
}
function ImageFileIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"/></svg>;
}
function TableIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>;
}
