"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from"@/components/ui/card";
import { Button } from"@/components/ui/button";
import { BarChart3, TrendingUp, Users, Clock, AlertCircle, CheckCircle2 } from"lucide-react";

export default function HiringAnalyticsPage() {
 const isSubscribed = false; // Mock subscription state

 if (!isSubscribed) {
 return (
 <DashboardLayout type="employer">
 <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-2xl mx-auto space-y-6">
 <div className="w-20 h-20 bg-indigo-50 text-[#222364] rounded-full flex items-center justify-center">
 <BarChart3 className="w-10 h-10"/>
 </div>
 <h1 className="text-3xl font-black text-[#222364]">Hiring Analytics</h1>
 <p className="text-gray-500 text-lg">
 Unlock deep insights into your recruitment pipeline. Track time-to-hire, cost-per-hire, and advanced recruiter performance metrics.
 </p>
 <div className="bg-white border border-gray-200 p-6 rounded-2xl w-full text-left space-y-4">
 <h3 className="font-black text-gray-900 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-indigo-500"/> Advanced Metrics Included:</h3>
 <ul className="space-y-3 text-sm text-gray-600 ml-7 list-disc">
 <li>End-to-end recruitment funnel conversion rates</li>
 <li>Sourcing channel effectiveness</li>
 <li>Cost-per-hire breakdown by department</li>
 <li>Time-in-stage bottleneck analysis</li>
 </ul>
 </div>
 <Button className="w-full md:w-auto h-12 px-8 rounded-xl bg-[#222364] hover:bg-[#1a1a4b]">
 Upgrade to Analytics Pro
 </Button>
 </div>
 </DashboardLayout>
 );
 }

 return (
 <DashboardLayout type="employer">
 <div className="space-y-6">
 <div className="flex flex-col md:flex-row justify-between items-center">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">Hiring Analytics</h1>
 <p className="text-gray-500 mt-1">Your recruitment performance at a glance.</p>
 </div>
 <Button variant="outline"className="h-10 rounded-xl border-gray-200 text-gray-700">Export Report</Button>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
 {[
 { title:"Avg. Time-to-Hire", value:"18 Days", change:"-12%", icon: Clock },
 { title:"Cost-Per-Hire", value:"₦142,000", change:"-5%", icon: TrendingUp },
 { title:"Total Applicants", value:"1,204", change:"+24%", icon: Users },
 { title:"Offer Acceptance", value:"89%", change:"+2%", icon: CheckCircle2 },
 ].map((stat, i) => (
 <Card key={i} className="rounded-2xl border-gray-100">
 <CardContent className="p-6">
 <div className="flex flex-col md:flex-row justify-between items-start mb-4">
 <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
 <stat.icon className="w-5 h-5 text-[#222364]"/>
 </div>
 <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.startsWith('+') ?'bg-green-50 text-green-600':'bg-red-50 text-red-600'}`}>
 {stat.change}
 </span>
 </div>
 <div>
 <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
 <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>

 {/* Placeholder for actual charts in the future */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <CardTitle className="text-lg">Recruitment Funnel</CardTitle>
 </CardHeader>
 <CardContent className="h-64 flex items-center justify-center bg-gray-50 rounded-xl m-6 mt-0">
 <p className="text-gray-400 font-medium">Funnel Chart Visualization</p>
 </CardContent>
 </Card>
 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <CardTitle className="text-lg">Sourcing Channels</CardTitle>
 </CardHeader>
 <CardContent className="h-64 flex items-center justify-center bg-gray-50 rounded-xl m-6 mt-0">
 <p className="text-gray-400 font-medium">Pie Chart Visualization</p>
 </CardContent>
 </Card>
 </div>
 </div>
 </DashboardLayout>
 );
}
