"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Edit2, ArrowLeft, Video, FileText } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DailyCheckInPage() {
  const params = useParams();

  return (
    <DashboardLayout type="talent">
      <div>
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Link href={`/talent/jobs/${params.id}`}>
            <Button variant="ghost" size="icon" className="hover:bg-gray-200 rounded-xl">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span>Senior UI/UX Designer</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-500">Check In</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Project Brief */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 ">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#222364]/10 rounded-lg">
                    <Edit2 className="w-5 h-5 text-[#222364]" />
                  </div>
                  <h3 className="text-lg font-black text-[#222364]">Project Brief</h3>
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

            {/* Check-In Form */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700">Project Selection</label>
                  <Select defaultValue="cloud">
                    <SelectTrigger className="w-full bg-white rounded-xl border-gray-200 py-6 focus:ring-[#222364]">
                      <SelectValue placeholder="Select Project" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="cloud">Cloud Infrastructure Migration</SelectItem>
                      <SelectItem value="nexus">Nexus Global Logistics Dash</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700">Hours Worked</label>
                  <Input placeholder="e.g. 7.5" className="rounded-xl border-gray-200 py-6" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700">Work Summary</label>
                <textarea 
                  className="w-full min-h-[120px] p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#222364] focus:border-transparent resize-none text-sm placeholder:text-gray-400"
                  placeholder="What did you achieve today? Be specific about milestones reached..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Video Upload */}
                <div className="border border-dashed border-[#b1b2d6] bg-gray-50/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
                    <Video className="w-5 h-5 text-[#222364]" />
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Video Documentation</p>
                  <p className="text-xs text-gray-500 mb-3">Upload Loom or walkthrough video<br/>(Max 500MB)</p>
                  <span className="text-xs font-bold text-[#222364] border-b border-[#222364] pb-0.5">Browse Files</span>
                </div>

                {/* Docs Upload */}
                <div className="border border-dashed border-[#b1b2d6] bg-gray-50/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer">
                  <div className="w-12 h-12 bg-[#fdf5e6] rounded-full flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-[#b38520]" />
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Commercial Documents</p>
                  <p className="text-xs text-gray-500 mb-3">Invoices or Receipts<br/>(PDF/PNG)</p>
                  <span className="text-xs font-bold text-[#222364] border-b border-[#222364] pb-0.5">Upload</span>
                </div>

              </div>

              <div className="pt-4 flex justify-end">
                <Button className="bg-[#222364] hover:bg-[#1a1b4b] text-white font-bold rounded-xl px-8 py-6 text-sm">
                  Submit Daily Log
                </Button>
              </div>

            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-6">
            
            {/* Performance Snapshot */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 ">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Performance Snapshot</p>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">Monthly Attendance</span>
                <span className="text-lg font-bold text-[#222364]">98.2%</span>
              </div>
              <Progress value={98.2} className="h-2.5 bg-gray-50 [&>div]:bg-[#222364] mb-4" />
              <p className="text-xs text-gray-500">
                Excellent. You've missed 0 check-ins this month.
              </p>
            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
