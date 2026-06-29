"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Avatar, AvatarFallback } from"@/components/ui/avatar";
import { Badge } from"@/components/ui/badge";
import { CheckCircle2, MessageSquare, Lightbulb, Star } from"lucide-react";
import Link from"next/link";
import { useParams } from"next/navigation";

export default function JobInviteDetails() {
 const params = useParams();

 return (
 <DashboardLayout type="talent">
 <div className="relative pb-32">
 <div className="max-w-[1200px] mx-auto">
 
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 
 {/* Main Content */}
 <div className="lg:col-span-2">
 <div className="bg-white rounded-3xl p-8 border border-gray-100">
 
 {/* Header */}
 <div className="flex flex-col md:flex-row justify-between items-start mb-8 pb-8 border-b border-gray-100">
 <div className="flex items-center gap-4">
 <Avatar className="w-16 h-16 bg-gray-50 text-[#222364] flex items-center justify-center font-bold text-xl">
 <AvatarFallback className="bg-transparent">BE</AvatarFallback>
 </Avatar>
 <div>
 <h1 className="text-2xl font-black text-gray-900">Backend Engineer</h1>
 <div className="flex items-center gap-3 mt-1.5">
 <span className="text-gray-500 font-medium">Remote, Lagos</span>
 <Badge variant="outline"className="text-green-700 bg-white border border-gray-200 rounded-full px-3 py-0.5 flex items-center gap-1.5">
 <span className="w-2 h-2 rounded-full bg-green-500"></span>
 Job Open
 </Badge>
 </div>
 </div>
 </div>
 <div className="text-right">
 <p className="text-sm text-gray-500 font-medium">Posted 2 days ago</p>
 <p className="text-2xl font-bold text-gray-900 mt-1">₦400,000</p>
 </div>
 </div>

 {/* Job Description */}
 <div className="mb-8">
 <h3 className="font-black text-gray-900 text-lg mb-4">Job Description</h3>
 <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
 <p>
 We are looking for a strategic Lead UX Researcher to guide our global fintech expansion. In this role, you will be responsible for defining user journey frameworks across multiple regions, conducting deep-dive ethnographic studies, and translating complex financial data behaviors into actionable design insights.
 </p>
 <p>
 The ideal candidate thrives in high-scale enterprise environments and possesses the ability to mentor junior researchers while maintaining a hands-on approach to critical project phases. You will collaborate directly with C-suite stakeholders at Nexus Global to align user needs with long-term business goals.
 </p>
 </div>
 </div>

 {/* Required Skills */}
 <div>
 <h3 className="font-black text-gray-900 text-lg mb-4">Required Skills</h3>
 <div className="flex flex-wrap gap-2">
 {["3-5 years experience","AutoCad","SolidWorks","Thermodynamics","Design"].map(skill => (
 <span key={skill} className="px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
 {skill}
 </span>
 ))}
 </div>
 </div>

 </div>
 </div>

 {/* Right Sidebar */}
 <div className="space-y-6">
 
 {/* About Client */}
 <div className="bg-white rounded-3xl p-6 border border-gray-100">
 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">About the client</p>
 
 <div className="flex items-center gap-3 mb-6">
 <div className="w-12 h-12 bg-[#222364]/5 rounded-xl flex items-center justify-center">
 <span className="font-bold text-[#222364] text-lg">N</span>
 </div>
 <div>
 <h4 className="font-black text-gray-900 text-lg">Nexus Global</h4>
 <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
 <div className="flex text-[#f2c060]">
 <Star className="w-3.5 h-3.5 fill-current"/>
 <Star className="w-3.5 h-3.5 fill-current"/>
 <Star className="w-3.5 h-3.5 fill-current"/>
 <Star className="w-3.5 h-3.5 fill-current"/>
 <Star className="w-3.5 h-3.5 fill-current text-gray-300"/>
 </div>
 <span className="ml-1 font-medium">(4.9/5)</span>
 </div>
 </div>
 </div>

 <div className="space-y-4">
 <div className="flex flex-col md:flex-row justify-between items-center text-sm">
 <span className="text-gray-500">Total Spend</span>
 <span className="font-bold text-gray-900">$2.4M+</span>
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center text-sm">
 <span className="text-gray-500">Member since</span>
 <span className="font-bold text-gray-900">Jan 2019</span>
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center text-sm">
 <span className="text-gray-500">Location</span>
 <span className="font-bold text-gray-900">Geneva, CH</span>
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center text-sm">
 <span className="text-gray-500">Payment Status</span>
 <span className="font-bold text-[#b38520] flex items-center gap-1.5">
 <CheckCircle2 className="w-4 h-4"/> Verified
 </span>
 </div>
 </div>
 </div>

 {/* Portal Pro Tip */}
 <div className="bg-[#f8f8fb] rounded-3xl p-6 border border-gray-200/60">
 <div className="flex items-center gap-2 mb-3">
 <Lightbulb className="w-5 h-5 text-[#222364]"/>
 <h4 className="font-black text-[#222364]">Portal Pro Tip</h4>
 </div>
 <p className="text-sm text-gray-600 leading-relaxed">
 Highly rated clients like Nexus Global often hire within the first 24 hours. Accepting now secures your position in their preferred vendor list.
 </p>
 </div>

 </div>

 </div>
 </div>

 {/* Bottom Action Bar */}
 <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-white border-t border-gray-200 p-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 z-40">
 <div>
 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Action Required</p>
 <p className="font-bold text-gray-900">Invitation expires in 18 hours</p>
 </div>
 <div className="flex items-center gap-3 w-full md:w-auto">
 <Button variant="outline"className="flex-1 md:flex-none rounded-xl border-gray-200 text-gray-700 font-semibold px-6 py-5 hover:bg-gray-50">
 Decline Offer
 </Button>
 <Button variant="outline"className="flex-1 md:flex-none rounded-xl border-gray-200 text-[#222364] font-semibold px-6 py-5 hover:bg-gray-50">
 <MessageSquare className="w-4 h-4 mr-2"/>
 Message Client
 </Button>
 <Button className="flex-1 md:flex-none rounded-xl bg-[#222364] hover:bg-[#1a1b4b] text-white font-bold px-10 py-5">
 Apply
 </Button>
 </div>
 </div>

 </div>
 </DashboardLayout>
 );
}
