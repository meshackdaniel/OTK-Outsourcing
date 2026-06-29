"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Card } from"@/components/ui/card";
import { Button } from"@/components/ui/button";
import { Calendar, Video, Clock } from"lucide-react";

export default function TalentInterviews() {
 return (
 <DashboardLayout type="talent">
 <div className="flex flex-col gap-8">
 
 <div className="flex flex-col md:flex-row justify-between items-end">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">Interviews</h1>
 <p className="text-gray-500 mt-1 font-medium">Manage your upcoming technical screenings and client calls.</p>
 </div>
 </div>

 <div className="grid gap-6 max-w-4xl">
 <Card className="p-0 rounded-2xl border border-gray-100 bg-white overflow-hidden">
 <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
 <div className="flex items-center gap-3">
 <Calendar className="h-5 w-5 text-blue-600"/>
 <h2 className="text-xl font-black text-[#222364]">Upcoming Interview</h2>
 </div>
 <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">TODAY</span>
 </div>
 <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
 <div>
 <h3 className="text-2xl font-black text-[#222364] mb-2">Technical Screening: React.js</h3>
 <p className="text-gray-500 font-bold mb-4">Acme Corp Ltd.</p>
 <div className="flex items-center gap-4 text-sm font-medium text-[#222364] bg-gray-50 px-4 py-2 rounded-xl w-fit">
 <Clock className="h-4 w-4"/> 2:00 PM - 3:00 PM (WAT)
 </div>
 </div>
 
 <div className="w-full md:w-auto">
 <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8 rounded-xl flex items-center gap-2">
 <Video className="h-5 w-5"/> Join Google Meet
 </Button>
 </div>
 </div>
 </Card>
 </div>

 </div>
 </DashboardLayout>
 );
}
