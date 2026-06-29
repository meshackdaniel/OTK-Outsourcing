"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from"@/components/ui/card";
import { Input } from"@/components/ui/input";
import { Badge } from"@/components/ui/badge";
import { useState } from"react";
import { Clock, Calendar, CheckCircle2, AlertCircle } from"lucide-react";
import { toast } from"sonner";

export default function TalentWorklogsPage() {
 const [hours, setHours] = useState("");
 const [description, setDescription] = useState("");

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (!hours || !description) {
 toast.error("Please fill in all fields");
 return;
 }
 toast.success("Work log submitted for approval.");
 setHours("");
 setDescription("");
 };

 return (
 <DashboardLayout type="talent">
 <div className="space-y-8">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">My Work Logs</h1>
 <p className="text-gray-500 mt-2 max-w-2xl">
 Log your daily or weekly hours here. Your logs must be approved by your line manager before payroll is processed.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="md:col-span-2 space-y-6">
 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <CardTitle className="text-xl">Submit New Log</CardTitle>
 <CardDescription>Enter details for the current pay period.</CardDescription>
 </CardHeader>
 <CardContent>
 <form onSubmit={handleSubmit} className="space-y-4">
 <div className="grid grid-cols-2 gap-4">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Date</label>
 <Input type="date"className="h-12 rounded-xl bg-gray-50 border-gray-200"defaultValue={new Date().toISOString().split('T')[0]} />
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Hours Worked</label>
 <Input 
 type="number"
 min="1"
 max="24"
 value={hours}
 onChange={(e) => setHours(e.target.value)}
 placeholder="e.g., 8"
 className="h-12 rounded-xl bg-gray-50 border-gray-200"
 />
 </div>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Task Description</label>
 <textarea 
 value={description}
 onChange={(e) => setDescription(e.target.value)}
 placeholder="Briefly describe what you worked on..."
 className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 h-32 resize-none outline-none focus:border-[#222364] focus:ring-1 focus:ring-[#222364]"
 ></textarea>
 </div>
 <Button type="submit"className="w-full h-12 rounded-xl bg-[#222364] hover:bg-[#1a1a4b]">
 Submit for Approval
 </Button>
 </form>
 </CardContent>
 </Card>

 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <CardTitle className="text-xl">Recent Logs</CardTitle>
 </CardHeader>
 <CardContent>
 <div className="space-y-4">
 {[
 { date:"Oct 24, 2026", hours: 8, status:"Approved", desc:"Frontend development and bug fixes"},
 { date:"Oct 25, 2026", hours: 8, status:"Pending", desc:"API Integration and testing"},
 ].map((log, i) => (
 <div key={i} className="flex flex-col md:flex-row justify-between items-center p-4 rounded-xl border border-gray-100">
 <div className="flex flex-col md:flex-row gap-4 items-center">
 <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#222364]">
 <Calendar className="w-5 h-5"/>
 </div>
 <div>
 <p className="font-semibold text-gray-900">{log.date} <span className="text-gray-500 font-normal">({log.hours} hrs)</span></p>
 <p className="text-sm text-gray-500 truncate max-w-[200px] md:max-w-md">{log.desc}</p>
 </div>
 </div>
 <Badge variant={log.status ==="Approved"?"default":"secondary"} className={log.status ==="Approved"?"bg-green-100 text-green-700 hover:bg-green-100 border-green-200":"bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200"}>
 {log.status}
 </Badge>
 </div>
 ))}
 </div>
 </CardContent>
 </Card>
 </div>

 <div className="space-y-6">
 <Card className="rounded-2xl border-gray-100 bg-gray-50">
 <CardHeader>
 <CardTitle className="text-lg">Payroll Status</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4">
 <div className="flex flex-col md:flex-row justify-between items-center text-sm">
 <span className="text-gray-500">Period</span>
 <span className="font-semibold text-gray-900">Oct 2026</span>
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center text-sm">
 <span className="text-gray-500">Total Approved Hours</span>
 <span className="font-semibold text-gray-900">120 hrs</span>
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center text-sm">
 <span className="text-gray-500">Pending Approval</span>
 <span className="font-semibold text-amber-600">8 hrs</span>
 </div>
 <div className="h-px bg-gray-200 my-2"></div>
 <div className="flex items-start gap-3 mt-4">
 <AlertCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5"/>
 <p className="text-xs text-gray-500">
 Your wallet will be credited automatically once your line manager approves all logs and the client funds the payroll cycle.
 </p>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </DashboardLayout>
 );
}
