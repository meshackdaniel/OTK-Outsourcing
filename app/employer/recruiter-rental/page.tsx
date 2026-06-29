"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from"@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from"@/components/ui/select";
import { Input } from"@/components/ui/input";
import { useState } from"react";
import { Briefcase, Clock, Users, ArrowRight, CheckCircle2 } from"lucide-react";
import { toast } from"sonner";

export default function RecruiterRentalPage() {
 const [model, setModel] = useState("hourly");
 const [tier, setTier] = useState("mid");
 const [hours, setHours] = useState(10);

 const hourlyRates: Record<string, number> = {
 junior: 10000,
 mid: 20000,
 senior: 35000,
 executive: 60000
 };

 const handleActivate = () => {
 toast.success("Recruiter activation request sent. Please ensure your wallet is funded.");
 };

 return (
 <DashboardLayout type="employer">
 <div className="space-y-6">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">On-Demand Recruiter Rental</h1>
 <p className="text-gray-500 mt-2 max-w-2xl">
 Rent a professional recruiter on an hourly or project basis to accelerate your hiring process without long-term commitments.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="md:col-span-2 space-y-6">
 <Card className="border-gray-100 rounded-2xl">
 <CardHeader>
 <CardTitle className="text-xl">Engagement Model</CardTitle>
 <CardDescription>Choose how you want to work with our recruiters.</CardDescription>
 </CardHeader>
 <CardContent className="space-y-6">
 <div className="grid grid-cols-2 gap-4">
 <div 
 onClick={() => setModel("hourly")}
 className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${model ==="hourly"?"border-[#222364] bg-gray-50/50":"border-gray-100 hover:border-gray-200"}`}
 >
 <Clock className={`w-6 h-6 mb-3 ${model ==="hourly"?"text-[#222364]":"text-gray-400"}`} />
 <h3 className="font-black text-gray-900">Hourly Model</h3>
 <p className="text-sm text-gray-500 mt-1">Pay for specific hours worked.</p>
 </div>
 <div 
 onClick={() => setModel("project")}
 className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${model ==="project"?"border-[#222364] bg-gray-50/50":"border-gray-100 hover:border-gray-200"}`}
 >
 <Briefcase className={`w-6 h-6 mb-3 ${model ==="project"?"text-[#222364]":"text-gray-400"}`} />
 <h3 className="font-black text-gray-900">Project Model</h3>
 <p className="text-sm text-gray-500 mt-1">Fixed fee for specific hiring goals.</p>
 </div>
 </div>

 {model ==="hourly"&& (
 <div className="space-y-4 pt-4 border-t border-gray-100">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Recruiter Tier</label>
 <Select value={tier} onValueChange={setTier}>
 <SelectTrigger className="h-12 rounded-xl bg-gray-50 border-gray-200">
 <SelectValue placeholder="Select level"/>
 </SelectTrigger>
 <SelectContent>
 <SelectItem value="junior">Junior Recruiter (₦10,000/hr)</SelectItem>
 <SelectItem value="mid">Mid-Level Recruiter (₦20,000/hr)</SelectItem>
 <SelectItem value="senior">Senior Recruiter (₦35,000/hr)</SelectItem>
 <SelectItem value="executive">Executive Search (₦60,000/hr)</SelectItem>
 </SelectContent>
 </Select>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Estimated Hours Needed (Minimum 10)</label>
 <Input 
 type="number"
 min={10} 
 value={hours} 
 onChange={(e) => setHours(Number(e.target.value))}
 className="h-12 rounded-xl bg-gray-50 border-gray-200"
 />
 </div>
 </div>
 )}

 {model ==="project"&& (
 <div className="space-y-4 pt-4 border-t border-gray-100">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Project Scope</label>
 <textarea 
 placeholder="E.g., Hire 10 Sales Reps within 30 days"
 className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 h-32 resize-none outline-none focus:border-[#222364] focus:ring-1 focus:ring-[#222364]"
 ></textarea>
 </div>
 <div className="bg-amber-50 p-4 rounded-xl flex gap-3">
 <Users className="w-5 h-5 text-amber-600 shrink-0"/>
 <p className="text-sm text-amber-800">
 Project scopes will be reviewed by our admin team who will provide a fixed fee quote based on the estimated effort.
 </p>
 </div>
 </div>
 )}
 </CardContent>
 </Card>
 </div>

 <div className="space-y-6">
 <Card className="border-gray-100 rounded-2xl bg-gray-50">
 <CardHeader>
 <CardTitle className="text-lg">Estimation Summary</CardTitle>
 </CardHeader>
 <CardContent className="space-y-6">
 {model ==="hourly"? (
 <>
 <div className="space-y-3">
 <div className="flex flex-col md:flex-row justify-between text-sm">
 <span className="text-gray-500">Hourly Rate</span>
 <span className="font-semibold text-gray-900">₦{hourlyRates[tier].toLocaleString()}</span>
 </div>
 <div className="flex flex-col md:flex-row justify-between text-sm">
 <span className="text-gray-500">Hours</span>
 <span className="font-semibold text-gray-900">{Math.max(10, hours)} hrs</span>
 </div>
 <div className="h-px bg-gray-200 my-2"></div>
 <div className="flex flex-col md:flex-row justify-between">
 <span className="font-semibold text-gray-700">Total Pre-Fund Required</span>
 <span className="font-bold text-xl text-[#222364]">
 ₦{(hourlyRates[tier] * Math.max(10, hours)).toLocaleString()}
 </span>
 </div>
 </div>
 <Button onClick={handleActivate} className="w-full h-12 rounded-xl bg-[#222364] hover:bg-[#1a1a4b]">
 Proceed to Activation
 <ArrowRight className="w-4 h-4 ml-2"/>
 </Button>
 </>
 ) : (
 <>
 <div className="text-center py-6">
 <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3"/>
 <p className="text-gray-500 text-sm">Submit your project scope to receive a customized quote.</p>
 </div>
 <Button onClick={handleActivate} className="w-full h-12 rounded-xl bg-[#222364] hover:bg-[#1a1a4b]">
 Request Quote
 </Button>
 </>
 )}

 <div className="space-y-2 mt-6">
 <h4 className="text-xs font-black text-gray-500 uppercase tracking-wider">What's included</h4>
 <ul className="space-y-2">
 {["Dedicated expert recruiter","Candidate sourcing & screening","Interview scheduling","Weekly progress reports"].map((item, i) => (
 <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
 <CheckCircle2 className="w-4 h-4 text-green-500"/> {item}
 </li>
 ))}
 </ul>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </DashboardLayout>
 );
}
