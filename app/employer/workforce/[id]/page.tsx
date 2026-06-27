"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, CheckCircle2, XCircle, FileText, Download, Play, Edit2, FileIcon, ImageIcon, Save, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

export default function DailyWorkLogDetails() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  
  // Make name dynamic-ish based on ID if we wanted to, but we'll stick to Bliss Maurice for now
  const employeeName = "Bliss Maurice";
  
  const [logStatus, setLogStatus] = useState<"pending" | "approved" | "revision" | "rejected">("pending");
  const [isEditingSummary, setIsEditingSummary] = useState(false);
  const [workSummary, setWorkSummary] = useState(
    "Completed the migration of the legacy user dashboard to the new React infrastructure. Resolved 3 critical bugs related to state management during the checkout flow. Attended the daily standup and paired with the backend team to finalize the API contracts for the upcoming notification service."
  );

  const handleDownload = (filename: string) => {
    // Mock download functional behavior
    alert(`Downloading ${filename}...`);
  };

  const handlePlayVideo = () => {
    alert("Playing Daily Walkthrough.webm...");
  };

  const renderStatusBadge = () => {
    switch (logStatus) {
      case "approved":
        return (
          <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-green-200">
            <CheckCircle2 className="w-3.5 h-3.5" /> Approved
          </span>
        );
      case "rejected":
        return (
          <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-red-200">
            <XCircle className="w-3.5 h-3.5" /> Rejected
          </span>
        );
      case "revision":
        return (
          <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-orange-200">
            <FileText className="w-3.5 h-3.5" /> Revision Requested
          </span>
        );
      default:
        return (
          <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-amber-200">
            Pending Review
          </span>
        );
    }
  };

  return (
    <DashboardLayout type="employer">
      <div className="space-y-6 max-w-[1200px]">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-sm font-semibold mb-6">
          <Link href="/employer/workforce" className="flex items-center gap-2 text-gray-900 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Senior UX designer
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400">Check In</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Left Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Project Brief */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[#222364] font-bold">
                  <FileText className="w-5 h-5" />
                  <h2>Project Brief</h2>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${id || 'bliss'}`} />
                    <AvatarFallback>{employeeName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{employeeName}</h3>
                    <p className="text-gray-500 text-sm">Senior Frontend Developer • ID: #{id || 'OaaS-8492'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Attendance</p>
                    <p className="font-bold text-[#222364] text-xl">92% <span className="text-green-500 text-sm">↗</span></p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Productivity</p>
                    <p className="font-bold text-[#222364] text-xl">84% <span className="text-gray-400 text-sm">→</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Work Log */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[#222364] font-bold">
                  <FileText className="w-5 h-5" />
                  <h2>Daily Work Log</h2>
                </div>
                {renderStatusBadge()}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Log Date</p>
                  <p className="font-bold text-gray-900">Tuesday, June 16, 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Project</p>
                  <p className="font-bold text-gray-900">Lasioweb Enterprise Migration</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Hours Logged</p>
                  <p className="font-bold text-[#222364]">7.5 hrs</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-gray-600 font-semibold">
                    <FileText className="w-4 h-4" />
                    <h3>Work Summary</h3>
                  </div>
                  {!isEditingSummary ? (
                    <button onClick={() => setIsEditingSummary(true)} className="text-gray-400 hover:text-gray-600 flex items-center gap-1 text-xs font-semibold">
                      <Edit2 className="w-3.5 h-3.5" /> Edit Summary
                    </button>
                  ) : (
                    <button onClick={() => setIsEditingSummary(false)} className="text-green-600 hover:text-green-700 flex items-center gap-1 text-xs font-semibold">
                      <Save className="w-3.5 h-3.5" /> Save
                    </button>
                  )}
                </div>
                
                {isEditingSummary ? (
                  <Textarea 
                    value={workSummary}
                    onChange={(e) => setWorkSummary(e.target.value)}
                    className="min-h-[120px] rounded-xl border-gray-200"
                  />
                ) : (
                  <div className="bg-gray-50 rounded-xl p-5 text-gray-600 text-sm leading-relaxed border border-gray-100">
                    {workSummary}
                  </div>
                )}
              </div>
            </div>

            {/* Supporting Documentation */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 text-[#222364] font-bold mb-6">
                <FileText className="w-5 h-5" />
                <h2>Supporting Documentation</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-xl overflow-hidden flex flex-col group cursor-pointer" onClick={handlePlayVideo}>
                  <div className="bg-gray-200 h-32 relative flex items-center justify-center transition group-hover:bg-gray-300">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Play className="w-5 h-5 text-[#222364] ml-1" />
                    </button>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="font-semibold text-gray-900 text-sm">Daily Walkthrough.webm</p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Play className="w-3 h-3" /> Video (45 MB)
                    </p>
                  </div>
                </div>

                <div className="space-y-4 flex flex-col justify-center">
                  <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-100 transition" onClick={() => handleDownload("API_Contract_v2.pdf")}>
                    <div className="flex items-center gap-3">
                      <div className="text-red-500 bg-red-100 p-2 rounded-lg">
                        <FileIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">API_Contract_v2.pdf</p>
                        <p className="text-xs text-gray-500">1.2 MB</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-100 transition" onClick={() => handleDownload("Bug_Report.png")}>
                    <div className="flex items-center gap-3">
                      <div className="text-amber-500 bg-amber-100 p-2 rounded-lg">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Bug_Report.png</p>
                        <p className="text-xs text-gray-500">840 KB</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Approval Decision */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Approval Decision</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Review the submitted hours and documentation. Actions taken here will update the workforce payroll log.
              </p>

              <div className="space-y-3">
                <Button 
                  onClick={() => setLogStatus("approved")}
                  disabled={logStatus === "approved"}
                  className={cn(
                    "w-full h-12 rounded-xl transition",
                    logStatus === "approved" ? "bg-green-600 text-white opacity-100" : "bg-[#1a1740] hover:bg-[#110f2d] text-white"
                  )}
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  {logStatus === "approved" ? "Approved (7.5 hrs)" : "Approve Log (7.5 hrs)"}
                </Button>
                
                <Button 
                  onClick={() => setLogStatus("revision")}
                  disabled={logStatus === "revision"}
                  variant="outline"
                  className={cn(
                    "w-full h-12 rounded-xl transition",
                    logStatus === "revision" ? "border-orange-500 text-orange-600 bg-orange-50" : "border-[#1a1740] text-[#1a1740] hover:bg-gray-50"
                  )}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {logStatus === "revision" ? "Revision Requested" : "Request Revision"}
                </Button>
                
                <Button 
                  onClick={() => setLogStatus("rejected")}
                  disabled={logStatus === "rejected"}
                  variant="outline"
                  className={cn(
                    "w-full h-12 rounded-xl transition",
                    logStatus === "rejected" ? "bg-red-600 text-white border-red-600" : "bg-red-50 border-red-100 text-red-600 hover:bg-red-100 hover:text-red-700"
                  )}
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  {logStatus === "rejected" ? "Log Rejected" : "Reject Log"}
                </Button>
              </div>

              {logStatus !== "pending" && (
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <button onClick={() => setLogStatus("pending")} className="text-xs font-bold text-gray-400 hover:text-gray-600 flex items-center justify-center gap-1 mx-auto">
                    <X className="w-3 h-3" /> Clear Decision
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
